import { useEffect } from "react";
export default function Toast(props: any) {
  const toastDetails = {
    timer: 5000,
    success: {
      icon: "fa-circle-check",
      text: "Success: This is a success toast.",
    },
    error: {
      icon: "fa-circle-xmark",
      text: "Error: This is an error toast.",
    },
    warning: {
      icon: "fa-triangle-exclamation",
      text: "Warning: This is a warning toast.",
    },
    info: {
      icon: "fa-circle-info",
      text: "Info: This is an information toast.",
    },
  };

  const removeToast = (toast: any) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
  };

  useEffect(() => {
    //toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
  });
  return (
    <ul className="notifications">
      <li className="toast success">
        <div className="column">
          <i className="fa-solid fa-circle-check"></i>
          <span>{props.text}</span>
        </div>
        <i
          className="fa-solid fa-xmark"
          onClick={() => "removeToast(this.parentElement)"}
        ></i>
      </li>
    </ul>
  );
}
