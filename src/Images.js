import React from "react";
import { useState } from "react";

export default function Images({ name, img_url, title, index, changeImage }) {
  const [status, setStatus] = useState("ok");

  function onclick() {
    status === "ok" ? setStatus("corregir") : setStatus("ok");
    changeImage(name);
  }
  return (
    <div>
      <div className="item-wrapper">
        <p>{index + 1}</p>
        <p>{name}</p>
        <p className={status !== "ok" ? "bg" : null}>{title}</p>
        <div className="img-wrapper">
          <img src={img_url} alt={name} />
        </div>
        <button onClick={onclick}>Verificar</button>
      </div>
    </div>
  );
}
