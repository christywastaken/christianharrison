export default async (message: any) => {
  const body = await readBody(message);
  const to = String(process.env.RECEIVE_EMAIL);
  const from = "team@sendjoy.app";
  const subject = "Contact from ChristianHarrison.co.uk";
  const text = "test_text";
  const html = `<strong>From:</strong> ${body.name}<br><strong>Email:</strong> ${body.email}<br><br><strong>Message:</strong><br>${body.message}`;

  await sendGrid(to, from, subject, text, html);
  console.log(`-- from: ${body.email}, to: ${to} --`);
};
