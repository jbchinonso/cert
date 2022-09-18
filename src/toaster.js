import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toaster = (type, message, close) => {
  toast[type](message, {
    position: "top-right",
    autoClose: close,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toaster;