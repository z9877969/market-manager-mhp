import { createPortal } from "react-dom";

const container = document.getElementById("modal");

const Modal = () => {
  console.log("container :>> ", container);
  return createPortal(<h1>Maodal</h1>, container);
};

export default Modal;
