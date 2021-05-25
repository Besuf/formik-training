import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/lecture-1">1. Simple Form (Youtube From)</Link>
        </li>
      </ul>
    </div>
  );
}
