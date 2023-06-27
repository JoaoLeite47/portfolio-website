import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { useEffect, useState } from "react";
import { webPortfolio, ApisPortfolio, featuredPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
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
      id: "APIs",
      title: "APIs",
    },
  ]; // list of categories for the portfolio page

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "APIs":
        setData(ApisPortfolio);
        break;
      // in the future, more cases going to be added
      default:
        setData(featuredPortfolio);
    }
  }, [selected]); // definy in which stage are the hook how define which of these works show on screen
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
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="algo" />
            <h3>
              <a
                className="d-link"
                target="_blank"
                rel="noreferrer"
                href={d.link}
              >
                {d.title}
              </a>{" "}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
