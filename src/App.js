import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";

const BOX = [
  {
    id: "b1",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b2",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b3",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b4",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b5",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b6",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b7",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b8",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
  {
    id: "b9",
    isAnswer: false,
    randomColor: Math.floor(Math.random() * 16777215).toString(16),
  },
];

function App() {
  const [colorBox, setcolorBox] = useState(BOX);
  const [randomNum, setRandomNum] = useState(0);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 9));
  }, []);

  function chosingColor(color, id) {
    if (restart === true) {
      return;
    }

    if (color === colorBox[randomNum].randomColor) {
      setcolorBox(
        colorBox.map((data) =>
          data.randomColor !== color ? { ...data, isAnswer: true } : { ...data }
        )
      );
      setRestart(true);
    } else {
      setcolorBox(
        colorBox.map((data) =>
          data.id === id ? { ...data, isAnswer: true } : { ...data }
        )
      );
    }
  }

  function restartHandler() {
    setRestart(false);
    setcolorBox(
      BOX.map((data) => {
        return {
          ...data,
          randomColor: Math.floor(Math.random() * 16777215).toString(16),
        };
      })
    );

    setRandomNum(Math.floor(Math.random() * 9));
  }

  return (
    <div className="App">
      <h1 className="name">Color guessing game</h1>
      <Content
        restartHandler={restartHandler}
        restart={restart}
        randomNum={randomNum}
        chosingColor={chosingColor}
        colorBox={colorBox}
      />
    </div>
  );
}

export default App;
