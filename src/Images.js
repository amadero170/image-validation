import React from "react";

export default function Images(props) {
  return (
    <div>
      <div className="item-wrapper">
        <p>{props.name}</p>
        <p>{props.title}</p>
        <div className="img-wrapper">
          <img src={props.img_url} alt={props.name} />
        </div>
      </div>
    </div>
  );
}
