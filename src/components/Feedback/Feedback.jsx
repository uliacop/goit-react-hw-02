import css from "./Feedback.module.css";
export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.list}>
      <li className={css.unit}>Good:{good}</li>
      <li className={css.unit}>Neutral:{neutral}</li>
      <li className={css.unit}>Bad:{bad}</li>
      <li className={css.unit}>Total:{total}</li>
      <li className={css.unit}> Positive:{positive}%</li>
    </ul>
  );
}
