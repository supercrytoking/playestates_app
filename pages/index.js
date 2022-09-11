/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import VideoBg from "reactjs-videobg";

////////////////////// Components////////////////////////////

import Header from "../components/header/Header";
import Introduction from "../components/introduction/Introduction";
import IconBar from "../components/iconBar/IconBar";
import CollectionCard from "../components/collectionCard/CollectionCard";
import InvestorCard from "../components/investorCard/InvestorCard";
import NFTcard from "../components/NFTcards/NFTcard";
import InvestorCollection from "../components/investorCollection/InvestorCollection";

/////////////////////////Style and Assets ////////////////////////

import styles from "../styles/Home.module.css";
import bg from '../public/assets/image/bg.png';
import bg2 from '../public/assets/image/bg2.png';
// import bgVideo from '../public/assets/image/bg.mp4';

//////////////////////// Datas /////////////////////////////////

import cardDatas from "../lib/cyberLife.json";

const bkChg = {
	position: 'relative',
	background: `url(${bg.src}) center center`,
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
	backgroundSize: 'cover',
	overflow: 'hidden',
	width: '100%',
	zIndex: 4,
}
const variants = {
	rotate: { rotate: [0, -30, 0], transition: { duration: 0.1 } },
	// You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
	stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 0.1 } },
	click: { y: 2000, opacity: 1, transition: { duration: 0.1 } },
	unclick: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

export default function Home({ rotate }) {
	const [bgImg, setBgImg] = useState(styles.container1)
	const [current, setCurrent] = useState(0);

	const changeStyle = () => {
		setBgImg(styles.container2);
		setCurrent(current + 1);
		console.log("current1", current);
	}

	const changeLayout = () => {
		setBgImg(styles.container3);
		setCurrent(current + 1);
		console.log("current2", current);
	}

	const [nftCardData, setCardData] = useState([]);
	useEffect(() => {
		setCardData(cardDatas);
	}, []);
	console.log("this is scalling", nftCardData.cardDatas);

	return (
		<AnimatePresence>

			<motion.div
				className={bgImg}
				variants={variants}
				initial={{ y: 0, opacity: 1 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -1000, opacity: 0 }}
			>
				<Head>
					<title>PlayEstates</title>
					<meta name="description" content="Generated by create next app" />
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="/fonts/font-awesome/css/font-awesome.css"
					/>
				</Head>
				<Header />
				{
					current === 0 &&
					<video autoPlay loop muted className="absolute inset-0 object-cover h-full videoIndex xl:h-full w-full">
						<source
							src={`assets/image/bg.webm`}
							type="video/webm"
						/>
					</video>
				}
				{
					current === 1 &&
					<video autoPlay loop muted className="absolute inset-0 object-cover h-full videoIndex xl:h-full w-full">
						<source
							src={`assets/image/bg1.webm`}
							type="video/webm"
						/>
					</video>
				}
				<>
					{(() => {
						switch (current) {
							case 0:
								return (
									<>
										<motion.main
											className={styles.main}
											initial={{ y: 1000, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: -10, opacity: 0 }}
											transition={{ duration: 2.5 }}
										>
											<div className={styles.mainContent}>
												<Introduction />
												<motion.div
													initial={{ y: 1000, opacity: 0 }}
													animate={{ y: 0, opacity: 1 }}
													exit={{ y: -10, opacity: 0 }}
													transition={{ duration: 3.5 }}
												>
													<div className={styles.arrowSet}>
														<p className={styles.arrowTitle}>
															<span className={styles.arrowTitleContent}>Click to start journey</span>
														</p>
														<div className={styles.arrow}>
															<motion.img
																variants={variants}
																animate={rotate ? "rotate" : "stop"}
																id="monkeyFace"
																className="arrow-effect"
																src="/assets/image/Vector.png"
																onClick={changeStyle}
															/>
														</div>
													</div>
												</motion.div>
											</div>

											<motion.div
												className={styles.earth}
												initial={{ y: 1000, opacity: 0 }}
												animate={{ y: 0, opacity: 1 }}
												exit={{ y: -10, opacity: 0 }}
												transition={{ duration: 2.5 }}
												onClick={changeStyle}
											>
												<img src="/assets/image/earth2.png" alt="earth" />
											</motion.div>
										</motion.main>
										<motion.div
											className={styles.social}
											initial={{ y: 1000, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											exit={{ y: -10, opacity: 0 }}
											transition={{ duration: 2.5 }}
										>
											<img
												className={styles.socialBtn}
												src="/assets/image/Instagram.png"
												alt=""
											/>
											<img
												className={styles.socialBtn}
												src="/assets/image/Twitter.png"
												alt=""
											/>
											<img
												className={styles.socialBtn}
												src="/assets/image/Discord.png"
												alt=""
											/>
										</motion.div>
									</>
								)
							case 1:
								return (
									<>
										<main className={styles.main}>
											<div className={styles.mainContent1}>
												<motion.h1
													className={styles.collectiontitle}
													initial={{ y: 1000, opacity: 0 }}
													animate={{ y: 0, opacity: 1 }}
													exit={{ y: -10, opacity: 0 }}
													transition={{ duration: 2.5 }}
												>
													Choose Collection
												</motion.h1>

												<motion.div
													className={styles.collections}
													initial={{ y: 1000, opacity: 0 }}
													animate={{ y: 0, opacity: 1 }}
													exit={{ y: -10, opacity: 0 }}
													transition={{ duration: 2.5 }}
												>
													<div className="flex justify-around flex-wrap p-1 sm:p-20">
														<div className="m-8">
															<CollectionCard className="p-8" handleClick={changeLayout} />
														</div>
														<div className="m-8">
															<InvestorCard className="p-8" handleClick={changeLayout} />
														</div>
													</div>
												</motion.div>
											</div>
										</main>
									</>
								)
							case 2:
								return (
									<>
										<main className={styles.main}>
											<div className={styles.mainContent2}>

												<div className="p-8 lg:p-8 xl:p-16 2xl:p-20 mt-8">
													<InvestorCollection />

													<motion.div className={styles.NFTCollection}
														initial={{ y: 1000, opacity: 0 }}
														animate={{ y: 0, opacity: 1 }}
														exit={{ y: -10, opacity: 0 }}
														transition={{ duration: 2.5 }}>
														<div className="m-12">
															<div className="flex justify-around flex-wrap">
																{nftCardData.cardDatas
																	? nftCardData.cardDatas.map((items, i) => (
																		<NFTcard
																			cardData={items}
																			key={`${items.imgAlt1}-${i}`}
																		/>
																	))
																	: "Loading..."}
															</div>
														</div>
													</motion.div>
												</div>
											</div>
										</main>
									</>
								)
							default:
								return null
						}
					})()}
				</>

			</motion.div >
			<style jsx>{`
				.videoIndex {
					z-index: -9;
				}
				.videoIndex2 {
					z-index: -8;
				}
			`}</style>
		</AnimatePresence >

	);
}
