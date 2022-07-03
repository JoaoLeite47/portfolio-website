import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.css";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFzn5i9iTebgQ/company-logo_200_200/0/1578434154179?e=2159024400&v=beta&t=_fGf2ix4TGR_zHVSGGsMHsPThDbXWV0vfaLztL_e1jI"
            alt="algo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFzn5i9iTebgQ/company-logo_200_200/0/1578434154179?e=2159024400&v=beta&t=_fGf2ix4TGR_zHVSGGsMHsPThDbXWV0vfaLztL_e1jI"
            alt="algo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFzn5i9iTebgQ/company-logo_200_200/0/1578434154179?e=2159024400&v=beta&t=_fGf2ix4TGR_zHVSGGsMHsPThDbXWV0vfaLztL_e1jI"
            alt="algo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFzn5i9iTebgQ/company-logo_200_200/0/1578434154179?e=2159024400&v=beta&t=_fGf2ix4TGR_zHVSGGsMHsPThDbXWV0vfaLztL_e1jI"
            alt="algo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFzn5i9iTebgQ/company-logo_200_200/0/1578434154179?e=2159024400&v=beta&t=_fGf2ix4TGR_zHVSGGsMHsPThDbXWV0vfaLztL_e1jI"
            alt="algo"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQFzn5i9iTebgQ/company-logo_200_200/0/1578434154179?e=2159024400&v=beta&t=_fGf2ix4TGR_zHVSGGsMHsPThDbXWV0vfaLztL_e1jI"
            alt="algo"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
