import React from "react";
import "./Testimonials.css";
import { IoBookmarks } from "react-icons/io5";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Ailton Rafael",
      title: "FullStack Developer and Tech Teacher",
      img: "assets/ailton.jpg",
      icon: "assets/linkedin.png",
      desc: "Parabéns, João! Sucesso em vista!",
      inst: "https://www.linkedin.com/in/ailton-rafael-9aa802186/",
    },
    {
      id: 2,
      name: "Adriano Araújo",
      title: "Especialista Programador II na Qintess",
      img: "assets/adriano.jpg",
      icon: "assets/linkedin.png",
      desc: "Parabéns João! Acredito muito no seu potencial e sei que vais voar alto moleque! Show de bola esse portfólio!!! ",
      featured: true,
      inst: "https://www.linkedin.com/in/adriano-araújo-223a39190/",
    },
    {
      id: 3,
      name: "Blue Edtech",
      title: "Instituição",
      img: "assets/blue.jpg",
      icon: "assets/linkedin.png",
      desc: "Parabéns João Victor Leite Souza 🚀",
      inst: "https://www.linkedin.com/school/blue-edtech/",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((item) => (
          <div className={item.featured ? "card featured" : "card"}>
            <div className="top">
              <IoBookmarks className="left" />
              <img src={item.img} className="user" alt="foto" />
              <a href={item.inst}>
                <img src={item.icon} className="right" alt="" />
              </a>
            </div>
            <div className="center">{item.desc}</div>
            <div className="bottom">
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
