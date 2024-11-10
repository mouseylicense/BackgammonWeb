// src/App.js
import React, { useEffect, useState } from "react";
import Checker from './components/Checker.js'
import Point from "./components/Point";
import Board from "./components/Board";
function App() {
  const [messages, setMessages] = useState([]);
  let socket;

  useEffect(() => {
    socket = new WebSocket("ws://127.0.0.1:8000/ws/test/");

    socket.onopen = () => {
      console.log("WebSocket connection established");
      socket.send(JSON.stringify({ message: "Hello from frontend!" }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data.message]);
    };

    socket.onclose = () => console.log("WebSocket connection closed");

    return () => socket.close();
  }, []);

  return (
    <div>
      <h1>Backgammon</h1>
      {/*<Point color="red" checkers={[{'color':'red'},{'color':'red'},{'color':'red'},{'color':'red'}]} isReversed={true} />*/}
      <Board />
    </div>
  );
}

export default App;
