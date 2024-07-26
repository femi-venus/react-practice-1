import React, { useState } from "react";
import "./checklist.css";
import _ from "lodash";

interface Props {
  items: { id: number; label: string; value: string }[];
}

function Checklist(props: Props) {
  const { items } = props;
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const handleChange = (item: string) => {
    setSelectedItem((prev) => {
      if (prev.includes(item)) {
        return prev.filter((i) => i !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const selectedOptions = _.join(selectedItem, ", ");

  const filteredItems = _.filter(items, (item) =>
    _.includes(_.toLower(item.value), _.toLower(search))
  );

  const selectAll = () => {
    if (_.size(selectedItem) > 0) {
      setSelectedItem([]);
    } else {
      setSelectedItem(_.map(items, (item) => item.label));
    }
  };

  return (
    <div className="cl--main">
      <h1 className="cl">Checklist</h1>

      <div className="cl-header">
        <input
          className="cl--display"
          type="text"
          value={selectedOptions}
          onClick={() => setOpen(!open)}
        />
      </div>

      {open && (
        <div className="cl--items">
          <input
            type="search"
            className="cl--search"
            defaultValue="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={_.size(selectedItem) === _.size(items)}
              onChange={selectAll}
            />
            Select All
          </label>
          <br />
          {filteredItems.map((item) => (
            <>
              <label
                onChange={() => handleChange(item.label)}
                className="cl--item"
              >
                <input
                  className="checkbox"
                  checked={selectedItem.includes(item.label)}
                  type="checkbox"
                />
                {item.label}
              </label>
              <br />
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checklist;
