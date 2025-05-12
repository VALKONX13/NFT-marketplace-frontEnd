import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import RedarkButton from "@/components/RedarkButton/index";
import Link from "next/link";
import PromptInputSection from "../PromptInputSection";

const validationSchema = Yup.object({
  file: Yup.mixed().required("File is required"),
  productName: Yup.string().required("Product name is required"),
  productDescription: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required"),
  royalties: Yup.number()
    .max(10, "Max royalties is 10%")
    .required("Royalties required"),
});

type Props = {
  selectedMintOption: string;
  onSuccess: () => void;
};

const ArtworkDetailsForm: React.FC<Props> = ({
  onSuccess,
  selectedMintOption,
}) => {
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
      onSuccess();
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    formik.setFieldValue("file", file);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-2 gap-8 text-white"
    >
      {/* Upload Box */}
      {selectedMintOption === "Mint Your Own NFT" ? (
        <div className="bg-white/13 border-2 border-redark-purple rounded-[40px] flex flex-col items-center justify-center text-center h-[700px] py-16 px-6">
          <div className="text-4xl mb-4">
            <svg
              width="48"
              height="37"
              viewBox="0 0 48 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7143 37H35.6786C36.6201 37 37.4873 36.5045 37.958 35.6868L47.208 19.8297C47.687 19.0121 47.6871 18.0045 47.2163 17.1786C46.7455 16.3527 45.8783 15.8571 44.9286 15.8571H11.8929C10.9513 15.8571 10.0842 16.3527 9.61339 17.1703L3.96429 26.8498V5.28571C3.96429 4.55893 4.55893 3.96429 5.28571 3.96429H14.99C15.3368 3.96429 15.6754 4.10469 15.9232 4.35246L18.1118 6.54107C19.8462 8.27545 22.2 9.25 24.6529 9.25H34.3571C35.0839 9.25 35.6786 9.84464 35.6786 10.5714V13.2143H39.6429V10.5714C39.6429 7.65603 37.2725 5.28571 34.3571 5.28571H24.6529C23.2489 5.28571 21.9027 4.73237 20.9116 3.74129L18.723 1.54442C17.7319 0.553348 16.3857 0 14.9817 0H5.28571C2.37031 0 0 2.37031 0 5.28571V31.7143C0 34.6297 2.37031 37 5.28571 37H7.24308H31.7143Z"
                fill="#8C52FF"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Upload File</h3>
          <p className="text-sm mb-4 text-gray-400 font-azeret">
            Drag or choose your file to upload
            <br />
            PNG, GIF, WEBP, MP4 – Max. 10 GB
          </p>
          <input
            type="file"
            name="file"
            accept="image/*,video/mp4"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="bg-white text-redark-purple px-6 py-2 rounded-full text-sm font-semibold cursor-pointer"
          >
            BROWSE FILES
          </label>
          {formik.touched.file && formik.errors.file && (
            <div className="text-red-400 mt-2 text-sm">
              {formik.errors.file}
            </div>
          )}
        </div>
      ) : (
        <PromptInputSection />
      )}

      {/* Form Fields */}
      <div className="flex flex-col gap-4 justify-between h-[100%]">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
          className="bg-white/25 p-4 h-[72px] rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-redark-purple"
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
          className="bg-white/25 p-4 rounded-3xl h-[440px] resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-redark-purple"
        />
        {formik.touched.productDescription &&
          formik.errors.productDescription && (
            <div className="text-red-400 text-sm">
              {formik.errors.productDescription}
            </div>
          )}

        <div className="grid grid-cols-7 gap-1">
          <div className="flex col-start-1 col-end-4 h-[72px] items-center bg-white/25 focus:ring-2 focus:ring-redark-purple rounded-full">
            <svg
              className="ml-5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
              className=" p-4 placeholder-gray-400 focus:outline-none "
            />
          </div>
          <input
            type="number"
            name="royalties"
            placeholder="Set Royalties (Max. 10%)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.royalties}
            className="bg-white/25 p-4 h-[72px] rounded-full col-start-5 col-end-8 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-redark-purple"
          />
        </div>
        <div className="flex gap-4 text-sm text-red-400">
          {formik.touched.price && formik.errors.price && (
            <span>{formik.errors.price}</span>
          )}
          {formik.touched.royalties && formik.errors.royalties && (
            <span>{formik.errors.royalties}</span>
          )}
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4 m-0 col-start-1 col-end-3 justify-between items-center">
        <p className="font-azeret">
          You need promotion? Drop a line to{" "}
          <Link href="#" className="text-redark-purple">
            whatever@arkhive.website
          </Link>{" "}
          and we will contact you soon!
        </p>
        <div className="flex items-center justify-center gap-12">
          <button
            type="button"
            className="bg-redark-purple border border-white font-mokoto px-18 pt-3 pb-2.5 rounded-full text-white"
          >
            PREVIEW
          </button>
          <RedarkButton
            title="NEXT"
            type="submit"
            className="!px-24 border border-white"
          />
        </div>
      </div>
    </form>
  );
};

export default ArtworkDetailsForm;
