import css from "./Options.module.css";
export default function Options({ onUpdate, reset, total }) {
  return (
    <>
      <button className={css.option} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.option} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.option} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.option} onClick={reset} type="button">
          Reset
        </button>
      )}
    </>
  );
}
