import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Head from 'next/head';

type HeaderProps = {
    className?: string;
    searchBar?: boolean;
    wallet?: boolean;
    searchIcon?: boolean;
    userIcon?: boolean;
}

function Header({ className, searchBar, wallet, searchIcon = false, userIcon = true }: HeaderProps) {
    const pathname = usePathname();
    const isActive = pathname?.startsWith('/user-account');

    return (
        <>
            <Head>
                <title>ARKV NFT MARKETPLACE</title>
                <meta name="description" content="ARKV NFT MARKETPLACE" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                
            <div className={`flex justify-between lg:gap-12 lg:pt-8 pt-4 lg:pr-10 pr-4 text-white ${className} ${!searchBar ? 'justify-end' : ""}`}>
                {/* Search */}
                {searchBar ? (<div className="max-w-md w-full hidden lg:inline">
                    <div className="flex items-center space-x-2 bg-white/25 font-azeret rounded-[10px] px-5 py-4">
                        <input
                            type="text"
                            placeholder="Search artwork, collection, artist..."
                            className="bg-transparent flex-1 text-sm placeholder-white focus:outline-none"
                        />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.501 9.74857C19.501 11.8998 18.8025 13.887 17.6259 15.4993L23.5605 21.4375C24.1465 22.0233 24.1465 22.9748 23.5605 23.5606C22.9746 24.1465 22.0229 24.1465 21.437 23.5606L15.5023 17.6224C13.8897 18.8035 11.9021 19.4971 9.75048 19.4971C4.36428 19.4971 0 15.1337 0 9.74857C0 4.36342 4.36428 0 9.75048 0C15.1367 0 19.501 4.36342 19.501 9.74857ZM9.75048 16.4976C10.6369 16.4976 11.5147 16.323 12.3337 15.9838C13.1527 15.6447 13.8969 15.1475 14.5237 14.5208C15.1505 13.8941 15.6477 13.1501 15.987 12.3313C16.3262 11.5125 16.5008 10.6349 16.5008 9.74857C16.5008 8.86228 16.3262 7.98466 15.987 7.16584C15.6477 6.34701 15.1505 5.603 14.5237 4.9763C13.8969 4.3496 13.1527 3.85247 12.3337 3.5133C11.5147 3.17413 10.6369 2.99956 9.75048 2.99956C8.86401 2.99956 7.98622 3.17413 7.16724 3.5133C6.34825 3.85247 5.6041 4.3496 4.97727 4.9763C4.35045 5.603 3.85322 6.34701 3.51398 7.16584C3.17475 7.98466 3.00015 8.86228 3.00015 9.74857C3.00015 10.6349 3.17475 11.5125 3.51398 12.3313C3.85322 13.1501 4.35045 13.8941 4.97727 14.5208C5.6041 15.1475 6.34825 15.6447 7.16724 15.9838C7.98622 16.323 8.86401 16.4976 9.75048 16.4976Z" fill="white" />
                        </svg>
                    </div>
                </div>) : ""}
                <div className='flex justify-between items-center md:justify-between w-full lg:gap-14 gap-2 md:gap-4 lg:w-fit'>
                    <p className='inline lg:hidden items-center font-mokoto text-lg -mb-3'>ARKHIVE</p>
                    <div className='flex gap-2 lg:gap-5 2xl:gap-12 items-center'>
                        {/* wallet */}
                        {wallet ? (<button className='uppercase bg-gradient-to-b from-redark-purple to-[#543199] border
                            border-white rounded-full font-mokoto lg:px-6 px-3 lg:pt-3 lg:pb-2 pt-2 pb-1 !text-xs'>Wallet</button>) : ""}

                        {/* icons */}
                        <div className='flex lg:gap-10 gap-6 items-center'>
                            {searchIcon ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.501 9.74857C19.501 11.8998 18.8025 13.887 17.6259 15.4993L23.5605 21.4375C24.1465 22.0233 24.1465 22.9748 23.5605 23.5606C22.9746 24.1465 22.0229 24.1465 21.437 23.5606L15.5023 17.6224C13.8897 18.8035 11.9021 19.4971 9.75048 19.4971C4.36428 19.4971 0 15.1337 0 9.74857C0 4.36342 4.36428 0 9.75048 0C15.1367 0 19.501 4.36342 19.501 9.74857ZM9.75048 16.4976C10.6369 16.4976 11.5147 16.323 12.3337 15.9838C13.1527 15.6447 13.8969 15.1475 14.5237 14.5208C15.1505 13.8941 15.6477 13.1501 15.987 12.3313C16.3262 11.5125 16.5008 10.6349 16.5008 9.74857C16.5008 8.86228 16.3262 7.98466 15.987 7.16584C15.6477 6.34701 15.1505 5.603 14.5237 4.9763C13.8969 4.3496 13.1527 3.85247 12.3337 3.5133C11.5147 3.17413 10.6369 2.99956 9.75048 2.99956C8.86401 2.99956 7.98622 3.17413 7.16724 3.5133C6.34825 3.85247 5.6041 4.3496 4.97727 4.9763C4.35045 5.603 3.85322 6.34701 3.51398 7.16584C3.17475 7.98466 3.00015 8.86228 3.00015 9.74857C3.00015 10.6349 3.17475 11.5125 3.51398 12.3313C3.85322 13.1501 4.35045 13.8941 4.97727 14.5208C5.6041 15.1475 6.34825 15.6447 7.16724 15.9838C7.98622 16.323 8.86401 16.4976 9.75048 16.4976Z" fill="white" />
                            </svg>
                            ) : ''}
                            {userIcon ? (<Link href='/user-account'>
                                <Image
                                    src={isActive ? '/assets/img/icons/user-fill.svg' : '/assets/img/icons/user.svg'}
                                    alt="User Icon"
                                    width={24}
                                    height={24}
                                />
                            </Link>) : ''}
                            <svg className='hidden md:inline' width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9687 0.84375C10.9687 0.379687 11.3484 0 11.8125 0C12.2766 0 12.6562 0.379687 12.6562 0.84375V1.72969C16.9225 2.15156 20.25 5.74805 20.25 10.125V11.6596C20.25 13.9641 21.1676 16.1736 22.7971 17.8084L22.9447 17.9561C23.3824 18.3937 23.6303 18.9896 23.6303 19.6066C23.6303 20.8986 22.5861 21.9428 21.2941 21.9428L2.33613 21.9375C1.04414 21.9375 0 20.8934 0 19.6014C0 18.9844 0.247852 18.3885 0.685547 17.9508L0.833203 17.8031C2.45742 16.1736 3.375 13.9641 3.375 11.6596V10.125C3.375 5.74805 6.70254 2.15156 10.9687 1.72969V0.84375ZM11.8125 3.375C8.08418 3.375 5.0625 6.39668 5.0625 10.125V11.6596C5.0625 14.4123 3.9709 17.0543 2.01973 19.0002L1.87734 19.1426C1.75605 19.2639 1.6875 19.4273 1.6875 19.6014C1.6875 19.96 1.97754 20.25 2.33613 20.25H21.2889C21.6475 20.25 21.9375 19.96 21.9375 19.6014C21.9375 19.4273 21.8689 19.2639 21.7477 19.1426L21.6 18.9949C19.6541 17.049 18.5572 14.407 18.5572 11.6543V10.1197C18.5572 6.39141 15.5355 3.36973 11.8072 3.36973L11.8125 3.375ZM10.2199 24.1893C10.452 24.8432 11.0795 25.3125 11.8125 25.3125C12.5455 25.3125 13.173 24.8432 13.4051 24.1893C13.558 23.7516 14.0432 23.5195 14.4809 23.6725C14.9186 23.8254 15.1506 24.3105 14.9977 24.7482C14.5336 26.0613 13.2838 27 11.8125 27C10.3412 27 9.09141 26.0613 8.62734 24.7482C8.47441 24.3105 8.70117 23.8254 9.14414 23.6725C9.58711 23.5195 10.067 23.7463 10.2199 24.1893Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;