import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeContext } from "../../context/ThemeContext";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const { theme } = useContext(ThemeContext);

  return !inline && match ? (
    <SyntaxHighlighter
      style={tomorrow}
      language={match[1]}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      customStyle={{
        background: `${theme === "dark" ? "#0a0e14" : "#2b2d42"}`,
      }}
    />
  ) : (
    <code className={className}>{children}</code>
  );
};

export default CodeBlock;
