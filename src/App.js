import "./styles.css";
import SeachInput from "./busca";
import { useEffect, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState({});
  const api = "https://kitsu.io/api/edge/";

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h3>Olá</h3>

      <SeachInput
        value={text}
        onChange={(search) => {
          setText(search);
        }}
      />
      {text && !info.data && <span>Carregando...</span>}

      {info.data && (
        <ul className="">
          {info.data.map((anime) => (
            <>
              <li key={anime.id}>
                <img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
              </li>
              <strong>{anime.attributes.canonicalTitle}</strong>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
