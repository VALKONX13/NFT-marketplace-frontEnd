import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import RedarkButton from "@/components/RedarkButton/index";

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
  onSuccess: () => void;
};

const ArtworkDetailsForm: React.FC<Props> = ({ onSuccess }) => {
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
      <div className="bg-white/13 border-2 border-redark-purple rounded-[40px] flex flex-col items-center justify-center text-center py-16 px-6 ">
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
          className="bg-white text-purple-600 px-6 py-2 rounded-full text-sm font-semibold cursor-pointer"
        >
          BROWSE FILES
        </label>
        {formik.touched.file && formik.errors.file && (
          <div className="text-red-400 mt-2 text-sm">{formik.errors.file}</div>
        )}
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
          className="bg-[#382c5d] p-4 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          className="bg-[#382c5d] p-4 rounded-3xl h-40 resize-none placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {formik.touched.productDescription &&
          formik.errors.productDescription && (
            <div className="text-red-400 text-sm">
              {formik.errors.productDescription}
            </div>
          )}

        <div className="flex gap-4">
          <input
            type="number"
            name="price"
            placeholder="Set your Price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            className="bg-[#382c5d] p-4 rounded-full flex-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="number"
            name="royalties"
            placeholder="Set Royalties (Max. 10%)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.royalties}
            className="bg-[#382c5d] p-4 rounded-full flex-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
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

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            className="bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-2 rounded-full text-white font-semibold"
          >
            PREVIEW
          </button>
          <RedarkButton
            title="NEXT"
            type="submit"
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold"
          />
        </div>
      </div>
    </form>
  );
};

export default ArtworkDetailsForm;
