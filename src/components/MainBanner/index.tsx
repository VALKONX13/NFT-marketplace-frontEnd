import React from "react";
import RedarkButton from '@/components/RedarkButton/index';
import { motion } from 'framer-motion';

type bannerProps = {
  className?: string,
}

function MainBanner({ className }: bannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`${className} bg-[url('/assets/img/marketplace-header.jpg')] rounded-[40px] w-full bg-center bg-cover p-6 lg:px-[50px] lg:py-[46px]`}>
      <p className="font-bold xl:text-5xl text-2xl text-white max-w-[416px] xl:leading-16">
        Discover Rare & Unique Digital Art
      </p>
      <div className="pt-5 lg:gap-10 gap-4 flex md:flex-row flex-col">
        <RedarkButton title="EXPLORE NFTS" className="!px-4 text-xs" />
        <RedarkButton title="CREATE NFT" className="!px-4 text-xs" href="/ark-tools/nft-mint-tool"/>
      </div>
    </motion.div>
  );
}

export default MainBanner;
