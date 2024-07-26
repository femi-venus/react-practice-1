import React, { useState } from "react";
import "./dropdown.css";

interface Props {
  options: string[];
}
function Dropdown(props: Props) {
  const { options } = props;
  const [open, setOpen] = useState(true);
  const [selectItem, setSelectItem] = useState("Select");

  return (
    <div>
      <h1>DropDown</h1>
      <div className="dd">
        <div
          className="dd--header"
          onClick={() => setOpen(open ? false : true)}
        >
          {selectItem}
        </div>
        {!open && (
          <div className="dd--body">
            {options.map((option, index) => (
              <div
                className="dd--item"
                onClick={() => {
                  setSelectItem(option);
                  setOpen(true);
                }}
                key={index}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
