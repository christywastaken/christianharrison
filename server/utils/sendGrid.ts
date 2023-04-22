import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (to: string | undefined, from: string, subject: string, text: string, html: string) => {
  const email = { to, from, subject, text, html };

  try {
    await sgMail.send(email);
    console.log("-- Email Sent --");
  } catch (err) {
    console.error("-- Error sending email: ", err, " --");
  }
};
