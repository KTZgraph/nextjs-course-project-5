import { useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

//można dodać funckje do osobnego pliku
async function sendContactData(contactDetails) {
  await fetch("/api/contact", {
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

function ContactForm() {
  // można useRef do danych z inputa a można i state jak tutaj, alternatywnie jeden state który jest obiektem i który ma trzy pola
  // two way binding
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  //state do notyfikacji
  const [requestStatus, setRequestStatus] = useState(""); //'pendind', 'success' 'error'

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
      setRequestStatus("pendind");
    } catch (error) {
      setRequestStatus("error");
    }
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
    </section>
  );
}

export default ContactForm;
