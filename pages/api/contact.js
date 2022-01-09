//  /api/contact w url/endpoin API
//fetcha nie ma, bo nie pokazuje sie emaili ludzi z newslettera

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    //reszte metod ignoruję
    const { email, name, message } = req.body; // next.js od razu parsuje ładnie dane

    //alidacja na backendzie - NIE ufać walidacji na froncie
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // Stroe in a database
    const newMessage = {
      email,
      name,
      message,
    };

    // połaczenie z bazą powa lidacji danych
    let client;
    try {
      client = await MongoClient.connect(
        "string do bazy"
      );
    } catch (error) {
      resizeTo.status(500).json({ message: "Could not connect to database!" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      //dodanie dodatkowego pola id albo _id
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storign message failed!" });
      resturn;
    }
    // zamknać połączenie z baza w przypadku sukcesu też
    client.close();

    console.log(newMessage);
    res.status(201).json({ message: "Succesfuly stroed message!" , message: newMessage});
  }
}

export default handler;
