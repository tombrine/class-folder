"use client";

import { useState } from "react";

const Page = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [shown, setShown] = useState(false);
  const [shown2, setShown2] = useState(false);

  const isLongEnough = password.length >= 8;
  const passwordsMatching = password === rePassword;
  const isThereDigit = password.includes(1);

  return (
    <div style={{ padding: "100px" }}>
      <div>
        <label>
          Password
          <br />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={shown2 ? "text" : "password"}
          />
          <button
            onClick={() => {
              setShown2(!shown2);
            }}
          >
            {shown2 ? "Hide" : "Show"}
          </button>
        </label>
      </div>
      <div>
        <label>
          Password Repeat
          <br />
          <input
            value={rePassword}
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
            type={shown ? "text" : "password"}
          />
          <button
            onClick={() => {
              setShown(!shown);
            }}
          >
            {shown ? "Hide" : "Show"}
          </button>
        </label>
      </div>
      <p>
        <input checked={isLongEnough} type="checkbox" /> Atleast 8 characters
      </p>
      <p>
        <input type="checkbox" /> Atleast 1 upper case letter
      </p>
      <p>
        <input type="checkbox" /> Atleast 1 lower case letter
      </p>
      <p>
        <input checked={isThereDigit} type="checkbox" /> Atleast 1 digit
      </p>
      <p>
        <input type="checkbox" /> Atleast 1 contains one of those
        (!@#$%^&*.,/_-)
      </p>
      <p>
        <input checked={passwordsMatching} type="checkbox" /> Repeat password
        match
      </p>
    </div>
  );
};

export default Page;
