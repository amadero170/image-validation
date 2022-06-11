import React from "react";
import { useState } from "react";

export default function Images(props) {
  const [status, setStatus] = useState("ok");

  function onclick() {
    status === "ok" ? setStatus("corregir") : setStatus("ok");
    props.childToParent(props.name);
  }
  return (
    <div>
      <div className="item-wrapper">
        <p>{props.index + 1}</p>
        <p>{props.name}</p>
        <p className={status !== "ok" ? "bg" : null}>{props.title}</p>
        <div className="img-wrapper">
          <img src={props.img_url} alt={props.name} />
        </div>
        <button onClick={() => onclick()}>Verificar</button>
      </div>
    </div>
  );
}
