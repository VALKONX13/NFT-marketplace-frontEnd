"use client";

import { motion } from "framer-motion";
import * as Yup from "yup";
import Sidebar from "@/components/Sidebar";
import RedarkButton from "@/components/RedarkButton";
import MockData from '@/utils/mockData';
import RedarkInput from "@/components/RedarkInput";
import FileUploadBox from "@/components/FileUploadBox";
import { useFormik } from 'formik';

const validationSchema = Yup.object({
    file: Yup.mixed().required("File is required"),
});

export default function CreatePostEntry() {

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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0];
        formik.setFieldValue("file", file);
    };

    return (
        <div className="bg-redark-navy flex md:gap-8 gap-2 h-auto min-h-screen">
            <Sidebar
                dividerTitles={["Admin Settings", "Blog Settings"]}
                navItems={[MockData.adminSettingsSideBarItems, MockData.blogSettingsSideBarItems]}
                button={false}
                className="col-span-1 lg:col-span-3 2xl:col-span-2 !h-auto"
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-11 2xl:col-span-10 lg:col-span-9 sm:col-span-7 col-span-4 grid grid-cols-2 gap-6 w-full">
                {/* inputs */}
                <div className="lg:col-span-1 col-span-2 py-6 px-4 lg:pr-4 pr-8 text-white space-y-6 pt-14 lg:mb-18">
                    {/* Title */}
                    <h2 className="text-xl md:text-4xl tracking-widest mokoto-regular mb-10 w-max">Create blog entry</h2>
                    {/* Create blog entry */}
                    <section>
                        <RedarkInput placeholder="Title" className="!px-6" />
                        <textarea
                            name="Body"
                            placeholder="Body"
                            className="bg-white/25 p-6 rounded-3xl w-full mt-10 h-[550px] text-start resize-none placeholder-white placeholder:font-extralight placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-redark-purple"
                        />
                        <RedarkButton title="create new post" className="!text-[15px] mt-6" />
                    </section>
                </div>

                {/* upload box */}
                <div className="lg:col-span-1 col-span-2 lg:mt-32 mb-14 lg:pr-0 lg:pl-0 pl-4 pr-8">
                    <FileUploadBox
                    className="xl:!w-[370px] lg:!w-[320px] lg:!h-[340px] lg:!pb-5 lg:!pt-14 gap-3"
                        title="Upload File"
                        onFileChange={handleFileChange}
                        error={formik.touched.file && formik.errors.file ? formik.errors.file : undefined}
                    />
                </div>
            </motion.div>
        </div>
    );
}
