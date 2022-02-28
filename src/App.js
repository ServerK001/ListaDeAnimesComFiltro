import "./styles.css";
import SeachInput from "./busca";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const api = "https://kitsu.io/api/edge/";

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h3>Olá</h3>

      <strong>{text}</strong>

      <SeachInput
        value={text}
        onChange={(search) => {
          setText(search);
        }}
      />
    </div>
  );
}
