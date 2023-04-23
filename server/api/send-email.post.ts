export default defineEventHandler(async (request: any) => {
  const body = await readBody(request);
  const to = process.env.RECEIVE_EMAIL;
  const from = "team@sendjoy.app";
  const subject = "Contact from ChristianHarrison.co.uk";
  const text = "test_text";
  const html = `<strong>From:</strong> ${body.name}<br><strong>Email:</strong> ${body.email}<br><br><strong>Message:</strong><br>${body.message}`;

  try {
    await sendGrid(to, from, subject, text, html);
    console.log("-- sendGrid ran successfully --");
    return "OK";
  } catch (err) {
    console.log("Error: ", err);
    return err;
  }
});
