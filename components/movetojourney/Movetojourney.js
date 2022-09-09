/* eslint-disable @next/next/no-css-tags */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../arrow/Arrow";

function Movetojourney() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div className="arrowSet">
          <p className="arrowTitle">
            <span className="arrowTitleContent">Click to start journey</span>
          </p>
          <div className="arrow">
            <Arrow />

            {/* <img src="/assets/image/Vector.png" height={20} alt="" /> */}
          </div>

          <style jsx>{`
            .arrowSet {
              display: flex;
              flex-direction: column-reverse;
              justify-content: center;
              align-items: center;
              margin-top: 60px;
              margin-bottom: 20px;
            }

            .arrowTitle {
              font-family: "Inter";
              font-style: italic;
              font-weight: 500;
              font-size: 22px;
              line-height: 27px;
              text-align: center;
              flex: none;
              order: 1;
              flex-grow: 0;
              margin-bottom: 15px;
            }

            .arrowTitleContent {
              width: fit-content;
              padding: 2px;
              background: rgba(0, 0, 0, 0.15);
              color: white;
            }

            .arrow {
              width: 28.17px;
              height: 18px;
            }
            .arrow img {
              width: 100%;
            }

            @media screen and (max-width: 920px) {
             
            }

            @media screen and (max-width: 576px) {
              
            }

            @media screen and (max-width: 375px) {
             
              }
            }
          `}</style>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
export default Movetojourney;
