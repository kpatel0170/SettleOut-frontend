import { Store } from "react-notifications-component";

const config = {
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  isMobile: true,

  dismiss: {
    duration: 2000,
    showIcon: true

    //   onScreen: true,
  }
};
const addToast = (title, message) => {
  Store.addNotification({
    title,
    message,
    ...config,
    type: title || "info"
  });
};

const Toast = {
  error: (data) => {
    addToast("Danger", data);
  },

  success: (data) => addToast("Success", data),
  info: (data) => addToast("Info", data),
  default: (data) => addToast("Default", data),
  warn: (data) => addToast("Warning", data)
};

export default Toast;
