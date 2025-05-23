import React, { useState } from "react";
import RedarkButton from "@/components/RedarkButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';
import Link from "next/link";

const validationSchema = Yup.object({
  file: Yup.mixed().required("File is required"),
  productName: Yup.string().required("Product name is required"),
  productDescription: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  royalties: Yup.number()
    .max(10, "Max royalties is 10%")
    .required("Royalties required"),
});

export default function PromptInputSection() {
  const formik = useFormik({
    initialValues: {
      file: null,
      productName: "",
      productDescription: "",
      price: "",
      royalties: "",
    },
    validationSchema,
    onSubmit: () => {
      // onSuccess();
    },
  });

  const [variant, setVariant] = useState(0);

  return (
    <div className={`lg:bg-white/13 ${!variant ? 'h-[75vh] justify-end' : 'h-fit'} xl:col-span-1 col-span-2 pr-1 flex flex-col lg:justify-around lg:border border-redark-purple rounded-[40px] 2xl:p-10 md:p-6 w-full mx-auto lg:h-[700px] font-azeret`}>
      {/* Mobile attempts */}
      {(!variant) ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}>
          <p className="font-azeret text-gray-400 text-[10px] text-center">Click Variant to step forward</p>
          <div className="grid-cols-3 gap-2 mt-4 font-azeret lg:hidden grid mb-4">
            {[1, 2, 3].map((num) => (
              <div
                onClick={() => setVariant(num)}
                key={num}
                className="bg-[#C4C4C4]/25 rounded-[20px] flex justify-center h-full w-full aspect-square cursor-pointer hover:opacity-80"
              >
                {' '}
              </div>
            ))}
          </div>
        </motion.div>
      ) : null}

      <label className="text-white font-medium text-sm hidden lg:flex">Prompt</label>
      <textarea
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Type your prompt here..."
        className={`${(variant) ? 'hidden lg:flex' : ''} w-full my-2 p-4 lg:bg-white/25 bg-[#C4C4C4]/25 h-[650px] max-h-[300px] lg:max-h-full text-white text-sm rounded-[20px] resize-none outline-none`}
      />
      {/* Mobile Buttons */}
      {(!variant) ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 space-x-4 justify-between lg:hidden flex mb-3">
          <button className="rounded-full bg-gradient-to-r from-redark-purple to-[#543199] font-mokoto border border-white text-white text-[10px] h-fit pt-2 pb-1 px-5 tracking-wide">
            AUTO
          </button>
          <RedarkButton title="GENERATE" className="!px-2 !py-2 !pb-1 !text-[10px]" />
        </motion.div>
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="justify-between mt-4 space-x-4 hidden lg:flex xl:!text-sm">
        <button className="rounded-full bg-gradient-to-r from-redark-purple to-[#543199] font-mokoto border border-white text-white text-[16px] pt-3 pb-2.5 px-5 tracking-wide">
          AUTOGENERATE
        </button>
        <RedarkButton title="GENERATE BY PROMPT" className="!px-5 " />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="hidden lg:flex items-center justify-between mt-6 text-sm text-white font-mono">
        <button>{"<"}</button>
        <span>Click to zoom generated Artwork (Attempt 01)</span>
        <button>{">"}</button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid-cols-3 gap-4 mt-4 font-azeret hidden lg:grid">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-white/25 text-white text-sm rounded-[20px] flex items-center justify-center h-[100%] w-[100%] aspect-square cursor-pointer hover:opacity-80"
          >
            Attempt {num}
          </div>
        ))}
      </motion.div>
      {/* MOBILE ONLY FORM */}
      {variant ? (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`lg:col-span-1 col-span-2 flex flex-col gap-4 h-[100%] lg:hidden`}>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productName}
              className="bg-white/25 p-4 h-[72px] lg:text-start text-center rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-redark-purple"
            />
            {formik.touched.productName && formik.errors.productName && (
              <div className="text-red-400 text-sm">
                {formik.errors.productName}
              </div>
            )}

            <textarea
              name="productDescription"
              placeholder="Product Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.productDescription}
              className="bg-white/25 p-4 rounded-3xl h-[440px] lg:text-start text-center resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-redark-purple"
            />
            {formik.touched.productDescription &&
              formik.errors.productDescription && (
                <div className="text-red-400 text-sm">
                  {formik.errors.productDescription}
                </div>
              )}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:grid flex flex-col grid-cols-7 lg:gap-1 gap-4">
              <div className="flex col-start-1 col-end-4 h-[72px] items-center bg-white/25 focus:ring-2 focus:ring-redark-purple rounded-full">
                <svg
                  className="lg:ml-5 min-w-[20%]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM4.98228 14.5984C5.60546 14.2749 6.26374 14.0095 6.95003 13.8106L7.10425 13.6622L9.97687 7.39952V7.32638L9.98189 7.39952L12.8545 13.6622L13.0087 13.8106C13.695 14.0095 14.3533 14.2749 14.9765 14.5984L9.9823 3.62328L9.97729 3.74073V3.62328L4.98228 14.5984ZM9.97945 13.3813C10.7844 13.3813 11.5685 13.4695 12.3234 13.6358L11.408 11.6405H8.54544L7.6297 13.6371C8.38662 13.4699 9.17238 13.3813 9.97945 13.3813Z"
                    fill="white"
                  />
                </svg>
                <input
                  type="number"
                  name="price"
                  placeholder="Set your Price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  className="lg:p-4 py-4 w-[80%] placeholder-gray-400 lg:text-start text-center focus:outline-none "
                />
              </div>
              <input
                type="number"
                name="royalties"
                placeholder="Set Royalties (Max. 10%)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.royalties}
                className="bg-white/25 p-4 h-[72px] lg:text-start text-center rounded-full col-start-5 col-end-8 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-redark-purple"
              />
            </motion.div>
            <div className="flex gap-4 text-sm text-red-400">
              {formik.touched.price && formik.errors.price && (
                <span>{formik.errors.price}</span>
              )}
              {formik.touched.royalties && formik.errors.royalties && (
                <span>{formik.errors.royalties}</span>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={`flex lg:hidden lg:flex-row flex-col gap-4 m-0 col-start-1 col-end-3 justify-between items-center text-center lg:text-start text-[10px] lg:text-md`}>
            <p className="font-azeret">
              You need promotion? Drop a line to{" "}
              <Link href="#" className="text-redark-purple">
                whatever@arkhive.website
              </Link>{" "}
              and we will contact you soon!
            </p>
            <div className="flex flex-row items-center lg:gap-12 gap-6 w-full justify-between px-1">
              <button
                type="button"
                className="bg-redark-purple border border-white font-mokoto lg:px-18 px-5 lg:pt-3 lg:pb-2.5 pt-2 pb-1 text-[10px] mg:text-md rounded-full text-white"
              >
                PREVIEW
              </button>
              <RedarkButton
                title="NEXT"
                type="submit"
                className="lg:!px-24 !px-6 !pt-2 !pb-1 lg:!pt-3 lg:!pb-2.5 border border-white text-[10px] mg:text-md "
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}
