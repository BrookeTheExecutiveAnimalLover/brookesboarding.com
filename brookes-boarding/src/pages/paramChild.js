import React from "react";
import { useParams } from "react-router-dom";

function ParamChild() {
  const { id } = useParams();
  console.log(id);
  console.log(useParams(id));
  return (
    <>
      <h3>I am {id} page</h3>
    </>
  );
}

export default ParamChild;
