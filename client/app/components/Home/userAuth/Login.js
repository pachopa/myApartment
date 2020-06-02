import React from "react";
import { Router } from "@reach/router";
import { useAuth } from "react-use-auth";
import Callback from "./Callback";


export default function App() {
  const { isAuthenticated, login, logout, user } = useAuth();

  const Login = () => {
    if (isAuthenticated()) {
      return <button onClick={logout}>Logout</button>;
    } else {
      return <button onClick={login}>Login</button>;
    }
  };

  const Greeting = () => {
    if (isAuthenticated()) {
      return <h1>Hi, {user.name}!</h1>;
    } else {
      return <h1>Hi, there! Please login.</h1>;
    }
  };

  return (
    <div className="App">
      <h1>Auth0 Example</h1>
      <Greeting />
      <Login />
      <Callback />

    </div>
  );
}
