'use client';

import React from 'react';
import { motion } from 'framer-motion';

type FileUploadBoxProps = {
  title?: string;
  className?: string;
  description?: string;
  accept?: string;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
  inputId?: string;
};

const FileUploadBox: React.FC<FileUploadBoxProps> = ({
  title = 'Upload File',
  description = 'Drag or choose your file to upload\nPNG, GIF, WEBP, MP4 – Max. 10 GB',
  accept = 'image/*,video/mp4',
  onFileChange,
  error,
  icon,
  inputId = 'fileInput',
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className={`bg-white/13 xl:col-span-1 col-span-2 border-2 border-redark-purple rounded-[40px]
       flex flex-col items-center justify-center text-center lg:h-[700px] lg:py-16 py-10 px-4 lg:px-6 ${className}`}
    >
      <div className="text-4xl mb-4">
        {icon || (
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
        )}
      </div>

      <h3 className="text-lg mb-2">{title}</h3>
      <p className="lg:text-sm text-xs mb-4 text-gray-400 font-azeret whitespace-pre-line">
        <span className="text-white">{description.split('\n')[0]}</span>
        <br />
        {description.split('\n')[1]}
      </p>

      <input
        type="file"
        name="file"
        accept={accept}
        onChange={onFileChange}
        className="hidden"
        id={inputId}
      />

      <label
        htmlFor={inputId}
        className="bg-white text-redark-purple px-6 pt-3 pb-2 rounded-full lg:text-sm text-xs font-mokoto cursor-pointer"
      >
        BROWSE FILES
      </label>

      {error && <div className="text-red-400 mt-2 text-sm">{error}</div>}
    </motion.div>
  );
};

export default FileUploadBox;
