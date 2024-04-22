import { useState } from "react";

const StringArea = ({ text }) => {
  const [expand, setExpand] = useState(false);

  let shortText = text;

  if (!expand && text.length > 300) {
    shortText = text.slice(0, 300) + ". . . daha fazla";
  }

  return <div onClick={() => setExpand(!expand)}>{shortText} </div>;
};

export default StringArea;
