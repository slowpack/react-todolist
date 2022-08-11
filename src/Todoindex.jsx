import React, { Fragment, useEffect, useState } from "react";
import "./Todoindex.less";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
export default function Todoindex() {
  return (
    <div className="backG">
      <div className="fant">
        <Header></Header>
        <Todolist></Todolist>
        <Footer></Footer>
      </div>
    </div>
  );
}
