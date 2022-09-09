/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CollectionCard({ cardTitle, cardDescription, handleClick }) {
	const [hover, setHover] = useState(false);
	const variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	return (
		<AnimatePresence>
			<motion.div
				className="card-container"
				initial={{ scale: 1 }}
				whileHover={{
					scale: 1.2,
					transition: {
						duration: 0.2,
					},
				}}
				onMouseOver={() => setHover(true)}
				onMouseOut={() => setHover(false)}
			>
				<div className="card-image" onClick={handleClick}>
					<img className="image" src="/assets/image/staking2.png" alt="mogul" />
					<span className="card-text">
						<span className="card-title">Mogul</span>
						<span className="card-description">
							Eu, hendrerit adipiscing pulvinar diam tincidunt ac amet eu. Nulla
							suspendisse dignissim arcu urna leo nunc bibendum
						</span>
						{hover ? (
							<div className="hover-view">
								<span className="hover-title">View more</span>

								<img
									className="arrows"
									src="/assets/image/Vector_white.png"
									alt="banner"
								/>

							</div>
						) : (
							<></>
						)}
					</span>
				</div>

				<style jsx>{`
          .card-container {
            // position: relative;
            width: 466px;
            height: 100%;
            color: white;
            margin: 20px 20px;
          }
          .card-image {
            position: relative;
            width: 466px;
          }
          .image {
            width: 100%;
            height: 100%;
          }

          .card-text {
            position: absolute;
            width: 401px;
            height: 147px;
            left: 30px;
            top: 200px;

            display: flex;
            flex-direction: column;
            text-align: left;
          }
 					.card-container: hover .card-text {
            top: 200px;
					}
          .card-title {
            font-family: "Michroma";
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 57px;
            color: white;

            margin-bottom: 10px;
          }

					.card-text:hover .card-title {
						font-size: 56px;
						line-height: 80px;
						color: #15C3F4;
					}

          .card-description {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: rgba(255, 255, 255, 0.8);
          }
					.card-text:hover .card-description:hover {
						font-size: 18px;
						line-height: 140%;
					}
          .card-container:hover,
          .card-container:focus,
          .card-container:active {
            color: #15c3f4;
            cursor: pointer;
          }
					.hover-view {
						display: flex;
						margin-top: 17px;
					}
					.hover-title {
						font-family: 'Inter';
						font-style: normal;
						font-weight: 700;
						font-size: 21px;
						line-height: 25px;

						color: #FFFFFF;
						padding-right: 20px;
					}
					.arrows{
            margin-left: 10px;
					}

          @media (max-width: 992px) {
            .card-container {
              margin: 30px;
            }
          }
          @media (max-width: 576px) {
            .card-container {
              width: 100%;
              margin: 10px;
            }
            .card-image {
              width: 100%;
            }
          }
        `}</style>
			</motion.div>
		</AnimatePresence>
	);
}
export default CollectionCard;