import React, { useState } from "react";

const FormStructure = (props) => {
  const [state, setState] = useState();

  const FormChange = (e) => {
    setState(e.target.value);
  };
  const SubmitForm = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random * 100,
      text: state,
    });

    setState("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="To Do Form"
        onSubmit={SubmitForm}
        value={state}
        name="text"
        className="to-input"
        onChange={FormChange}
      />
      <button className="to-button"> To DO</button>
    </form>
  );
};
export default FormStructure;
