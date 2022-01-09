//  /api/contact w url/endpoin API
function handler(req, res) {
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
        res.status(422).json({message: 'Invalid input.'})
        return;
    }

    // Stroe in a database
    const newMessage = {
        email,
        name,
        message
    }

    console.log(newMessage);
    res.status(201).json({message: 'Succesfuly stroed message!'})
  }
}

export default handler;
