import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function ComparisonCard({ title, value1, value2 }) {
  const [hidden, setHidden] = useState(true);

  const hiddenStyle = () => {
    if (hidden) {
      return "hidden";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`rounded-lg p-2 shadow-lg flex-col justify-center items-center bg-gradient-to-br from-black/0 to-blue-500/10 box-border cursor-pointer`}
      onClick={() => setHidden(!hidden)}
    >
      <p className="">
        {!hidden && <AiFillCaretUp className="text-black/20" />} {title}{" "}
        {hidden && <AiFillCaretDown className="text-black/20" />}
      </p>
      <div className={`card-body text-center ${hiddenStyle()}`}>
        <div>{value1}</div>
        <p className="text-red-500 text-4xl font-permanentMarker">vs</p>
        <div>{value2}</div>
      </div>
    </div>
  );
}

export default ComparisonCard;
