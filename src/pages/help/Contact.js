import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Your Email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    msg: data.get("message"),
  };

  console.log(submission);

  //* (actually) send post request

  if (submission.msg.length < 10) {
    return { error: "Message must be 10 chars long" };
  }
  return redirect("/");
};
