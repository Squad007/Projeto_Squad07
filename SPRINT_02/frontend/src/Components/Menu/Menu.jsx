import React from "react";
import { useNavigate } from 'react-router-dom';
export default function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <a onClick={() => navigate("/")}>Home</a>
      <a onClick={() => navigate("/notification")}>Notifi</a>
      <a onClick={() => navigate("/register")}>Register</a>
      <a onClick={() => navigate("/report")}>Report</a>
    </div>
  );
}
