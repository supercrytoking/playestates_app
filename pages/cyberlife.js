/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import Title from "../components/title/Title";
import NFTcard from "../components/NFTcards/NFTcard";
import cardDatas from "../lib/cyberLife.json";
import GameCard from "../components/gameCard/GameCard";
import Accordion from "../components/accordian/Accordian";
import DepositeModal from "../components/depositeModal/DepositeModal";
import IconBar from "../components/iconBar/IconBar";
import InvestorCollection from "../components/investorCollection/InvestorCollection";
import Footer from "../components/footer/Footer";

export default function CyberLife() {
  const moreTitle = "Similar games";
  const [nftCardData, setCardData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCardData(cardDatas);
  }, []);

  const openModal = () => {
    setOpen(true);
  };
  const changeOpen = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <main className="cyber-life">
        <div className="banner">
          <Header />

          <div className="bannertitle">
            <div className="flex">
              <button className="actionBtn">ACTION</button>
              <img src="/assets/image/game.png" alt="banner" className="mr-2" />
              <img src="/assets/image/video-play.png" alt="banner" />
            </div>
            <span className="maintitle">Cyber life 3</span>
            <div>
              <button className="playnowBtn">Play now</button>
            </div>
          </div>
          <img className="enter" src="assets/image/enter.png" alt="enter" />
        </div>
        <div className="p-8 lg:p-8 xl:p-16 2xl:p-20 mt-8">
          <InvestorCollection />
          <div className="flex flex-row flex-wrap">
            <div className="basis-full lg:basis-1/3 p-4">
              <div className="">
                <div className="slider">
                  <div className="flex justify-between py-4">
                    <span>Achievement</span>
                    <span>51/57</span>
                  </div>
                  <div className="mb-8">
                    <img
                      className="fix-image"
                      src="/assets/image/cyberlife/slider.png"
                      alt="slider"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-full lg:basis-1/3 p-4">
              <div className="">
                <div className="downloading">
                  <div className="flex justify-between py-4">
                    <span>Downloading</span>
                    <span>27MB / 100MB</span>
                  </div>
                  <div className="mb-8">
                    <img
                      className="fix-image"
                      src="/assets/image/cyberlife/download.png"
                      alt="download"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-400 basis-full lg:basis-1/3 p-4">
              <div className="balance">
                <h3 className="py-4">Balance</h3>
                <div className="flex justify-between items-center my-1">
                  <div>
                    <div className="flex justify-between items-center">
                      <img
                        src="/assets/image/cyberlife/button1.png"
                        alt="button1"
                      />
                      <span className="px-2">342.2456 SOL</span>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <img
                      src="/assets/image/cyberlife/button1.png"
                      alt="button1"
                      className="mx-1"
                    />
                    <img
                      src="/assets/image/cyberlife/button2.png"
                      alt="button2"
                      className="mx-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="summary py-12">
            <div className="flex flex-row flex-wrap">
              <div className="basis-full lg:basis-1/2 px-4">
                <div className="pt-8">
                  <h1>
                    <span className="mr-4">
                      <img
                        src="/assets/image/cyberlife/info-circle.png"
                        alt="info-circle"
                      />
                    </span>
                    Description
                  </h1>
                </div>
                <div className="description mt-8">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tortor ipsum orci massa mauris tellus adipiscing risus quam.
                    In nulla sed sit quis augue euismod maecenas risus. Sit
                    risus, amet viverra lectus risus scelerisque elit. Odio
                    semper massa nisi quisque fringilla sit. Facilisis odio
                    habitant ut nulla scelerisque.
                  </p>
                  <p className="mt-8 text-justify">
                    Sit risus, amet viverra lectus risus scelerisque elit. Odio
                    semper massa nisi quisque fringilla sit. Facilisis odio
                    habitant ut nulla scelerisque.
                  </p>
                </div>
              </div>
              <div className="basis-full lg:basis-1/2 px-4">
                <div className="pt-8">
                  <h1>
                    <span className="mr-4">
                      <img
                        src="/assets/image/cyberlife/message-question.png"
                        alt="message-question"
                      />
                    </span>
                    FAQ
                  </h1>
                </div>
                <div className="accordians mt-8">
                  <Accordion
                    title="Kortor ipsum orci massa mauris tellus adipiscing risus quam?"
                    content="this is content 1"
                  />
                  <Accordion
                    title="Mauris tellus adipiscing risus quam?"
                    content="this is content 2"
                  />
                  <Accordion
                    title="Wdipiscing risus quam?"
                    content="this is content 2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between flex-wrap items-center px-4">
            <div className="flex items-center my-4">
              <span>
                <img src="/assets/image/cyberlife/nft.png" alt="nft" />
              </span>
              <span className="nft-title ml-4">NFT</span>
            </div>
            <div className="w-full sm:w-auto text-center sm:text-right my-4">
              <input className="nft-search" placeholder="Search" />
            </div>
          </div>
          <div className="mt-8 px-4">
            <div className="flex justify-around flex-wrap">
              {nftCardData.cardDatas
                ? nftCardData.cardDatas.map((items, i) => (
                  <div onClick={openModal} key={`${items.imgAlt1}-${i}`}>
                    <NFTcard cardData={items} />
                  </div>
                ))
                : "Loading..."}
            </div>
            <div>
              <div className="my-8">
                <Title title={moreTitle} />
              </div>
              <div className="flex justify-around flex-wrap">
                {nftCardData.similarGames
                  ? nftCardData.similarGames.map((items, i) => (
                    <GameCard
                      gameCard={items}
                      key={`${items.gImgAlt1}-${i}`}
                    />
                  ))
                  : "Loading..."}
              </div>
            </div>
          </div>
          <DepositeModal bool={open} changeOpen={() => changeOpen()} />
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .cyber-life {
          color: white;
          background: linear-gradient(
              120.5deg,
              rgba(102, 128, 255, 0.2) 2.71%,
              rgba(5, 232, 194, 0.2) 96.76%
            ),
            #000000;
        }
        .banner {
          position: relative;
          background: url("/assets/image/cyberlife/bg.png") center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 399px;
          max-height: 399px;
          z-index: 0;
        }
        .bannertitle {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: 130px;
          bottom: 100px;
          z-index: -2;
        }
        .actionBtn {
          background: #6680ff;
          padding: 4px 10px;
          border-radius: 10px;
          margin-right: 20px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
        .playnowBtn {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          margin-top: 20px;
          padding: 12px 23px;
          gap: 8px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          box-shadow: 0px 0px 16px rgba(102, 128, 255, 0.5),
            0px 0px 12px rgba(21, 195, 244, 0.5);
          border-radius: 10px;
        }
        .subtitle {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 31px;
          display: flex;
          align-items: center;

          color: rgba(255, 255, 255, 0.9);
        }

        .maintitle {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 1000;
          font-size: 56px;
          line-height: 80px;
          background: linear-gradient(120.5deg, #6680ff 2.71%, #05e8c2 96.76%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        .enter {
          position: absolute;
          right: 0;
          bottom: -90px;
          height: 419px;
          z-index: -2;
        }
        .nft-title {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 51px;
          color: #ffffff;
        }
        .nft-search {
          background: url("/assets/image/cyberlife/search-normal.png") no-repeat
            right;
          background-size: 24px;
          width: 300px;
          height: 40px;
          border-radius: 8px;
          padding: 0 26px 0 10px;
          border-width: 2px;
          border-style: solid;
          border-image: linear-gradient(to right, #6680ff, #14d8cb) 1;
        }
        .summary {
          height: fit-content;
        }
        .summary h1 {
          font-family: "Michroma";
          font-style: normal;
          font-weight: 400;
          font-size: 36px;
          line-height: 51px;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
        .description {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 140%;
          color: #9ea7ac;
        }
        .slider {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            rgba(20, 216, 203, 0.1);
          border-width: 1px;
          border-style: solid;
          border-image: linear-gradient(to right, #14d8cb, #6680ff) 1;
          padding: 20px;
        }
        .downloading {
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            rgba(20, 216, 203, 0.1);
          border-width: 1px;
          border-style: solid;
          border-image: linear-gradient(to right, #14d8cb, #6680ff) 1;
          padding: 20px;
        }
        .balance {
          border-width: 1px;
          border-style: solid;
          border-image: linear-gradient(to right, #14d8cb, #6680ff) 1;
          padding: 20px;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            rgba(20, 216, 203, 0.1);
        }
        .balance img {
          width: 40px;
          height: 40px;
        }
        @media screen and (max-width: 1142px) {
          .fix-image {
            width: 100%;
          }
        }
        @media screen and (max-width: 920px) {
          .fix-image {
            width: 100%;
          }
        }
        @media screen and (max-width: 768px) {
          .fix-image {
            width: 100%;
          }
          .enter {
            display: none;
          }
          .bannertitle {
            left: 80px;
            bottom: 80px;
          }
          .maintitle {
            font-size: 40px;
          }
        }
        @media screen and (max-width: 400px) {
          .banner {
            height: 300px;
          }

          .bannertitle {
            left: 40px;
            bottom: 20px;
          }
          .maintitle {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}
