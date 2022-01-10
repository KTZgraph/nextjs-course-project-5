import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

//można dodać funckje do osobnego pliku
async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Somethin went wrong!");
  }
}

// komponent tez możnaby rozbić na mniejsze
function ContactForm() {
  // można useRef do danych z inputa a można i state jak tutaj, alternatywnie jeden state który jest obiektem i który ma trzy pola
  // two way binding
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestError, setRequestError] = useState(); // potrzebuje message z errora w if (requestStatus === "error") dlatego potrzebny kolejny stan

  //state do notyfikacji
  const [requestStatus, setRequestStatus] = useState(""); //'pendind', 'success' 'error'

  //żeby zamknać notyfikacje
  useEffect(() => {
    // funckja się wykona za każdym razem gdy requestStatus się zmieni i TYLKO WTEDY
    if (requestStatus === "success" || requestStatus === "error") {
      //jak jest status 'pendind' to nic nie robię
      const timer = setTimeout(() => {
        setRequestStatus(null); //resetowanie timera
        setRequestError(null); //resetowanie wiadomosci z komunikatem błedu
      }, 3000);

      //clienup function - czystczę timer dlatego zapisuję jego referencje w const timer, żeby wyczyszczyć timer jeśli istneije jakiś działajacy
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    //asynchroniczna
    //async - await mozna użyć
    event.preventDefault();

    //add client-side validation żeby user miał ładną zwrotnkę jak coś źle zrobi

    //status przed wysłaniem danych
    setRequestStatus("pendind");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      //status po wysłaniu danych jeśli wszystko jest ok
      setRequestStatus("success");
      //czyszczenie inputów
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message); // potrzebuje message z errora w if (requestStatus === "error") dlatego potrzebny kolejny stan
      setRequestStatus("error");
    }
  }

  let notification; // domyslnie undefined
  if (requestStatus === "pendind") {
    notification = {
      status: "pendind",
      title: "Sending message",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message send successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            row="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {/* status notyfikacja */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
