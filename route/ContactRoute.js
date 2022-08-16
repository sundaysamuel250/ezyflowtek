const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.number.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
		user: "orinamesunday360@gmail.com",
		pass: "jhwgoeovlwjbcgmi"
    },
  });
  let mailOptions = {
    from: data.email,
    to: "orinamesunday360@gmail.com",
    subject: `message from ${data.name}`,
    html: `
		<h3>information</h3>
		<ul>
		<li>Name: ${data.name}</li>
		<li>Email: ${data.email}</li>
    <li>Contact: ${data.number}</li>
		</ul>
		<h3>Message</h3>
		<p>${(data.message)}</p>
		`,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting EzyFlowTech." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});

module.exports = router;
