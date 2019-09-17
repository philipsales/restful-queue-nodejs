const { orderRejected, orderNotDelivered } = require("../email-template");

const email = messages => {
  const emails = [];

  messages.forEach(item => {
    const email = {
      to: `${item.recipient}`,
      from: "janagaprobert@gmail.com",
      subject: `${item.messageCode}`,
      text: `${item.messageContent}`,
      html: ""
    };

    // order rejected
    if (item.messageCode === "dispergo_rejected") {
      email.html = orderRejected(
        item.recipient,
        item.messageContent,
        item.recipientName
      );

      emails.push(email);
    }

    // order not delivered
    if (item.messageCode === "dispergo_not_delivered") {
      email.html = orderNotDelivered(
        item.recipient,
        item.messageContent,
        item.recipientName
      );

      emails.push(email);
    }
  });

  return emails;
};

module.exports = email;
