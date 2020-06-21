import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter Engilsh" onChange={setText} value={text} />
      <Languages language={language} onChangeLanguage={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
