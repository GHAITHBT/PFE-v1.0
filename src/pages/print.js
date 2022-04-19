import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import ComponentToPrint from './ComponentToPrint'
import Article from './Article'
export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />

        <Article ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}
