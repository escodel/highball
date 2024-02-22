export function Ball(props) {
  const { number, status, onClick } = props;

  return (
    <div
      className={`ball-${number} grow shrink-0 basis-1/3 text-center ${status} ${status === "pocketed" || status === "dead" ? "opacity-50" : ""} ${status === "neutral" ? "opacity-100" : ""} -rotate-45`}
      onClick={onClick}
    >
      {number}
      {status === "dead" && <span>X</span>}
    </div>
  );
}
