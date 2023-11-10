import React from "react";
import styles from "./Modal.module.sass";
import { motion, AnimatePresence } from "framer-motion";

type ModalType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
} & React.PropsWithChildren;

export const Modal = ({ children, showModal, setShowModal }: ModalType) => {
  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: {
      translateY: 100,
      opacity: 0,
    },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    },
  };

  React.useEffect(() => {
    if (showModal) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [showModal]);

  return (
    <AnimatePresence>
      {showModal ? (
        <motion.div
          className={styles.container}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
          exit="hidden"
        >
          <motion.div className={styles.content} variants={modal}>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
