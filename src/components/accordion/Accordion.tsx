import React, { useEffect, useState } from "react";
import "./accordion.css";

interface Props {
  data: {
    title: string;
    content: string;
  };
}

function Accordion(props: Props) {
  const { data } = props;
  const [open, setOpen] = useState(true);

  return (
    <>
      <div onClick={() => setOpen(open ? false : true)}>{data.title}</div>
      {!open && <div>{data.content}</div>}
    </>
  );
}

export default Accordion;
