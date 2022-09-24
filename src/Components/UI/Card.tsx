import React from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import style from "./Card.module.css";

const Card = (props: any) => {
  useEffect(() => {
    console.log("ddddddddddd111111");
  });
  console.log("dddddd");
  useLayoutEffect(() => {
    console.log("sssssssssssss");
  });
  useEffect(() => {
    console.log("dd222222222ddd");
  });
  return (
    <div className={`${props.className} ${style.card}`}>{props.children}</div>
  );
};

export default Card;
