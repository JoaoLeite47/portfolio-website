import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./Work.css";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0); // USE STATE TO HANDLE SLIDER

  const data = [
    {
      id: "1",
      icon: "./assets/nest.svg",
      title: "API Pizza Fresh",
      desc: "API Restful para um ecommerce de pizza! Uma experiência nova ultilizando o Nest.JS! Uma tecnologia fantástica que realmente me abriu muitos horizontes na construção de aplicações web.",
      img: "https://user-images.githubusercontent.com/100146681/177185523-f5219eda-7e0b-45e4-8092-885bdcb7bb60.png",
      projects: "https://github.com/JoaoLeite47/pizza_fresh_server",
    },
    {
      id: "2",
      icon: "./assets/react.png",
      title: "El Geladon",
      desc: "Construido em React Js, El Geladon é um ecommerce de paleteria mexicana! Um projeto que me permitiu aprender a utilizar o React.JS e a construir um ecommerce como um projeto de conclusão de curso.",
      img: "https://user-images.githubusercontent.com/100146681/177061189-c7d16ab1-e3fa-411d-87b3-48d41b649bcf.png",
      projects: "https://github.com/JoaoLeite47/cardapio-el-geladon-client",
    },
    {
      id: "3",
      icon: "./assets/api.png",
      title: "API El Geladon",
      desc: "Um projeto delicioso!! Construido em Node.js com Express, Acabou se tornando uma experiência muito divertida em sua produção, e claro...com banco de dados online!",
      img: "https://user-images.githubusercontent.com/100146681/177061161-ce1b693b-f812-4359-a1d4-428ed3cfb000.png",
      projects: "https://github.com/JoaoLeite47/elgeladon-server-react-mongoDB",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }; // if the "left" param for bigger then 0, the function handleClick will be activeted and will move the slider to the left, if not, it will move to the right

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a href={d.projects}>Show me the code!</a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        <FiArrowRight
          size="7em"
          onClick={() => handleClick("left")}
          className="arrow left"
        />
      }
      <FiArrowRight
        size="7em"
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
