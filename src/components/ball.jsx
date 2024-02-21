import { useEffect, useState } from "preact/hooks";

export function Ball(props) {
  const { number, status, onClick } = props;

  return (
    <div
      className={`ball-${number} grow shrink-0 basis-1/3 text-center ${status} ${status === "active" ? "bold ring" : ""} ${status === "pocketed" || status === "dead" ? "pointer-events-none opacity-75" : ""} -rotate-45`}
      onClick={onClick}
      disabled={status === "pocketed" || status === "dead"}
    >
      {number}
    </div>
  );
}
