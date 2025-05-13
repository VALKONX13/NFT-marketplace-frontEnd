import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import RedarkButton from "@/components/RedarkButton";

export default function OwnershipPerks() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      portfolio: "",
      reason: "",
      terms: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      portfolio: Yup.string()
        .url("Invalid URL")
        .required("Portfolio is required"),
      reason: Yup.string()
        .min(10, "Tell us a bit more")
        .required("This field is required"),
      terms: Yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert("Application Submitted:\n" + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div className="bg-redark-navy text-white px-32 py-16">
      {/* DISCOVER SECTION */}
      <section className="mb-26">
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1 flex flex-col justify-between items-baseline">
            <h1 className="text-4xl font-mokoto tracking-widest mb-2">
              DISCOVER <span className="text-redark-purple">ARKHIVE NFTS</span>
            </h1>
            <div className="mb-10">
              <p className="text-sm text-white/80 max-w-2xl font-azeret">
                Own a piece of the ARKHIVE legacy.
              </p>
              <p className="text-sm text-white/80 max-w-2xl font-azeret">
                Premium digital assets representing the foundation of the
                ecosystem.
              </p>
            </div>
            <button className="bg-gradient-to-r from-redark-purple to-[#543199] rounded-full px-6 pt-3 pb-2.5 uppercase text-xs border-2 border-white font-mokoto tracking-widest">
              Explore the Arkhive Marketplace
            </button>

            {/* OWNER PERKS */}
            <div className="mt-12 space-y-3 text-sm font-azeret text-gray-400">
              <p className="font-mokoto text-xl text-white">Owner Perks</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                      fill="#8C52FF"
                    />
                  </svg>
                  <p>Access to exclusive events globally</p>
                </div>
                <div className="flex gap-4 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                      fill="#8C52FF"
                    />
                  </svg>
                  <p>Boosted platform visibility for your creations</p>
                </div>
                <div className="flex gap-4 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                      fill="#8C52FF"
                    />
                  </svg>
                  <p>Higher on-chain ranking within the ecosystem</p>
                </div>
                <div className="flex gap-4 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                      fill="#8C52FF"
                    />
                  </svg>
                  <p>Exclusive minting privileges and lower fees</p>
                </div>
              </div>
            </div>

            {/* CRAFTING PROCESS */}
            <div className="mt-20 w-[-webkit-fill-available]">
              <h2 className="text-xl font-mokoto tracking-wider mb-4">
                Crafting Process
              </h2>
              <p className="text-sm mb-10 font-azeret">
                Each ARKHIVE NFT is meticulously crafted through a collaboration
                between:
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-[#4F2F99]/50 border border-redark-purple rounded-[20px] py-8 px-5 flex-1">
                  <div
                    className="pr-8 pl-3 py-3 text-sm 
                    bg-[url('/assets/img/arkhive-team.svg')] bg-right bg-contain bg-no-repeat"
                  >
                    <p className="font-mokoto text-xl">ARKHIVE TEAM</p>
                    <span className="text-white/70">
                      Core designers and visionaries
                    </span>
                  </div>
                </div>
                <div className="bg-[#4F2F99]/50 border border-redark-purple rounded-[20px] py-8 px-5 flex-1">
                  <div
                    className="pr-8 pl-3 py-3 text-sm 
                    bg-[url('/assets/img/selected-artists.svg')] bg-right bg-contain bg-no-repeat"
                  >
                    <p className="font-mokoto text-xl">SELECTED ARTISTS</p>
                    <span className="text-white/70">
                      Hand-picked creative collaborators
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NFT Cards */}
          <div className="grid grid-cols-2 gap-4 gap-y-12 mt-12 col-span-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-redark-purple/13 aspect-auto p-6 rounded-[20px] overflow-hidden"
              >
                <Image
                  src="/assets/img/duck-nft.jpg"
                  alt="NFT Artwork"
                  width={500}
                  height={500}
                  className="w-full object-cover h-auto max-h-[260px] rounded-[20px]"
                />
                <p className="mt-3 mb-4">Artwork Title Possible Text</p>
                <div className="flex ">
                  <p className="text-gray-400 font-azeret grow">current bid</p>
                  <p className="">0.5 ARKV</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATED ARTIST SECTION */}
      <section>
        <h2 className="text-4xl font-mokoto uppercase tracking-widest mb-4">
          Become an{" "}
          <span className="text-redark-purple">Affiliated Artist</span>
        </h2>
        <p className="text-sm text-white/80 mb-10 font-azeret">
          Join our exclusive network of creators shaping the future of digital
          art in the ARKHIVE ecosystem.
        </p>

        {/* Bonuses and Apply */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bonuses */}
          <div>
            <div
              className="bg-[#4F2F99]/50 font-mokoto border border-redark-purple px-6 pt-14 pb-12 text-2xl rounded-[20px]
                uppercase tracking-widest text-center mb-2"
            >
              Affiliated Artist Bonuses
            </div>
            <div className="bg-[#4F2F99]/25 border border-redark-purple p-12 rounded-[20px] space-y-4 text-sm">
              <div className="flex gap-4 mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                    fill="#8C52FF"
                  />
                </svg>
                <div className="">
                  <p className="font-mokoto text-xl mb-3">Premium Exposure</p>
                  <p className="font-azeret text-gray-400">
                    Elevated visibility within the marketplace.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                    fill="#8C52FF"
                  />
                </svg>
                <div className="">
                  <p className="font-mokoto text-xl mb-3">
                    Bespoke Opportunities
                  </p>
                  <p className="font-azeret text-gray-400">
                    Selling, networking, and invitations to ARK ecosystem events
                    worldwide.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                    fill="#8C52FF"
                  />
                </svg>
                <div className="">
                  <p className="font-mokoto text-xl mb-3">
                    Physical NFT Implementation
                  </p>
                  <p className="font-azeret text-gray-400">
                    Physical representations of your ARKHIVE NFTs with embedded
                    QR codes linking directly to the marketplace.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mb-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM17.2969 9.79688L11.2969 15.7969C10.8562 16.2375 10.1438 16.2375 9.70781 15.7969L6.70781 12.7969C6.26719 12.3562 6.26719 11.6438 6.70781 11.2078C7.14844 10.7719 7.86094 10.7672 8.29688 11.2078L10.5 13.4109L15.7031 8.20312C16.1437 7.7625 16.8562 7.7625 17.2922 8.20312C17.7281 8.64375 17.7328 9.35625 17.2922 9.79219L17.2969 9.79688Z"
                    fill="#8C52FF"
                  />
                </svg>
                <div className="">
                  <p className="font-mokoto text-xl mb-3">Enhanced Funding</p>
                  <p className="font-azeret text-gray-400">
                    Opportunities through future collaborations with
                    ARK-affiliated artists and ecosystem initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center -mt-6">
              <RedarkButton title="Show Other Affiliates" className="" />
            </div>
          </div>

          {/* Bonuses Section */}
          {/* Apply Now */}
          <section className="mt-24">
            <div className="">
              <div
                className="bg-[#4F2F99]/50 font-mokoto border border-redark-purple px-6 pt-14 pb-12 text-2xl rounded-[20px]
                uppercase tracking-widest text-center mb-2"
              >
                APPLY NOW
              </div>
              {/* Form Section */}
              <form
                onSubmit={formik.handleSubmit}
                className="bg-[#4F2F99]/25 border border-redark-purple rounded-[20px] px-20 py-10 space-y-4"
              >
                <div className="max-w-[85%] mx-auto flex flex-col gap-4">
                  <div>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Full name please"
                      className="w-full h-[72px] px-8 rounded-full bg-white/25 text-sm placeholder-white outline-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName && (
                      <p className="text-red-400 text-xs mt-1">
                        {formik.errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-[72px] px-8 rounded-full bg-white/25 text-sm placeholder-white outline-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      name="portfolio"
                      type="url"
                      placeholder="Portfolio URL"
                      className="w-full h-[72px] px-8 rounded-full bg-white/25 text-sm placeholder-white outline-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.portfolio}
                    />
                    {formik.touched.portfolio && formik.errors.portfolio && (
                      <p className="text-red-400 text-xs mt-1">
                        {formik.errors.portfolio}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="reason"
                      placeholder="Why do you want to join ARKHIVE? Tell us about your art style and motivation"
                      rows={8}
                      className="w-full px-8 py-6 rounded-[40px] bg-white/25 text-sm placeholder-white outline-none"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.reason}
                    />
                    {formik.touched.reason && formik.errors.reason && (
                      <p className="text-red-400 text-xs mt-1">
                        {formik.errors.reason}
                      </p>
                    )}
                  </div>
                  <div className="flex">
                    <label className="flex items-center gap-3 space-x-2 cursor-pointer grow">
                      <input
                        type="checkbox"
                        name="terms"
                        className="hidden peer"
                        onChange={formik.handleChange}
                        checked={formik.values.terms}
                      />
                      <div
                        className={`w-4 h-4 rounded-sm border border-white peer-checked:bg-redark-purple peer-checked:border-white transition
                    `}
                      />
                      <p className="font-azeret text-[14px]">
                        I agree with the Terms & Conditions
                      </p>
                    </label>
                    {formik.touched.terms && formik.errors.terms && (
                      <p className="text-red-400 text-xs mt-1">
                        {formik.errors.terms}
                      </p>
                    )}

                    <div className="">
                      <button
                        type="submit"
                        className="px-12 pt-3 pb-2 rounded-full bg-gradient-to-r from-redark-purple to-[#543199]
                        text-white text-xs border border-white font-mokoto"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
