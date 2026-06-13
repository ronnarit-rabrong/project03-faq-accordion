import "./style.scss"
import Accordion from "../Accordion"
import type { FAQProps } from "./type"

export default function Faq({ questionData }: FAQProps): React.ReactElement {
  return (
    <section className="faq">
      <section className="head">
        <img className="head__star" src="images/icon-star.svg"/>
        <h1 className="head__title">FAQs</h1>
      </section>
      <article className="body">
        {questionData.map((question, index) => (
          <Accordion key={question.id} questions={question.question} answer={question.answer} elementIndex={index} />
        ))}
      </article>
    </section>
  )
}
