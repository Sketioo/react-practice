import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpendableText = ({ maxChars = 100, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button type="submit" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpendableText;
