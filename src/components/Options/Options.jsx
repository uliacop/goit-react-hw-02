import "./Options.module.css";
export default function Options({ onUpdate, reset, total }) {
  return (
    <>
      <button onClick={() => onUpdate("good")}>Good</button>
      <button onClick={() => onUpdate("neutral")}>Neutral</button>
      <button onClick={() => onUpdate("bad")}>Bad</button>
      {total > 0 && (
        <button onClick={reset} type="button">
          Reset
        </button>
      )}
    </>
  );
}
