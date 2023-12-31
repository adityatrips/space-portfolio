import React from 'react';
import {
	RxDiscordLogo,
	RxGithubLogo,
	RxInstagramLogo,
	RxTwitterLogo,
	RxLinkedinLogo,
} from 'react-icons/rx';

import { FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
			<div className="w-full flex flex-col items-center justify-center m-auto">
				<div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
						<div className="font-bold text-[16px]">Community</div>
						<Link href='https://www.youtube.com/channel/UC4nhvF_mLywl1kRWyRn4oIw' target='_blank' className="flex flex-row items-center my-[15px] cursor-pointer">
							<FaYoutube />
							<span className="text-[15px] ml-[6px]">
								Youtube
							</span>
						</Link>
						<Link href='https://github.com/adityatrips' target='_blank' className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxGithubLogo />
							<span className="text-[15px] ml-[6px]">Github</span>
						</Link>
						<Link href='https://discord.gg/QphQpnCG' target='_blank' className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxDiscordLogo />
							<span className="text-[15px] ml-[6px]">
								Discord
							</span>
						</Link>
					</div>
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
						<div className="font-bold text-[16px]">
							Social Media
						</div>
						<Link href="https://www.instagram.com/i_adityatripathi2412/" target='_blank' className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxInstagramLogo />
							<span className="text-[15px] ml-[6px]">
								Instagram
							</span>
						</Link>
						<Link href="https://twitter.com/adity04tripathi" target='_blank' className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxTwitterLogo />
							<span className="text-[15px] ml-[6px]">
								Twitter
							</span>
						</Link>
						<Link href="https://www.linkedin.com/in/aditya-tripathi-at04/" target='_blank' className="flex flex-row items-center my-[15px] cursor-pointer">
							<RxLinkedinLogo />
							<span className="text-[15px] ml-[6px]">
								Linkedin
							</span>
						</Link>
					</div>
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
						<div className="font-bold text-[16px]">About</div>
						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<span className="text-[15px] ml-[6px]">
								Made with love by me!
							</span>
						</p>
						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<span className="text-[15px] ml-[6px]">
								+91 9810028236 (WhatsApp only)
							</span>
						</p>
						<p className="flex flex-row items-center my-[15px] cursor-pointer">
							<span className="text-[15px] ml-[6px]">
								adityatripathi.at04@gmail.com
							</span>
						</p>
					</div>
				</div>

				<div className="mb-[20px] text-[15px] text-center">
					&copy; Aditya {(new Date().getFullYear())}. All rights reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
