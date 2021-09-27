import React, { useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  tomorrow,
  a11yLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ThemeContext } from "../../context/ThemeContext";

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  const { theme } = useContext(ThemeContext);

  return !inline && match ? (
    <SyntaxHighlighter
      style={theme === "dark" ? tomorrow : a11yLight}
      language={match[1]}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      customStyle={{
        background: `${theme === "dark" ? "#111111" : "#fafafa"}`,
      }}
    />
  ) : (
    <code className={className}>{children}</code>
  );
};

export default CodeBlock;
