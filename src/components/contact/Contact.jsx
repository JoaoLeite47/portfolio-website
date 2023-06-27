// import { useState } from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  // const [message, setMessage] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  // }; // function and hook for submit the mensage to my email inbox

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/foto2.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <div className="contacts">
          <a
            href="https://github.com/JoaoLeite47"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size="5em" color="blue" />
          </a>
          <a
            href="https://www.linkedin.com/in/joaoleitesouza/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size="5em" color="blue" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5571986149734&text=Olá%20João!!%20Estou%20aqui%20pelo%20link%20em%20seu%20site!"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size="5em" color="blue" />
          </a>
          <h3>Thanks! I'll reply soon! :D</h3>
        </div>

        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span> Thanks! I'll reply soon! :D</span>}
        </form> */}
      </div>
    </div>
  );
}
