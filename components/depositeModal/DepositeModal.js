import React, { useEffect, useState } from "react";
import styles from "../../styles/Modal.module.css";

import Modal from "react-modal";

Modal.setAppElement("div");

export default function DepositeModal({ bool, changeOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(bool);
  }, [bool]);
  const toggleModal = () => {
    setIsOpen(!isOpen);
    changeOpen();
  };

  return (
    <div className={styles.Modal}>
      {/* <button onClick={toggleModal}>Open modal</button> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className={styles.mymodal}
        overlayClassName={styles.myoverlay}
        closeTimeoutMS={500}
      >
        <div className={styles.modalContent}>
          <div className="text-gray-400 text-xl absolute top-4 right-4">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div className={styles.modalTitle}>
            <h1>Deposit my balance</h1>
          </div>
          <div className={styles.modalSubTitle}>
            Eu, hendrerit adipiscing pulvinar diam tincidunt ac amet eu. Nulla
            suspendisse dignissim
          </div>
          <div className={styles.sumbalance}>
            <div className="flex justify-between text-gray-400">
              <div>
                <div className="">
                  <span className="text-gray-100 mr-2">Sum</span>
                  <i className="fa fa-info-circle" aria-hidden="true"></i>
                </div>
              </div>
              <div>
                <span>Max limit: </span>
                <span>{100} SOL</span>
              </div>
            </div>
          </div>
          <button onClick={toggleModal} className={styles.depositBtn}>
            Deposit
          </button>
        </div>
      </Modal>
    </div>
  );
}
