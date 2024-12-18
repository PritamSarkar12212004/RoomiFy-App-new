import twilio from "twilio";

const OtpAuthController = (req, res) => {
  // Initialize Twilio client
  const client = twilio(process.env.accountSid, process.env.authToken);

  client.messages
    .create({
      body: req.body.otp,
      from: "+14439032521",
      to: "+917796419792",
    })
    .then((message) => {
      console.log(message.sid);
      res.status(200).send("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      res.status(500).send("Failed to send message");
    });
};

export default OtpAuthController;
