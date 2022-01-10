import ReactDOM from "react-dom";

import classes from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  // tworzenie React Portal, pierwszy argument to JSX, drugi element HTMl div z id z pliku _document.js - WAZNE ten div musi być w tamtym pliku!
  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>, //przecinek
    document.getElementById("notifications")
  );
}

export default Notification;
