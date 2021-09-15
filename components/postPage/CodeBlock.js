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
        background: `${theme === "dark" ? "#172135" : "#1f2c47"}`,
        border: "1px solid",
        borderColor: `${theme === "dark" ? "#2f436a" : "#364c7c"}`,
      }}
    />
  ) : (
    <code className={className}>{children}</code>
  );
};

export default CodeBlock;
