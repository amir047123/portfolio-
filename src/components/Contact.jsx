import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "amirfaysal0471@gmail.com" },
    { logo: "logo-whatsapp", text: "+8801875-071998" },
    {
      logo: "location",
      text: "Boikali,Khulna",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m9zsq3f",
        "template_k6s54as",
        e.target,
        "azgz2Tu2QvnIFBABJgQlW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Message failed to send.");
        }
      );

    // Clear form inputs after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form
            className="flex flex-col flex-1 gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            ></textarea>
            <button className="btn-primary w-fit" type="submit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
