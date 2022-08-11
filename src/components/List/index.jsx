import React, { Fragment, useEffect, useState } from "react";
import { Button } from "antd";

import "./index.less";
export default function List(props) {
  const { id, content, state } = props.job;

  return (
    <div className={state ? "view finish" : "view "}>
      <input
        className="toggle"
        type="checkbox"
        checked={state}
        onChange={() => {
          props.check(id, content);
        }}
      />
      <label>{content}</label>
      <Button
        type="primary"
        className="delBtn"
        size="small"
        danger
        onClick={() => {
          props.del(id);
        }}
      >
        删除
      </Button>
    </div>
  );
}
