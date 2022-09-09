/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wallet from "../wallet/Wallet";

function Header1() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className={click ? "main-container" : ""} onClick={() => Close()}>
          <nav
            className="navbar mx-8 lg:mx-8 xl:mx-16 2xl:mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="nav-container">
              <div className="nav-content">
                <div className="nav-icon" onClick={handleClick}>
                  <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <Link href="/">
                  <img src="/assets/image/logo.png" className="nav-logo" />
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">Expoverse</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">Lightpaper</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">Roadmap</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">Team</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">FAQ</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">About</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      activeClassName="active"
                      onClick={click ? handleClick : null}
                    >
                      <span className="nav-links">Contact</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" onClick={click ? handleClick : null}>
                      <span className="nav-links">Subscribe</span>
                    </Link>
                  </li>
                </ul>
                <Wallet />
              </div>
            </div>
          </nav>

          <style jsx>{`
            .main-container {
            }

            .navbar {
              position: relative;
              height: 100px;
              // background: linear-gradient(
              //     0deg,
              //     rgba(0, 0, 0, 0.2),
              //     rgba(0, 0, 0, 0.2)
              //   ),
              //   rgba(20, 216, 203, 0.1);
              background: linear-gradient(to right, #6680ff, #14d8cb);
              opacity: 0.9;
              clip-path: polygon(
                0 0,
                100% 0%,
                98.3% 80%,
                98% 86%,
                97.5% 92%,
                97% 95%,
                96.5% 97%,
                96% 98%,
                95.5% 99%,
                94% 100%,
                6% 100%,
                4.5% 99%,
                4% 98%,
                3.5% 97%,
                3% 95%,
                2.5% 92%,
                2% 86%,
                1.7% 80%
              );
            }

            .nav-container {
              position: absolute;
              top: 0px;
              left: 2px;
              bottom: 2px;
              right: 2px;
              background: linear-gradient(
                  120.5deg,
                  rgba(102, 128, 255, 0.2) 2.71%,
                  rgba(5, 232, 194, 0.2) 96.76%
                ),
                #000000;
              clip-path: polygon(
                0 0,
                100% 0%,
                98.3% 80%,
                98% 86%,
                97.5% 92%,
                97% 95%,
                96.5% 97%,
                96% 98%,
                95.5% 99%,
                94% 100%,
                6% 100%,
                4.5% 99%,
                4% 98%,
                3.5% 97%,
                3% 95%,
                2.5% 92%,
                2% 86%,
                1.7% 80%
              );
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .nav-content {
              width: 100%;
              margin: 0 2.5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .nav-logo {
            }

            .nav-menu {
              display: flex;
              list-style: none;
              text-align: center;
              // margin-right: 2rem;
              padding: 0px;
            }

            .nav-links {
              font-family: "Inter";
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              display: flex;
              align-items: center;
              color: #05e8c2;
              cursor: pointer;
            }
            .nav-links:hover {
              color: #05e8c2;
            }
            .fa-code {
              margin-left: 1rem;
            }

            .nav-item {
              line-height: 40px;
              font-family: "Inter";
              font-style: normal;
              margin: 0px 8px;
            }

            .nav-item:after {
              content: "";
              display: block;
              height: 3px;
              width: 0;
              background: transparent;
              transition: width 0.7s ease, background-color 0.5s ease;
            }

            .nav-item:hover:after {
              width: 100%;
              background: #ffdd40;
            }

            .nav-item.active {
              color: #05e8c2;
              border: 1px solid #ffdd40;
            }

            .nav-icon {
              display: none;
            }

            @media screen and (max-width: 1280px) {
              .nav-menu {
                display: flex;
                flex-direction: column;
                width: 100%;
                border-top: 1pxsolid #fff;
                position: absolute;
                top: 80px;
                left: -110%;
                opacity: 1;
                transition: all 0.5s ease;
                z-index: 30;
              }

              .nav-menu.active {
                // background: #1f5156;
                background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.6)
                  ),
                  rgba(20, 216, 203, 0.8);
                left: 0px;
                opacity: 1;
                transition: all 0.5s ease;
                margin: 7rem 0;
                padding: 0;
                z-index: 30;
                backdrop-filter: blur(20px);
              }

              .nav-item {
                color: white;
                border: none;
                font-family: "Inter";
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 40px;
                padding: 10px;
              }
              .nav-item .active {
                color: #05e8c2;
                border: none;
                font-family: "Inter";
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 40px;
                padding: 0px;
              }
              .nav-links {
                padding: 1.5rem;
                width: 100%;
                display: table;
              }

              .nav-icon {
                display: block;
                display: flex;
                align-items: center;
                // position: absolute;
                // top: 100;
                // right: 0;
                // transform: translate(-100%, 60%);
                font-size: 1.8rem;
                cursor: pointer;
                color: #ffffff;
              }
            }
            @media screen and (max-width: 576px) {
              // .navbar {
              //   border-bottom-right-radius: 80px;
              //   border-bottom-left-radius: 80px;
              //   padding: 100px 50px 10px;
              // }
              .nav-logo {
                width: 70%;
                margin: 0 10px;
              }
            }
            @media screen and (max-width: 450px) {
              .nav-logo {
                width: 65%;
                margin: 0 10px;
              }
            }
            @media screen and (max-width: 450px) {
              .nav-logo {
                width: 60%;
                margin: 0 10px;
              }
            }
          `}</style>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Header1;
