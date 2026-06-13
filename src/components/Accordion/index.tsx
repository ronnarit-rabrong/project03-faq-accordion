import "./style.scss";
import { useState, useEffect } from "react";
import type { AccordionProps } from "./type";

export default function Accordion({ questions, answer, elementIndex }: AccordionProps): React.ReactElement {
  const [isActive, setActive] = useState<boolean>(false);

  useEffect(() => {
    const showFirstAccordion = () => elementIndex === 0 ? setActive(true) : setActive(false);
    showFirstAccordion();
  }, [elementIndex]);

  return (
    <div className="accrdion">
      <div className="questions">
        <h2 className="questions__info">{questions}</h2>
        <button className="questions__button" type="button" onClick={() => setActive(!isActive)}>
          <img className={`questions__button__img ${isActive ? "" : "hide"}`} src="images/icon-minus.svg" alt="menus" />
          <img className={`questions__button__img ${isActive ? "hide" : ""}`} src="images/icon-plus.svg" alt="menus" />
        </button>
      </div>
      <div className={`answer ${isActive ? "" : "hide"}`}>
        <p className="answer__info">{answer}</p>
      </div>
    </div>
  )
}
