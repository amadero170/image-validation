import React from "react";
import { useState } from "react";

export default function Images(props) {
  const [status, setStatus] = useState("ok");
  return (
    <div>
      <div className="item-wrapper">
        <p>{props.index + 1}</p>
        <p>{props.name}</p>
        <p className={status !== "ok" ? "bg" : null}>{props.title}</p>
        <div className="img-wrapper">
          <img src={props.img_url} alt={props.name} />
        </div>
        <button
          onClick={() =>
            status === "ok" ? setStatus("corregir") : setStatus("ok")
          }
        >
          Verificar
        </button>
      </div>
    </div>
  );
}
