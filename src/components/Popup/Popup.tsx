import React from "react";
import styles from "./Popup.module.sass";
import { AnimatePresence, motion } from "framer-motion";

interface PopupInterface extends React.PropsWithChildren {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup = ({ children, show, setShow }: PopupInterface) => {
  const popup = {
    hidden: { opacity: 0, translateY: 10 },
    visible: { opacity: 1, translateY: 0 },
  };

  const popupRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function closePopup(event: MouseEvent) {
      const { target } = event;
      if (
        !(
          popupRef.current?.contains(target as Node) ||
          popupRef.current === target
        )
      ) {
        setShow(false);
      }
    }

    // setTimeout prevents the popup to close at the first click
    if (show) setTimeout(() => window.addEventListener("click", closePopup));
    else window.removeEventListener("click", closePopup);

    return () => {
      window.removeEventListener("click", closePopup);
    };
  }, [show, setShow]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShow(false)}>
      {show ? (
        <motion.div
          className={styles.popup}
          variants={popup}
          initial="hidden"
          animate="visible"
          ref={popupRef}
          exit="hidden"
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Popup;
