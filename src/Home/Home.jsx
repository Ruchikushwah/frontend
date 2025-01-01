import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";

const Home = () => {
  const [code, setCode] = useState("");
  const [theme, setTheme] = useState("monokai");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (newValue) => {
    setCode(newValue);
  };

  const runCode = async () => {
    try {
      // Send the code and language to the backend API
      const response = await fetch("http://127.0.0.1:8000/api/v2/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          language: language,
        }),
      });

      const result = await response.json();
      setOutput(result.output || "No output from the code.");
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="p-20 flex w-full flex-col">
      <h2 className=" text-2xl">React Ace Editor</h2>
      <div className="mb-10 text-center flex ">
        <label>
          Select Theme
          <select
            className="p-2 border border-gray-500 ml-2"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="monokai">Monokai</option>
            <option value="github">Github</option>
            <option value="solarized_dark">Solarized Dark</option>
          </select>
        </label>
        <label>
          Select Language
          <select
            className="p-2 border border-gray-500 ml-2"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">Javascript</option>
            <option value="html">HTML</option>
            <option value="php">PHP</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="python">Python</option>
          </select>
        </label>

        <button
          className="p-2 bg-blue-500 text-white rounded mb-2 self-center mt-2"
          onClick={runCode}
        >
          Run Code
        </button>
      </div>
      <div className="flex flex-1">
        <AceEditor
          mode={language}
          theme={theme}
          onChange={handleChange}
          width="50%"
          height="500px"
          fontSize={20}
          value={code}
          setOptions={{
            showLineNumbers: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2,
          }}
        />

        <div className="mt-5 flex flex-1 flex-col">
          <h3>Output:</h3>
          <pre className="bg-gray-100 p-5">{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default Home;
