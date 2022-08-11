import React, { useEffect, useMemo, useState, useRef } from "react";
import { BookTwoTone } from "@ant-design/icons";
import "./index.less";
import { Input } from "antd";
import List from "../List";
export default function Todolist() {
  const [count, setCount] = useState(2);
  const [value, setValue] = useState("");
  const [now, setNow] = useState(0);
  const [btnList, setBtnList] = useState([
    { name: "全部", active: true },
    { name: "待完成", active: false },
    { name: "已完成", active: false },
  ]);
  const [jobs, setJobs] = useState([
    { id: 0, content: "写代码", state: false },
    { id: 1, content: "调bug", state: false },
  ]);
  // const [list, setList] = useState([...jobs]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const push = () => {
    const iptValue = value.trim();
    if (iptValue) {
      setJobs([
        ...jobs,
        {
          id: count,
          content: iptValue,
          state: false,
        },
      ]);
      setCount(count + 1);
      setValue("");
    }
  };

  const list = useMemo(() => {
    console.log("改变了");
    console.log(now);
    switch (now) {
      case 0:
        return [...jobs];
      case 1:
        return jobs.filter((i) => i.state === false);
      case 2:
        return jobs.filter((i) => i.state === true);
    }
  }, [jobs, now]);
  const check = (id) => {
    const target = jobs.find((item) => item.id === id);
    target.state = !target.state;
    setJobs([...jobs]);
  };
  const del = (id) => {
    const newJobs = jobs.filter((item) => item.id != id);

    setJobs(newJobs);
  };
  const killAll = () => {
    setJobs(() => {
      return jobs.filter((item) => item.state === false);
    });
  };
  const swiBtn = (index) => {
    setNow(index);
    btnList.forEach((item) => (item.active = false));
    btnList[index].active = true;
    setBtnList([...btnList]);
    console.log(now);
  };
  return (
    <div className="todoapp">
      <Input
        className="new-todo"
        value={value}
        onChange={handleChange}
        size="large"
        onPressEnter={push}
        placeholder="输入一个小目标"
        prefix={<BookTwoTone />}
      />
      {list.map((item) => {
        return (
          <List
            className={item.state ? "completed todo" : "todo"}
            key={item.id}
            check={check}
            del={del}
            job={item}
          ></List>
        );
      })}
      <div className="todo-info">
        <span className="total">{jobs.length}项待办</span>
        <div className="tabs">
          {btnList.map((item, index) => {
            return (
              <button
                className={item.active ? "active" : ""}
                key={index}
                onClick={() => {
                  swiBtn(index);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <button className="btn-info" onClick={killAll}>
          清空
        </button>
      </div>
    </div>
  );
}
