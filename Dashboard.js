import React, { useState } from "react";
import RequestForm from "./RequestForm";

function Dashboard() {
  const [requests] = useState([
    { id: 1, request: "Battery replacement", date: "2025-09-09" },
    { id: 2, request: "Screen repair", date: "2025-09-08" }
  ]);

  return (
    <div>
      <h2>Dashboard</h2>
      <RequestForm />
      <h3>Existing Requests</h3>
      <ul>
        {requests.map((r) => (
          <li key={r.id}>
            {r.request} - {r.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
