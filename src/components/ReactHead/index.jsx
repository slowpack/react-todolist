import logo from "../../logo.svg";
import React, { useRef, useState, useEffect } from "react";
import "./index.less";
import { Button } from "antd";
export default function Header(props) {
  const [trigg, setTrigg] = useState(false);
  const imgRef = useRef(null);
  const headRef = useRef(null);
  useEffect(() => {
    if (!trigg) {
      return;
    }
    setTimeout(() => {
      headRef.current.className = "App-header fadeP downSea";
      const kill = document.getElementsByClassName("App-header")[0];
      console.log(kill);
      kill.remove();
    }, 2000);
    imgRef.current.className = " App-logo2";

    headRef.current.className = "App-header fadeP";

    return () => {};
  }, [trigg]);

  const gotodo = () => {
    setTrigg(true);
    //
  };
  return (
    <div className="App-header" ref={headRef}>
      <img src={logo} ref={imgRef} className="App-logo1" alt="logo" />

      <p>Welcome to React</p>
      <Button type="primary" onClick={gotodo} size="large">
        GO TODOLIST
      </Button>
    </div>
  );
}
