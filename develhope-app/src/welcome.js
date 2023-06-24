import React from "react";
import { Link } from "react-router-dom";

export function Welcome() {

  return (
    <div>
      <p>Welcome</p>
      <Link to="/CardDetails">Choose your car</Link>
      <br />
      <Link to="/counter">Count with me</Link>
      <br />
      <Link to="/HookLogin">Write your name and password</Link>
    </div>
  );
}
