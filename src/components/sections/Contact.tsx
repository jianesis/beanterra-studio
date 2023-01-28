"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <section id="contact">
      <h3 className="mb-3">Get in touch</h3>
      <p className="text-gray-400 mb-16 text-2xl">
        We will get back to you shortly. * indicates necessary fields.
      </p>
      <form className="flex flex-col w-full md:w-1/2" onSubmit={handleSubmit}>
        <label className={styles.styledLabel} htmlFor="name">
          FULL NAME <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.styledInput}
          type="text"
          name="name"
          id="name"
          placeholder="First and Last Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label className={styles.styledLabel} htmlFor="name">
          EMAIL <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.styledInput}
          type="text"
          name="email"
          id="email"
          placeholder="example@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className={styles.styledLabel} htmlFor="name">
          MESSAGE <span className={styles.required}>*</span>
        </label>
        <textarea
          className={styles.styledInput}
          // type="textarea"
          name="message"
          id="message"
          placeholder="Tell us about your project and its budget"
          rows={3}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className={`rounded-lg ${styles.styledButton}`} type="submit">
          Send us a message
        </button>
      </form>
    </section>
  );
}
