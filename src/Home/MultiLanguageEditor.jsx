import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";

// Import ACE modes, themes, and extensions
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

// Import ACE for custom completers
import ace from "ace-builds/src-noconflict/ace";

const MultiLanguageEditor = () => {
  const [language, setLanguage] = useState("snippets");
  console.log('mine',language);
  

  const snippets = {
    javascript: [
      {
        caption: "console.log",
        snippet: "console.log(${1:message});",
        meta: "snippet",
      },
      {
        caption: "function",
        snippet: "function ${1:name}(${2:params}) {\n\t${3:// body}\n}",
        meta: "snippet",
      },
    ],
    python: [
      { caption: "print", snippet: "print(${1:message})", meta: "snippet" },
      {
        caption: "def",
        snippet: "def ${1:name}(${2:params}):\n\t${3:# body}",
        meta: "snippet",
      },
    ],
    html: [
      {
        caption: "div",
        snippet: "<div>\n\t${1:content}\n</div>",
        meta: "snippet",
      },
      {
        caption: "a",
        snippet: '<a href="${1:#}">${2:link text}</a>',
        meta: "snippet",
      },
    ],
  };

  // Add custom completers
  const addCustomSnippets = (lang) => {
    const customCompleter = {
      getCompletions: (editor, session, pos, prefix, callback) => {
        const snippetList = snippets[lang] || [];
        callback(
          null,
          snippetList.map((s) => ({
            caption: s.caption,
            snippet: s.snippet,
            meta: s.meta,
          }))
        );
      },
    };

    ace.require("ace/ext/language_tools").addCompleter(customCompleter);
  };

  // Update completers whenever the language changes
  useEffect(() => {
    addCustomSnippets(language);
  }, [language]);

  return (
    <div>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: "10px" }}
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
      </select>

      <AceEditor
        mode={language}
        theme="monokai"
        name="code-editor"
        width="100%"
        height="400px"
        fontSize={14}
        enableBasicAutocompletion
        enableLiveAutocompletion
        enableSnippets
        editorProps={{ $blockScrolling: true }}
        
      />
    </div>
  );
};

export default MultiLanguageEditor;
