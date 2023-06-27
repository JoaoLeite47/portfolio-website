import React from "react";
import "./Testimonials.css";
import { IoBookmarks } from "react-icons/io5";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Blue Edtech",
      title: "Desenvolvimento web - Full Stack",
      img: "assets/blue.jpg",
      icon: "assets/linkedin.png",
      desc: "Desenvolvimento com TypeScript, Javascript, React, EJS, Html, Css, Sass, Node, Nest, MongoDB e mySQL",
      inst: "https://www.linkedin.com/school/blue-edtech/",
    },
    {
      id: 2,
      name: "Advocacia Geral da União",
      title: "Analista júnior de sistemas",
      img: "assets/agu.png",
      icon: "assets/linkedin.png",
      desc: "Responsável pelo desenvolvimento de interfaces em Reactjs com base em protótipos criados em figma/adobe XD. Desenvolvimento de interfaces utilizando conceitos de UX e prototipação documentada.   Auxilio e manutenção de interfaces em código legado. Construção de features em Flask usando Web Scraping com Selenium e a API do google.  Análise e criação de BPM para documentação de projetos",
      featured: true,
      inst: "https://www.linkedin.com/company/agu-governo-federal/mycompany/",
    },
    {
      id: 3,
      name: "SAGA",
      title: "Design Gráfico",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/536d2d80642499.5ce6d2d1e5e44.jpg",
      icon: "assets/linkedin.png",
      desc: "Criação de design pattern, Design System, manual de marca, edição de vídeo e métodos de design. Adobe Premiere, After Effects, Illustrator, Photoshop, Indesign e XD",
      inst: "https://www.linkedin.com/company/escolasaga/?originalSubdomain=br",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Experiências</h1>
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
