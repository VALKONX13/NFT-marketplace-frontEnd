"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import RedarkButton from "@/components/RedarkButton";
import MockData from '@/utils/mockData';

const defaultAvatars = [
  "/assets/img/duck-nft.jpg",
  "/assets/img/lizard-main.jpg",
  "/assets/img/NFT-art.png",
];

export default function UserAccount() {
  const [avatars, setAvatars] = useState(defaultAvatars);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions"
      ),
    }),
    onSubmit: (values) => {
      if (!selectedAvatar) {
        alert("Please select an avatar.");
        return;
      }
      alert(JSON.stringify({ ...values, avatar: selectedAvatar }, null, 2));
    },
  });

  const handleAvatarClick = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAvatars((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-redark-navy grid grid-cols-12 gap-8 h-auto">
      <Sidebar
        dividerTitles={["My Account"]}
        navItems={[MockData.userAccountSideBarItems]}
        button={false}
        className="col-start-1 col-end-3"
      />
      <motion.div
        className="p-10 min-h-screen text-white col-span-9 py-4 flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-md mb-10 font-mokoto uppercase">USER CREDENTIALS</h1>
        <div className="mb-6">
          <h2 className="text-xl font-md font-mokoto mb-20">AVATAR</h2>
          <div className="flex gap-4 flex-wrap">
            {/* Upload Box */}
            <label className="w-[165px] h-[165px] bg-white/25 flex items-center justify-center rounded-[20px] cursor-pointer">
              <span className="text-3xl font-bold">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.9467 12.5867C37.6533 12.5867 38.5067 13.5467 38.5067 15.4667V22.9333C38.5067 24.8533 37.6533 25.8133 35.9467 25.8133H25.92V35.84C25.92 37.6178 24.96 38.5067 23.04 38.5067H15.5733C13.6533 38.5067 12.6933 37.6178 12.6933 35.84V25.8133H2.66667C0.888889 25.8133 0 24.8533 0 22.9333V15.4667C0 13.5467 0.888889 12.5867 2.66667 12.5867H12.6933V2.56001C12.6933 0.853335 13.6533 0 15.5733 0H23.04C24.96 0 25.92 0.853335 25.92 2.56001V12.5867H35.9467Z"
                    fill="white"
                    fill-opacity="0.25"
                  />
                </svg>
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
            {/* Avatars */}
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`w-[165px] h-[165px] rounded-[20px] overflow-hidden border-4 ${
                  selectedAvatar === avatar
                    ? "border-redark-purple"
                    : "border-transparent"
                } cursor-pointer relative`} // add relative for Image `fill`
                onClick={() => handleAvatarClick(avatar)}
              >
                <Image
                  src={avatar}
                  alt="avatar"
                  fill
                  className="object-cover"
                  sizes="165px"
                />
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="max-w-[50%]">
            <h2 className="text-xl font-medium mt-14 mb-16 font-mokoto">
              PERSONAL DETAILS
            </h2>

            <input
              type="text"
              name="name"
              placeholder="John Doe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="block w-full bg-white/25 p-4 rounded-full text-white"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}

            <input
              type="email"
              name="email"
              placeholder="john@doe.co"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="block w-full bg-white/25 p-4 rounded-full text-white mt-4"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 font-azeret text-gray-400">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
                className="hidden peer"
              />
              <div
                className={`w-4 h-4 rounded-sm border border-white peer-checked:bg-redark-purple peer-checked:border-white transition
                    `}
              />
              <p className="font-azeret text-[14px]">
                I agree with the Terms & Conditions
              </p>
            </label>
          </div>

          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
          <RedarkButton type="submit" title="APPLY CHANGES" />
        </form>
      </motion.div>
    </div>
  );
}
