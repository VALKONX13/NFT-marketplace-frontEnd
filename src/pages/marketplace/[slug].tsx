import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/router";
import RedarkButton from "@/components/RedarkButton";
import PaginatedNFTGallery from "@/components/PaginatedNFTGallery";
import Table from "@/components/Table";
import Link from "next/link";
import SortDropdown from "@/components/SortDropdown";
import { slugify } from "@/utils/slugify";
import MockData from "@/utils/mockData";
import Header from "@/components/Header";
import PaginationContainer from "@/components/PaginationContainer";
import ApexChart from "@/components/ApexChart";
import { motion } from 'framer-motion';

export default function NFTDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Separate title and artist
  const [title, artist] = ((slug as string) || "").split("_");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-redark-navy grid grid-cols-5 md:grid-cols-8 lg:grid-cols-12 lg:gap-5 md:gap-5 gap-2">
      <Sidebar
        dividerTitles={["Marketplace", "Account"]}
        navItems={[MockData.mainPageSidebar, MockData.accountItems]}
        button={true}
        className="lg:col-span-3 xl:col-span-2 col-span-1"
      />
      <div className="xl:col-span-10 lg:col-span-9 md:col-span-7 col-span-4 grid grid-cols-8 gap-5 lg:px-8">
        <div className="col-span-8">
          <Header searchBar={true} wallet={true} />
        </div>
        <div className="col-span-8 gap-6 pt-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center mx-auto">
            <p className="lg:hidden block font-mokoto text-sm text-redark-purple mb-4">NFT Details</p>
            <RedarkButton title="CREATE NFT" href="/ark-tools/nft-mint-tool" className="!mx-3 !px-12 text-[10px] lg:hidden block" />
          </motion.div>
          <div className="col-span-8 grid grid-cols-8 gap-4">
            <div className="text-center space-y-1 w-fit lg:hidden inline">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-between">
                <div>
                  <p className="lg:hidden block font-mokoto text-xs mb-4 pt-8">ARTWORK Details</p>
                  <Link href="#" className="text-sm text-redark-purple">
                    @JACKODREEYCollection05
                  </Link>
                </div>
              </motion.div>
              <Link href={`/marketplace/collection/category/artist/${slugify(
                artist
              )}`} className='flex gap-4 grow py-4'>
                <Image
                  src='/assets/img/thumb1.jpg'
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full m-0 w-[40px] h-[40px]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className='font-azeret text-sm'>
                  <p className='text-gray-400'>Owned By</p>
                  <p>{artist}</p>
                </motion.div>
              </Link>
              <h1 className="lg:text-3xl text-lg font-mokoto text-start py-4">{title}</h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="gap-10 flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8571 10.2857C21.6964 10.2857 24 7.98214 24 5.14286C24 2.30357 21.6964 0 18.8571 0C16.0179 0 13.7143 2.30357 13.7143 5.14286C13.7143 5.35714 13.725 5.57143 13.7518 5.78036L8.71071 8.29821C7.78929 7.40357 6.53036 6.85714 5.14286 6.85714C2.30357 6.85714 0 9.16071 0 12C0 14.8393 2.30357 17.1429 5.14286 17.1429C6.53036 17.1429 7.78929 16.5964 8.71071 15.7018L13.7518 18.2196C13.725 18.4286 13.7143 18.6375 13.7143 18.8571C13.7143 21.6964 16.0179 24 18.8571 24C21.6964 24 24 21.6964 24 18.8571C24 16.0179 21.6964 13.7143 18.8571 13.7143C17.4696 13.7143 16.2107 14.2607 15.2893 15.1554L10.2482 12.6375C10.275 12.4286 10.2857 12.2196 10.2857 12C10.2857 11.7804 10.275 11.5714 10.2482 11.3625L15.2893 8.84464C16.2107 9.73929 17.4696 10.2857 18.8571 10.2857Z" fill="#8C52FF" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.45954 7.29268C3.23453 7.87385 2.68607 8.23473 2.09541 8.24879H2.0251C1.85634 8.2441 1.68289 8.2113 1.51414 8.14568C0.740661 7.84573 0.360955 6.97398 0.66097 6.20534C2.08135 2.57306 5.6159 0 9.75048 0C12.2303 0 14.4898 0.923302 16.2102 2.44652L17.579 1.07797C17.9024 0.754577 18.3853 0.660841 18.8072 0.834253C19.2291 1.00766 19.501 1.4201 19.501 1.87473V7.12396C19.501 7.7473 18.9994 8.24879 18.3759 8.24879H13.1256C12.6709 8.24879 12.2584 7.97696 12.085 7.55514C11.9115 7.13333 12.0053 6.65059 12.3287 6.3272L14.0819 4.57433C12.91 3.5901 11.4006 2.99956 9.75048 2.99956C6.89096 2.99956 4.44397 4.77586 3.45954 7.29268ZM16.0414 12.2045C16.2664 11.6233 16.8196 11.2624 17.4055 11.2484H17.4759C17.6446 11.253 17.8181 11.2858 17.9868 11.3515C18.7603 11.6514 19.14 12.5232 18.84 13.2918C18.5306 14.0839 18.1228 14.8244 17.6305 15.4993L23.5605 21.4375C24.1465 22.0233 24.1465 22.9748 23.5605 23.5606C22.9746 24.1465 22.0229 24.1465 21.437 23.5606L15.5023 17.6224C13.8897 18.8035 11.9021 19.4971 9.75048 19.4971C7.27067 19.4971 5.01118 18.5738 3.29079 17.0506L1.92197 18.4192C1.59852 18.7426 1.11568 18.8363 0.693784 18.6629C0.271888 18.4895 0 18.077 0 17.6224V12.3732C0 11.7498 0.501587 11.2484 1.12505 11.2484H6.37531C6.83002 11.2484 7.24254 11.5202 7.41599 11.942C7.58943 12.3638 7.49568 12.8466 7.17222 13.1699L5.41901 14.9228C6.59095 15.907 8.10508 16.4976 9.75516 16.4976C12.6147 16.4976 15.0617 14.7213 16.0461 12.2045H16.0414Z" fill="#8C52FF" />
                </svg>
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.375 1.6875C3.375 0.754102 2.6209 0 1.6875 0C0.754102 0 0 0.754102 0 1.6875V3.375V19.4062V25.3125C0 26.2459 0.754102 27 1.6875 27C2.6209 27 3.375 26.2459 3.375 25.3125V18.5625L6.76582 17.7135C8.9332 17.1703 11.2271 17.4234 13.2258 18.4201C15.5566 19.5855 18.2619 19.7279 20.6982 18.8104L22.5281 18.1248C23.1873 17.877 23.625 17.2494 23.625 16.5428V3.48047C23.625 2.26758 22.3488 1.47656 21.2625 2.01973L20.7563 2.27285C18.3146 3.49629 15.4406 3.49629 12.999 2.27285C11.148 1.34473 9.02285 1.1127 7.01367 1.61367L3.375 2.53125V1.6875Z" fill="#8C52FF" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex justify-start w-max pt-4 gap-3 md:text-xs text-[8px] mt-2 items-center">
                <div className="flex items-center gap-1 border border-redark-purple/50 md:px-4 px-2 h-fit pt-1.5 pb-1 rounded-full">
                  <p>200 Views</p>
                </div>
                <div className="flex items-center gap-1 border border-redark-purple/50 md:px-4 px-2 h-fit pt-1.5 pb-1 rounded-full">
                  <p>Trending #3</p>
                </div>
                <div className="flex items-center gap-1 border border-redark-purple/50 md:px-4 px-2 h-fit pt-1.5 pb-1 rounded-full">
                  <div className="flex gap-1 items-center">
                    <p>10</p>
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.35781 0.49183C4.85938 0.0898732 5.51094 -0.0814788 6.15156 0.0370263C7.22188 0.237204 8 1.19325 8 2.30784V2.36389C8 2.9404 7.79531 3.49449 7.42812 3.92527C7.375 3.98613 7.32031 4.04538 7.26094 4.10143L4.38594 6.84466C4.37344 6.85747 4.35938 6.86868 4.34531 6.87989C4.24688 6.95836 4.125 7 4 7C3.85625 7 3.71875 6.94395 3.6125 6.84466L0.7375 4.10303C0.678125 4.04698 0.623438 3.98773 0.570312 3.92688C0.204688 3.49449 0 2.9404 0 2.36389V2.30784C0 1.19325 0.778125 0.237204 1.84844 0.0370263C2.4875 -0.0814788 3.13906 0.0882718 3.64063 0.49183C3.74531 0.576705 3.84375 0.669587 3.93281 0.773679L3.99844 0.848946L4.06406 0.773679C4.12969 0.698413 4.19844 0.62795 4.27187 0.563893C4.3 0.539872 4.32812 0.515851 4.35625 0.49183H4.35781Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className="bg-redark-purple/25 border border-redark-purple/50 rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] flex justify-center items-center">
                  <svg className="max-w-[70%]" width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.076 12.4V10.324H8V9.064H10.076V7H11.336V9.064H13.4V10.324H11.336V12.4H10.076Z" fill="white" />
                    <path d="M10.606 3.81694L10.0844 3.23013L9.90181 3.02584C8.77166 1.7566 7.06341 1.16544 5.38992 1.46971C3.07312 1.89134 1.39095 3.90822 1.39095 6.26414V6.41627C1.39095 7.82026 1.97341 9.15905 3.00358 10.1153L10.9972 17.5612C11.032 17.5917 11.0798 17.6134 11.1276 17.6134C11.1754 17.6134 11.2232 17.596 11.258 17.5612L19.2559 10.1153C20.2818 9.15905 20.8642 7.82026 20.8642 6.41627V6.26414C20.8642 3.90822 19.182 1.89134 16.8652 1.46971C15.1918 1.16544 13.4835 1.7566 12.3534 3.02584L12.1708 3.23013L11.6492 3.81694C11.5188 3.96473 11.3275 4.05166 11.1276 4.05166C10.9276 4.05166 10.7407 3.96473 10.606 3.81694ZM12.123 1.33497C13.5183 0.243941 15.3309 -0.221157 17.113 0.1005C20.0905 0.643839 22.2552 3.23883 22.2552 6.26414V6.41627C22.2552 7.98109 21.6857 9.48505 20.6643 10.6543C20.5165 10.8195 20.3643 10.9803 20.1992 11.1325L12.2012 18.5784C12.1664 18.6131 12.1273 18.6436 12.0882 18.674C11.8144 18.887 11.4753 19 11.1276 19C10.7277 19 10.3452 18.8479 10.0496 18.5784L2.05165 11.1368C1.88647 10.9847 1.73434 10.8238 1.58655 10.6587C0.569419 9.48505 0 7.98109 0 6.41627V6.26414C0 3.23883 2.16466 0.643839 5.14216 0.1005C6.91996 -0.221157 8.73254 0.239595 10.1278 1.33497C10.4191 1.56534 10.6929 1.81745 10.9407 2.09999L11.1232 2.30428L11.3058 2.09999C11.4884 1.89569 11.6796 1.70444 11.8839 1.53057C11.9621 1.46537 12.0404 1.40017 12.1186 1.33497H12.123Z" fill="white" />
                  </svg>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4 col-span-8">
              <PaginationContainer title="" itemsPerPage={1} className="!bg-transparent lg:hidden" height="h-[240px]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-4 relative aspect-square">
                  <div className="z-10 absolute top-[5%] left-[6%] justify-center bg-redark-purple rounded-full border-2 border-white md:w-[80px] md:h-[80px] w-[50px] h-[50px] flex items-center">
                    <svg className="w-[50%] md:w-[70%]"
                      width="31"
                      height="36"
                      viewBox="0 0 31 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9802 29.3344C17.8524 29.0039 16.6901 28.568 15.5 28.0406C14.3169 28.568 13.1475 28.9969 12.0198 29.3344C13.2928 32.0273 14.6075 32.625 15.5 32.625C16.3925 32.625 17.7072 32.0273 18.9802 29.3344ZM18.06 22.9008C19.084 22.275 20.0458 21.6281 20.9245 20.9602C20.9937 20.0109 21.0352 19.0195 21.0352 18C21.0352 16.9805 21.0006 15.9891 20.9245 15.0398C20.0388 14.3789 19.084 13.725 18.06 13.0992C17.1951 12.5719 16.3372 12.1008 15.5 11.6789C14.6628 12.1008 13.8049 12.5719 12.94 13.0992C11.916 13.725 10.9542 14.3719 10.0755 15.0398C10.0063 15.9891 9.96482 16.9805 9.96482 18C9.96482 19.0195 9.99942 20.0109 10.0755 20.9602C10.9612 21.6211 11.916 22.275 12.94 22.9008C13.8049 23.4281 14.6628 23.8992 15.5 24.3211C16.3372 23.8992 17.1951 23.4281 18.06 22.9008ZM26.3974 20.6367C25.6916 21.3539 24.9236 22.057 24.0864 22.7391C23.9204 24.1523 23.6851 25.4953 23.3738 26.7469C25.9476 26.9016 26.9647 26.107 27.373 25.3617C27.8227 24.5391 27.9403 23.0555 26.3974 20.6367ZM30.2789 9C31.7112 11.6086 30.9293 14.8219 28.646 18C30.9293 21.1781 31.7112 24.3914 30.2789 27C28.8813 29.5523 25.9546 30.4664 22.3083 30.0375C20.7861 33.7008 18.4613 36 15.5 36C12.5387 36 10.2139 33.7008 8.69173 30.0375C5.04543 30.4664 2.11871 29.5594 0.721073 27C-0.711154 24.3914 0.0706897 21.1781 2.35395 18C0.0706897 14.8219 -0.711154 11.6086 0.721073 9C2.11871 6.44766 5.04543 5.53359 8.69173 5.9625C10.2139 2.29922 12.5387 0 15.5 0C18.4613 0 20.7861 2.29922 22.3083 5.9625C25.9546 5.53359 28.8813 6.44062 30.2789 9ZM3.62704 25.3617C4.03526 26.107 5.05235 26.9086 7.62621 26.7469C7.31486 25.4953 7.07961 24.1523 6.91355 22.7391C6.08328 22.057 5.30835 21.3469 4.60262 20.6367C3.05969 23.0484 3.17039 24.5391 3.62704 25.3617ZM4.60262 15.3633C5.30835 14.6461 6.07636 13.943 6.91355 13.2609C7.07961 11.8477 7.31486 10.5047 7.62621 9.25313C5.05235 9.09141 4.03526 9.89297 3.62704 10.6383C3.17731 11.4609 3.05969 12.9445 4.60262 15.3633ZM15.5 7.95937C16.6831 7.43203 17.8524 7.00313 18.9802 6.66563C17.7072 3.97266 16.3925 3.375 15.5 3.375C14.6075 3.375 13.2928 3.97266 12.0198 6.66563C13.1475 6.99609 14.3099 7.43203 15.5 7.95937ZM24.0934 13.2609C24.9236 13.943 25.6986 14.6531 26.4043 15.3633C27.9472 12.9516 27.8296 11.4609 27.3799 10.6383C26.9717 9.89297 25.9546 9.09141 23.3807 9.25313C23.6921 10.5047 23.9273 11.8477 24.0934 13.2609ZM15.5 15.75C16.0872 15.75 16.6504 15.9871 17.0656 16.409C17.4808 16.831 17.7141 17.4033 17.7141 18C17.7141 18.5967 17.4808 19.169 17.0656 19.591C16.6504 20.0129 16.0872 20.25 15.5 20.25C14.9128 20.25 14.3496 20.0129 13.9344 19.591C13.5192 19.169 13.2859 18.5967 13.2859 18C13.2859 17.4033 13.5192 16.831 13.9344 16.409C14.3496 15.9871 14.9128 15.75 15.5 15.75Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <Image
                    src="/assets/img/NFT-art.png"
                    alt="NFT ARTWORK"
                    fill
                    className="object-cover rounded-xl !h-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-4 relative aspect-square">
                  <Image
                    src="/assets/img/NFT-art.png"
                    alt="NFT ARTWORK"
                    fill
                    className="object-cover rounded-xl !h-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-4 relative aspect-square">
                  <Image
                    src="/assets/img/NFT-art.png"
                    alt="NFT ARTWORK"
                    fill
                    className="object-cover rounded-xl !h-auto"
                  />
                </motion.div>
              </PaginationContainer>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="hidden lg:inline">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-4 relative aspect-square">
                  <div className="z-10 absolute top-[5%] left-[6%] justify-center bg-redark-purple rounded-full border-2 border-white md:w-[80px] md:h-[80px] w-[50px] h-[50px] flex items-center">
                    <svg className="w-[50%] md:w-[70%]"
                      width="31"
                      height="36"
                      viewBox="0 0 31 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9802 29.3344C17.8524 29.0039 16.6901 28.568 15.5 28.0406C14.3169 28.568 13.1475 28.9969 12.0198 29.3344C13.2928 32.0273 14.6075 32.625 15.5 32.625C16.3925 32.625 17.7072 32.0273 18.9802 29.3344ZM18.06 22.9008C19.084 22.275 20.0458 21.6281 20.9245 20.9602C20.9937 20.0109 21.0352 19.0195 21.0352 18C21.0352 16.9805 21.0006 15.9891 20.9245 15.0398C20.0388 14.3789 19.084 13.725 18.06 13.0992C17.1951 12.5719 16.3372 12.1008 15.5 11.6789C14.6628 12.1008 13.8049 12.5719 12.94 13.0992C11.916 13.725 10.9542 14.3719 10.0755 15.0398C10.0063 15.9891 9.96482 16.9805 9.96482 18C9.96482 19.0195 9.99942 20.0109 10.0755 20.9602C10.9612 21.6211 11.916 22.275 12.94 22.9008C13.8049 23.4281 14.6628 23.8992 15.5 24.3211C16.3372 23.8992 17.1951 23.4281 18.06 22.9008ZM26.3974 20.6367C25.6916 21.3539 24.9236 22.057 24.0864 22.7391C23.9204 24.1523 23.6851 25.4953 23.3738 26.7469C25.9476 26.9016 26.9647 26.107 27.373 25.3617C27.8227 24.5391 27.9403 23.0555 26.3974 20.6367ZM30.2789 9C31.7112 11.6086 30.9293 14.8219 28.646 18C30.9293 21.1781 31.7112 24.3914 30.2789 27C28.8813 29.5523 25.9546 30.4664 22.3083 30.0375C20.7861 33.7008 18.4613 36 15.5 36C12.5387 36 10.2139 33.7008 8.69173 30.0375C5.04543 30.4664 2.11871 29.5594 0.721073 27C-0.711154 24.3914 0.0706897 21.1781 2.35395 18C0.0706897 14.8219 -0.711154 11.6086 0.721073 9C2.11871 6.44766 5.04543 5.53359 8.69173 5.9625C10.2139 2.29922 12.5387 0 15.5 0C18.4613 0 20.7861 2.29922 22.3083 5.9625C25.9546 5.53359 28.8813 6.44062 30.2789 9ZM3.62704 25.3617C4.03526 26.107 5.05235 26.9086 7.62621 26.7469C7.31486 25.4953 7.07961 24.1523 6.91355 22.7391C6.08328 22.057 5.30835 21.3469 4.60262 20.6367C3.05969 23.0484 3.17039 24.5391 3.62704 25.3617ZM4.60262 15.3633C5.30835 14.6461 6.07636 13.943 6.91355 13.2609C7.07961 11.8477 7.31486 10.5047 7.62621 9.25313C5.05235 9.09141 4.03526 9.89297 3.62704 10.6383C3.17731 11.4609 3.05969 12.9445 4.60262 15.3633ZM15.5 7.95937C16.6831 7.43203 17.8524 7.00313 18.9802 6.66563C17.7072 3.97266 16.3925 3.375 15.5 3.375C14.6075 3.375 13.2928 3.97266 12.0198 6.66563C13.1475 6.99609 14.3099 7.43203 15.5 7.95937ZM24.0934 13.2609C24.9236 13.943 25.6986 14.6531 26.4043 15.3633C27.9472 12.9516 27.8296 11.4609 27.3799 10.6383C26.9717 9.89297 25.9546 9.09141 23.3807 9.25313C23.6921 10.5047 23.9273 11.8477 24.0934 13.2609ZM15.5 15.75C16.0872 15.75 16.6504 15.9871 17.0656 16.409C17.4808 16.831 17.7141 17.4033 17.7141 18C17.7141 18.5967 17.4808 19.169 17.0656 19.591C16.6504 20.0129 16.0872 20.25 15.5 20.25C14.9128 20.25 14.3496 20.0129 13.9344 19.591C13.5192 19.169 13.2859 18.5967 13.2859 18C13.2859 17.4033 13.5192 16.831 13.9344 16.409C14.3496 15.9871 14.9128 15.75 15.5 15.75Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <Image
                    src="/assets/img/NFT-art.png"
                    alt="NFT ARTWORK"
                    fill
                    className="object-cover rounded-xl !h-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-4 relative aspect-square">
                  <Image
                    src="/assets/img/NFT-art.png"
                    alt="NFT ARTWORK"
                    fill
                    className="object-cover rounded-xl !h-auto"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="col-span-4 relative aspect-square">
                  <Image
                    src="/assets/img/NFT-art.png"
                    alt="NFT ARTWORK"
                    fill
                    className="object-cover rounded-xl !h-auto"
                  />
                </motion.div>
              </motion.div>
            </div>


            <div className="text-white lg:col-span-4 col-span-8 pr-2 md:pr-5 pb-8 space-y-6">
              <div className="text-center space-y-1 hidden lg:inline">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex justify-between md:gap-3">
                  <div>
                    <p className="lg:hidden block font-mokoto text-xs mb-4 pt-4">ARTWORK Details</p>
                    <Link href="#" className="text-sm text-redark-purple">
                      @JACKODREEYCollection05
                    </Link>
                  </div>
                  <div className="gap-8 hidden lg:flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.8571 10.2857C21.6964 10.2857 24 7.98214 24 5.14286C24 2.30357 21.6964 0 18.8571 0C16.0179 0 13.7143 2.30357 13.7143 5.14286C13.7143 5.35714 13.725 5.57143 13.7518 5.78036L8.71071 8.29821C7.78929 7.40357 6.53036 6.85714 5.14286 6.85714C2.30357 6.85714 0 9.16071 0 12C0 14.8393 2.30357 17.1429 5.14286 17.1429C6.53036 17.1429 7.78929 16.5964 8.71071 15.7018L13.7518 18.2196C13.725 18.4286 13.7143 18.6375 13.7143 18.8571C13.7143 21.6964 16.0179 24 18.8571 24C21.6964 24 24 21.6964 24 18.8571C24 16.0179 21.6964 13.7143 18.8571 13.7143C17.4696 13.7143 16.2107 14.2607 15.2893 15.1554L10.2482 12.6375C10.275 12.4286 10.2857 12.2196 10.2857 12C10.2857 11.7804 10.275 11.5714 10.2482 11.3625L15.2893 8.84464C16.2107 9.73929 17.4696 10.2857 18.8571 10.2857Z" fill="#8C52FF" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.45954 7.29268C3.23453 7.87385 2.68607 8.23473 2.09541 8.24879H2.0251C1.85634 8.2441 1.68289 8.2113 1.51414 8.14568C0.740661 7.84573 0.360955 6.97398 0.66097 6.20534C2.08135 2.57306 5.6159 0 9.75048 0C12.2303 0 14.4898 0.923302 16.2102 2.44652L17.579 1.07797C17.9024 0.754577 18.3853 0.660841 18.8072 0.834253C19.2291 1.00766 19.501 1.4201 19.501 1.87473V7.12396C19.501 7.7473 18.9994 8.24879 18.3759 8.24879H13.1256C12.6709 8.24879 12.2584 7.97696 12.085 7.55514C11.9115 7.13333 12.0053 6.65059 12.3287 6.3272L14.0819 4.57433C12.91 3.5901 11.4006 2.99956 9.75048 2.99956C6.89096 2.99956 4.44397 4.77586 3.45954 7.29268ZM16.0414 12.2045C16.2664 11.6233 16.8196 11.2624 17.4055 11.2484H17.4759C17.6446 11.253 17.8181 11.2858 17.9868 11.3515C18.7603 11.6514 19.14 12.5232 18.84 13.2918C18.5306 14.0839 18.1228 14.8244 17.6305 15.4993L23.5605 21.4375C24.1465 22.0233 24.1465 22.9748 23.5605 23.5606C22.9746 24.1465 22.0229 24.1465 21.437 23.5606L15.5023 17.6224C13.8897 18.8035 11.9021 19.4971 9.75048 19.4971C7.27067 19.4971 5.01118 18.5738 3.29079 17.0506L1.92197 18.4192C1.59852 18.7426 1.11568 18.8363 0.693784 18.6629C0.271888 18.4895 0 18.077 0 17.6224V12.3732C0 11.7498 0.501587 11.2484 1.12505 11.2484H6.37531C6.83002 11.2484 7.24254 11.5202 7.41599 11.942C7.58943 12.3638 7.49568 12.8466 7.17222 13.1699L5.41901 14.9228C6.59095 15.907 8.10508 16.4976 9.75516 16.4976C12.6147 16.4976 15.0617 14.7213 16.0461 12.2045H16.0414Z" fill="#8C52FF" />
                    </svg>
                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.375 1.6875C3.375 0.754102 2.6209 0 1.6875 0C0.754102 0 0 0.754102 0 1.6875V3.375V19.4062V25.3125C0 26.2459 0.754102 27 1.6875 27C2.6209 27 3.375 26.2459 3.375 25.3125V18.5625L6.76582 17.7135C8.9332 17.1703 11.2271 17.4234 13.2258 18.4201C15.5566 19.5855 18.2619 19.7279 20.6982 18.8104L22.5281 18.1248C23.1873 17.877 23.625 17.2494 23.625 16.5428V3.48047C23.625 2.26758 22.3488 1.47656 21.2625 2.01973L20.7563 2.27285C18.3146 3.49629 15.4406 3.49629 12.999 2.27285C11.148 1.34473 9.02285 1.1127 7.01367 1.61367L3.375 2.53125V1.6875Z" fill="#8C52FF" />
                    </svg>
                  </div>
                </motion.div>
                <h1 className="text-3xl font-mokoto text-start py-4">{title}</h1>
                <Link href={`/marketplace/collection/category/artist/${slugify(
                  artist
                )}`} className='flex gap-4 grow'>
                  <Image
                    src='/assets/img/thumb1.jpg'
                    alt="avatar"
                    width={50}
                    height={50}
                    className="rounded-full m-0 w-[40px] h-[40px]"
                  />
                  <div className='font-azeret text-sm'>
                    <p className='text-gray-400'>Owned By</p>
                    <p>{artist}</p>
                  </div>
                </Link>
                <div className="flex justify-start pt-4 gap-3 text-xs mt-2 mb-0 md:mb-4">
                  <div className="flex items-center gap-1 border border-redark-purple/50 md:px-4 px-2 pt-1.5 pb-1 rounded-full">
                    <p>200 Views</p>
                  </div>
                  <div className="flex items-center gap-1 border border-redark-purple/50 md:px-4 px-2 pt-1.5 pb-1 rounded-full">
                    <p>Trending #3</p>
                  </div>
                  <div className="flex items-center gap-1 border border-redark-purple/50 md:px-4 px-2 pt-1.5 pb-1 rounded-full">
                    <p>{"10"} Favorites</p>
                  </div>
                  <div className="bg-redark-purple/25 border border-redark-purple/50 rounded-full w-[40px] h-[40px] flex justify-center items-center">
                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.076 12.4V10.324H8V9.064H10.076V7H11.336V9.064H13.4V10.324H11.336V12.4H10.076Z" fill="white" />
                      <path d="M10.606 3.81694L10.0844 3.23013L9.90181 3.02584C8.77166 1.7566 7.06341 1.16544 5.38992 1.46971C3.07312 1.89134 1.39095 3.90822 1.39095 6.26414V6.41627C1.39095 7.82026 1.97341 9.15905 3.00358 10.1153L10.9972 17.5612C11.032 17.5917 11.0798 17.6134 11.1276 17.6134C11.1754 17.6134 11.2232 17.596 11.258 17.5612L19.2559 10.1153C20.2818 9.15905 20.8642 7.82026 20.8642 6.41627V6.26414C20.8642 3.90822 19.182 1.89134 16.8652 1.46971C15.1918 1.16544 13.4835 1.7566 12.3534 3.02584L12.1708 3.23013L11.6492 3.81694C11.5188 3.96473 11.3275 4.05166 11.1276 4.05166C10.9276 4.05166 10.7407 3.96473 10.606 3.81694ZM12.123 1.33497C13.5183 0.243941 15.3309 -0.221157 17.113 0.1005C20.0905 0.643839 22.2552 3.23883 22.2552 6.26414V6.41627C22.2552 7.98109 21.6857 9.48505 20.6643 10.6543C20.5165 10.8195 20.3643 10.9803 20.1992 11.1325L12.2012 18.5784C12.1664 18.6131 12.1273 18.6436 12.0882 18.674C11.8144 18.887 11.4753 19 11.1276 19C10.7277 19 10.3452 18.8479 10.0496 18.5784L2.05165 11.1368C1.88647 10.9847 1.73434 10.8238 1.58655 10.6587C0.569419 9.48505 0 7.98109 0 6.41627V6.26414C0 3.23883 2.16466 0.643839 5.14216 0.1005C6.91996 -0.221157 8.73254 0.239595 10.1278 1.33497C10.4191 1.56534 10.6929 1.81745 10.9407 2.09999L11.1232 2.30428L11.3058 2.09999C11.4884 1.89569 11.6796 1.70444 11.8839 1.53057C11.9621 1.46537 12.0404 1.40017 12.1186 1.33497H12.123Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-redark-purple/13 p-4 rounded-xl space-y-2">
                <div className="flex gap-4 items-center border-b border-b-white/25 pb-4">
                  <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00098 0.937683C5.00098 0.41805 5.41903 0 5.93866 0H10.3145C10.8341 0 11.2522 0.41805 11.2522 0.937683C11.2522 1.45732 10.8341 1.87537 10.3145 1.87537H9.06427V3.80543C10.7599 4.00078 12.2993 4.71576 13.5105 5.7941L14.6513 4.64935C15.0186 4.28209 15.6124 4.28209 15.9758 4.64935C16.3391 5.0166 16.343 5.61047 15.9758 5.97382L14.7646 7.185C15.7023 8.50947 16.2532 10.127 16.2532 11.8734C16.2532 16.3626 12.6157 20 8.12659 20C3.63743 20 0 16.3665 0 11.8773C0 7.70463 3.14124 4.27037 7.1889 3.80543V1.87537H5.93866C5.41903 1.87537 5.00098 1.45732 5.00098 0.937683ZM8.12659 18.1285C9.78451 18.1285 11.3745 17.4699 12.5469 16.2976C13.7192 15.1253 14.3778 13.5352 14.3778 11.8773C14.3778 10.2194 13.7192 8.62937 12.5469 7.45704C11.3745 6.28471 9.78451 5.6261 8.12659 5.6261C6.46866 5.6261 4.87864 6.28471 3.70631 7.45704C2.53398 8.62937 1.87537 10.2194 1.87537 11.8773C1.87537 13.5352 2.53398 15.1253 3.70631 16.2976C4.87864 17.4699 6.46866 18.1285 8.12659 18.1285ZM9.06427 8.43915V12.5024C9.06427 13.0221 8.64622 13.4401 8.12659 13.4401C7.60695 13.4401 7.1889 13.0221 7.1889 12.5024V8.43915C7.1889 7.91952 7.60695 7.50147 8.12659 7.50147C8.64622 7.50147 9.06427 7.91952 9.06427 8.43915Z" fill="white" />
                  </svg>
                  <p className="text-xs">
                    Sale Ends 2025 May 22 07:30 AM EST
                  </p>
                </div>
                <div className="flex justify-between items-center py-3 gap-4 flex-col md:flex-row">
                  <div>
                    <p className="text-xs text-gray-400 font-azeret mb-3">Current Price</p>
                    <p className="text-3xl 2xl:text-4xl font-bold">32.027 SOL</p>
                    <p className="text-xs text-gray-500 text-center md:text-start">$841.07</p>
                  </div>
                  <RedarkButton title="PLACE BID" className="text-xs" />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-redark-purple/13 p-4 rounded-xl">
                <h2 className="text-lg border-b py-4 border-b-white/25 mb-2 font-mokoto">
                  DESCRIPTION
                </h2>
                <p className="text-sm text-gray-400 py-3 font-azeret">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor lobortis purus, non tempus neque. Nullam molestie, neque venenatis iaculis sagittis, lacus mi finibus lacus, id fringilla leo justo scelerisque lorem. Nunc convallis eget nisi quis laoreet. Morbi at risus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus ex ut facilisis ullamcorper. Etiam elit odio, sagittis ac lacinia sed, fringilla non felis.
                </p>
              </motion.div>

              {/* Price History */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#474747]/13 p-4 rounded-xl">
                <div className="flex gap-6 items-center pt-3 pb-4 border-b border-b-white/25">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.3125C14.2406 1.3125 14.4375 1.50937 14.4375 1.75V9.625C14.4375 9.86563 14.2406 10.0625 14 10.0625H9.20117C9.19297 10.0625 9.18477 10.0625 9.1793 10.0625H6.57617C6.56797 10.0625 6.55977 10.0625 6.5543 10.0625H1.75C1.50937 10.0625 1.3125 9.86563 1.3125 9.625V1.75C1.3125 1.50937 1.50937 1.3125 1.75 1.3125H14ZM1.75 11.375H5.78867L5.56992 12.6875H4.15625C3.79258 12.6875 3.5 12.9801 3.5 13.3438C3.5 13.7074 3.79258 14 4.15625 14H6.125H9.625H11.5938C11.9574 14 12.25 13.7074 12.25 13.3438C12.25 12.9801 11.9574 12.6875 11.5938 12.6875H10.1801L9.96133 11.375H14C14.9652 11.375 15.75 10.5902 15.75 9.625V1.75C15.75 0.784766 14.9652 0 14 0H1.75C0.784766 0 0 0.784766 0 1.75V9.625C0 10.5902 0.784766 11.375 1.75 11.375ZM6.89883 12.6875L7.11758 11.375H8.62969L8.84844 12.6875H6.89883ZM10.2812 2.625C9.91758 2.625 9.625 2.91758 9.625 3.28125C9.625 3.64492 9.91758 3.9375 10.2812 3.9375H10.8855L8.3125 6.51055L6.58984 4.78789C6.33281 4.53086 5.91719 4.53086 5.66289 4.78789L2.81641 7.62891C2.55938 7.88594 2.55938 8.30156 2.81641 8.55586C3.07344 8.81016 3.48906 8.81289 3.74336 8.55586L6.12227 6.17695L7.84492 7.89961C7.96797 8.02266 8.13477 8.09102 8.30977 8.09102C8.48477 8.09102 8.65156 8.02266 8.77461 7.89961L11.8098 4.86445V5.46875C11.8098 5.83242 12.1023 6.125 12.466 6.125C12.8297 6.125 13.1223 5.83242 13.1223 5.46875V3.28125C13.1223 2.91758 12.8297 2.625 12.466 2.625H10.2785H10.2812Z" fill="white" />
                  </svg>
                  <h2 className="text-lg">Price History</h2>
                </div>
                <div className="py-8">
                  <ApexChart />
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#474747]/13 py-4 px-6 rounded-xl">
                <div className="flex gap-6 items-center pt-3 pb-4 border-b border-b-white/25">
                  <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2H8.75H8.45C8.21875 0.859375 7.20937 0 6 0C4.79063 0 3.78125 0.859375 3.55 2H3.25H2C0.896875 2 0 2.89687 0 4V14C0 15.1031 0.896875 16 2 16H10C11.1031 16 12 15.1031 12 14V4C12 2.89687 11.1031 2 10 2ZM2.5 3.5V4.25C2.5 4.66563 2.83437 5 3.25 5H6H8.75C9.16562 5 9.5 4.66563 9.5 4.25V3.5H10C10.275 3.5 10.5 3.725 10.5 4V14C10.5 14.275 10.275 14.5 10 14.5H2C1.725 14.5 1.5 14.275 1.5 14V4C1.5 3.725 1.725 3.5 2 3.5H2.5ZM5.25 2.5C5.25 2.30109 5.32902 2.11032 5.46967 1.96967C5.61032 1.82902 5.80109 1.75 6 1.75C6.19891 1.75 6.38968 1.82902 6.53033 1.96967C6.67098 2.11032 6.75 2.30109 6.75 2.5C6.75 2.69891 6.67098 2.88968 6.53033 3.03033C6.38968 3.17098 6.19891 3.25 6 3.25C5.80109 3.25 5.61032 3.17098 5.46967 3.03033C5.32902 2.88968 5.25 2.69891 5.25 2.5ZM4.25 8.5C4.25 8.40151 4.2306 8.30398 4.19291 8.21299C4.15522 8.12199 4.09997 8.03931 4.03033 7.96967C3.96069 7.90003 3.87801 7.84478 3.78701 7.80709C3.69602 7.7694 3.59849 7.75 3.5 7.75C3.40151 7.75 3.30398 7.7694 3.21299 7.80709C3.12199 7.84478 3.03931 7.90003 2.96967 7.96967C2.90003 8.03931 2.84478 8.12199 2.80709 8.21299C2.7694 8.30398 2.75 8.40151 2.75 8.5C2.75 8.59849 2.7694 8.69602 2.80709 8.78701C2.84478 8.87801 2.90003 8.96069 2.96967 9.03033C3.03931 9.09997 3.12199 9.15522 3.21299 9.19291C3.30398 9.2306 3.40151 9.25 3.5 9.25C3.59849 9.25 3.69602 9.2306 3.78701 9.19291C3.87801 9.15522 3.96069 9.09997 4.03033 9.03033C4.09997 8.96069 4.15522 8.87801 4.19291 8.78701C4.2306 8.69602 4.25 8.59849 4.25 8.5ZM5.5 8C5.225 8 5 8.225 5 8.5C5 8.775 5.225 9 5.5 9H8.5C8.775 9 9 8.775 9 8.5C9 8.225 8.775 8 8.5 8H5.5ZM5.5 11C5.225 11 5 11.225 5 11.5C5 11.775 5.225 12 5.5 12H8.5C8.775 12 9 11.775 9 11.5C9 11.225 8.775 11 8.5 11H5.5ZM3.5 12.25C3.69891 12.25 3.88968 12.171 4.03033 12.0303C4.17098 11.8897 4.25 11.6989 4.25 11.5C4.25 11.3011 4.17098 11.1103 4.03033 10.9697C3.88968 10.829 3.69891 10.75 3.5 10.75C3.30109 10.75 3.11032 10.829 2.96967 10.9697C2.82902 11.1103 2.75 11.3011 2.75 11.5C2.75 11.6989 2.82902 11.8897 2.96967 12.0303C3.11032 12.171 3.30109 12.25 3.5 12.25Z" fill="white" />
                  </svg>
                  <h2 className="text-lg font-semibold mb-2">Details</h2>
                </div>
                <div className="text-sm space-y-1  text-gray-500 pt-5 pb-1 flex justify-between font-azeret">
                  <div className="flex flex-col gap-3">
                    <p>Contract Address:</p>
                    <p>Token ID:</p>
                    <p>Standard:</p>
                    <p>Chain:</p>
                    <p>Last Updated:</p>
                    <p>Creator Earnings:</p>
                  </div>
                  <div className="text-end flex flex-col gap-3">
                    <p className="text-redark-purple">0x1987...c81f</p>
                    <p>027068</p>
                    <p>ERC-721</p>
                    <p>SOLANA</p>
                    <p>8 months ago</p>
                    <p>8.04%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col  col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10 p-8 hidden md:inline">
              <Table
                columns={[
                  "Price",
                  "USD Price",
                  "Quantity",
                  "Reserve",
                  "Expiration",
                  "From",
                ]}
                data={MockData.offersTableData}
                title="Offers"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0008 14.4998H7.00343V15.4998C7.00343 15.6717 6.97219 15.8404 6.91908 15.9998H14.0008C15.1035 15.9998 16 15.1029 16 13.9998V4.82807C16 4.29682 15.7907 3.78745 15.4158 3.41246L12.5857 0.584368C12.2108 0.209373 11.7048 0 11.1737 0H6.00381C4.9011 0 4.00457 0.896864 4.00457 1.99998V4.22182L4.00769 4.2187C4.05455 4.19683 4.13264 4.1562 4.21386 4.12495C4.6387 3.95308 5.0979 3.9562 5.504 4.10933V1.99998C5.504 1.72498 5.72891 1.49998 6.00381 1.49998H11.0019V3.99995C11.0019 4.55307 11.4486 4.99994 12.0015 4.99994H14.5006V13.9998C14.5006 14.2748 14.2757 14.4998 14.0008 14.4998ZM3.41729 5.04994C3.10491 4.92182 2.74567 5.01869 2.5395 5.28431L2.2115 5.70618C2.17089 5.75931 2.11154 5.79056 2.04906 5.79993L1.52114 5.8718C1.18689 5.91868 0.924491 6.18118 0.880758 6.51242L0.80891 7.04054C0.799539 7.10617 0.765177 7.16554 0.715196 7.20304L0.290358 7.53429C0.0248336 7.74053 -0.0720045 8.0999 0.0560717 8.4124L0.255996 8.90614C0.280986 8.96552 0.280986 9.03427 0.255996 9.09677L0.0560717 9.58739C-0.0720045 9.89988 0.0248336 10.2593 0.290358 10.4655L0.712072 10.7936C0.765177 10.8342 0.796415 10.8936 0.805786 10.9561L0.877634 11.4842C0.924491 11.8186 1.18689 12.0811 1.51801 12.128L2.00533 12.1936V15.4998C2.00533 15.6842 2.10529 15.8529 2.27085 15.9404C2.43641 16.0279 2.63009 16.0186 2.78316 15.9154L4.00457 15.0998L5.22598 15.9154C5.37904 16.0186 5.57584 16.0279 5.73828 15.9404C5.90072 15.8529 6.00381 15.6842 6.00381 15.4998V12.1936L6.488 12.128C6.82224 12.0811 7.08464 11.8186 7.12838 11.4842L7.20023 10.9561C7.2096 10.8905 7.24396 10.8311 7.29394 10.7936L7.71565 10.4655C7.98118 10.2593 8.07802 9.89988 7.94994 9.58739L7.75314 9.09364C7.72815 9.03427 7.72815 8.96552 7.75314 8.90302L7.95619 8.40928C8.08426 8.09678 7.98743 7.73741 7.7219 7.53116L7.30019 7.20304C7.24708 7.16241 7.21584 7.10304 7.20647 7.04054L7.13463 6.51242C7.08777 6.17805 6.82537 5.91555 6.49424 5.8718L5.96632 5.79993C5.90072 5.79056 5.84137 5.75618 5.80388 5.70618L5.47588 5.28431C5.26971 5.01869 4.91047 4.92182 4.59809 5.04994L4.09828 5.24994C4.03893 5.27494 3.97021 5.27494 3.90773 5.24994L3.41417 5.04681L3.41729 5.04994ZM2.00533 8.99989C2.00533 8.46947 2.21596 7.96076 2.59089 7.5857C2.96582 7.21063 3.47434 6.99992 4.00457 6.99992C4.5348 6.99992 5.04331 7.21063 5.41824 7.5857C5.79317 7.96076 6.00381 8.46947 6.00381 8.99989C6.00381 9.53032 5.79317 10.039 5.41824 10.4141C5.04331 10.7892 4.5348 10.9999 4.00457 10.9999C3.47434 10.9999 2.96582 10.7892 2.59089 10.4141C2.21596 10.039 2.00533 9.53032 2.00533 8.99989Z"
                      fill="white"
                    />
                  </svg>
                }
              />
              <Table
                columns={["Event", "Price", "From", "To", "Timestamp"]}
                data={MockData.activityTableData}
                title="Item Activity"
                icon={
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.67954 17.7442C4.01518 18.0853 4.55791 18.0853 4.88998 17.7442C5.22205 17.4031 5.22562 16.8516 4.88998 16.5142L2.92613 14.5186L15.1413 14.515C15.6162 14.515 15.9982 14.1268 15.9982 13.6442C15.9982 13.1617 15.6162 12.7734 15.1413 12.7734H2.92613L4.88998 10.7779C5.22562 10.4368 5.22562 9.88531 4.88998 9.54787C4.55434 9.21044 4.0116 9.20681 3.67954 9.54787L0.25173 13.0274C-0.0839098 13.3685 -0.0839098 13.92 0.25173 14.2574L3.67954 17.7406V17.7442ZM15.7483 4.97259C16.0839 4.63153 16.0839 4.08002 15.7483 3.74259L12.3205 0.255795C11.9848 -0.0852651 11.4421 -0.0852651 11.11 0.255795C10.778 0.596855 10.7744 1.14836 11.11 1.48579L13.0739 3.48135L0.858737 3.48498C0.383843 3.48498 0.00178531 3.87321 0.00178531 4.35578C0.00178531 4.83834 0.383843 5.22657 0.858737 5.22657H13.0739L11.11 7.22213C10.7744 7.56319 10.7744 8.11469 11.11 8.45213C11.4457 8.78956 11.9884 8.79319 12.3205 8.45213L15.7483 4.96896V4.97259Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:pr-4 pr-4 md:py-10 text-white">
              <div className="flex items-center md:pb-12 pb-4">
                <h1 className="md:text-2xl text-sm font-semibold font-mokoto grow m-0">
                  Related Artworks
                </h1>
                <SortDropdown />
              </div>
              <span className="sm:hidden inline">
                <PaginatedNFTGallery itemsPerPage={1} />
              </span>
              <span className="hidden sm:inline md:hidden">
                <PaginatedNFTGallery itemsPerPage={2} />
              </span>
              <span className="hidden md:inline xl:hidden">
                <PaginatedNFTGallery itemsPerPage={3} />
              </span>
              <span className="hidden xl:inline">
                <PaginatedNFTGallery itemsPerPage={4} />
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
