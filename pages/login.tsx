import Login from "../components/login";

import React from "react";

export default function loginPage() {
  return (
    <div>
      <Login loadingScreenCallback={
        () => { console.log("hi") }
      } />
      {/* hello */}
    </div>
  );
}
