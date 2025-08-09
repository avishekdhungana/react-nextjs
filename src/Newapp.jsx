import React, { useState } from "react";

import LoginForm from "./LoginForm.jsx";         
import TaskManager from "./TaskManager.jsx";     

 const Newapp = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      {loggedInUser ? (
        <TaskManager username={loggedInUser} />
      ) : (
        <LoginForm onLogin={setLoggedInUser} />
      )}
    </div>
  );
};
export default Newapp;
