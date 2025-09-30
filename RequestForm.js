import React, { useState } from "react";

function RequestForm() {
  const [newRequest, setNewRequest] = useState("");

  const addRequest = () => {
    if (newRequest.trim() === "") return;
    alert("New request added: " + newRequest);
    setNewRequest("");
  };

  return (
    <div>
      <h3>Service Request</h3>
      <input
        type="text"
        placeholder="Enter request"
        value={newRequest}
        onChange={(e) => setNewRequest(e.target.value)}
      />
      <button onClick={addRequest}>Add Request</button>
    </div>
  );
}

export default RequestForm;
