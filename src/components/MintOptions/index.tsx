import Image from "next/image";
import RedarkButton from '@/components/RedarkButton/index';

export default function MintOptions() {
  return (
    <div className="items-center text-center text-white font-azeret px-4 py-6 md:flex-row md:justify-center gap-6">
      <div className="grid grid-cols-12 gap-8">
        {/* Mint Your Own NFT Section */}
        <div className="bg-redark-purple/13 rounded-2xl p-6 w-full col-span-6">
          <h2 className="tracking-wider font-mokoto text-2xl my-8">
            MINT YOUR OWN NFT
          </h2>
          <hr className="border-purple-600 mb-6" />
          <div className="flex gap-4 justify-around mb-6">
            <Image
              src="/assets/img/NFT-art.png"
              alt="NFT 1"
              width={200}
              height={208}
              className="rounded-xl object-cover"
            />
            <Image
              src="/assets/img/duck-nft.jpg"
              alt="NFT 2"
              width={200}
              height={208}
              className="rounded-xl object-cover"
            />
            <Image
              src="/assets/img/lizard-main.jpg"
              alt="NFT 3"
              width={200}
              height={208}
              className="rounded-xl object-cover"
            />
          </div>
          <p className="text-gray-400 mb-6 text-start">
            Take full control of your creation process. Upload your artwork, set
            properties, and mint directly to the blockchain.
          </p>
          <ul className="text-left space-y-2 mb-6 text-sm text-gray-400">
            <li className="flex items-center gap-5 mb-3">
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
              <p>Create one-of-a-kind masterpieces</p>
            </li>
            <li className="flex items-center gap-5 mb-3">
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
              <p>Build entire collections</p>
            </li>
            <li className="flex items-center gap-5 mb-3">
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
              <p>Set custom meta-data and properties</p>
            </li>
          </ul>
          <RedarkButton title="START CREATING"/>
          <p className="text-gray-500 text-xs text-start mt-16">
            Submitting: 100.00 ARKV, no additional costs
          </p>
        </div>
        {/* AI Generated Artwork Section */}
        <div className="bg-redark-purple/13 rounded-2xl p-6 w-full col-span-6">
          <h2 className="tracking-wider font-mokoto text-2xl my-8">
            AI GENERATED ARTWORK MINTING
          </h2>
          <hr className="border-purple-600 mb-6" />
          <div className="flex gap-4 justify-around mb-6">
            <Image
              src="/assets/img/NFT-art.png"
              alt="NFT 1"
              width={200}
              height={208}
              className="rounded-xl object-cover"
            />
            <Image
              src="/assets/img/duck-nft.jpg"
              alt="NFT 2"
              width={200}
              height={208}
              className="rounded-xl object-cover"
            />
            <Image
              src="/assets/img/lizard-main.jpg"
              alt="NFT 3"
              width={200}
              height={208}
              className="rounded-xl object-cover"
            />
          </div>
          <p className="text-gray-400 mb-6 text-sm text-start">
            A NEW WAY to create Digital Assets. Let our AI technology transform
            your vision into stunning digital art.
          </p>
          <ul className="text-left space-y-2 mb-6 text-sm text-gray-400">
            <li className="flex items-center gap-5 mb-3">
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
              <p>Text-to-image generation</p>
            </li>
            <li className="flex items-center gap-5 mb-3">
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
              <p>Style-customization options</p>
            </li>
            <li className="flex items-center gap-5 mb-3">
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
              <p>Multiple variations to choose from</p>
            </li>
          </ul>
          <button className="bg-gradient-to-r from-[#8C52FF] to-[#543199] border border-white font-mokoto
            px-11 pb-2.5 pt-3 font-medium text-[16px] rounded-full hover:opacity-90 transition">
            GENERATE WITH AI
          </button>
          <p className="text-gray-500 text-xs mt-16 text-start">
            Submitting: 100.00 ARKV, Generating: 10.00 ARKV /3 attempt
          </p>
        </div>
      </div>

      {/* Wallet Info */}
      <p className="text-sm text-gray-300 w-full text-center mt-12">
        Your current wallet Balance is{" "}
        <span className="text-purple-400 font-semibold">107.68 ARKV</span> – you
        are all set to mint your NFT.
      </p>
    </div>
  );
}
