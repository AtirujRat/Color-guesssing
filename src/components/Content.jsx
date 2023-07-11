import React from "react";
import classes from "./Content.module.css";
const Content = (props) => {
  return (
    <main className={classes.container}>
      <header>
        {props.restart ? (
          <div className={classes.restart}>
            <h1>Congratulations!!</h1>
            <button onClick={props.restartHandler}>Restart</button>
          </div>
        ) : (
          <h1 className={classes.color}>
            #{props.colorBox[props.randomNum].randomColor}
          </h1>
        )}
      </header>
      <div className={classes.content}>
        {props.colorBox.map((data, index) => {
          return (
            <div
              onClick={() => props.chosingColor(data.randomColor, data.id)}
              style={{
                background: `#${data.randomColor}`,
                opacity: `${data.isAnswer === true ? 0 : 1}`,
                pointerEvents: `${data.isAnswer === true ? "none" : ""}`,
              }}
              className={classes.box}
              key={index}
            ></div>
          );
        })}
      </div>
    </main>
  );
};

export default Content;
