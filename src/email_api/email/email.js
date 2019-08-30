const express = require("express");
const router = express.Router();
const sendGridMail = require("@sendgrid/mail");
const templateProvider = require("../util/template-provider");

const log = require("../lib/logger/logger");
const logger = log.logger.child({
  sourceFile: log.file.setFilename(__filename)
});

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
  const messages = req.body;
  try {
    let emails = await templateProvider(messages);
    if (emails.length !== -1) {
      emails.forEach(async (email, index, arr) => {
        await sendGridMail.send(email);

        if (index === arr.length - 1)
          res
            .status(201)
            .json({ success: true, message: "Successfully sent email" });
      });
    }
  } catch (err) {
    logger.error(err);
    res.json({ success: false, error: err });
  }
});

module.exports = router;
