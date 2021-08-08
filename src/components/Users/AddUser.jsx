import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = () => {
   const [enteredUsername, setEnteredUsername] = useState("");
   const [enteredAge, setEnteredAge] = useState("");
   const addUserHandler = (event) => {
      event.preventDefault();
      setEnteredAge("");
      setEnteredUsername("");
   };
   const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
   };
   const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value);
   };
   return (
      <Card className="input">
         <form onSubmit={addUserHandler}>
            <label htmlFor="username">username</label>
            <input
               type="text"
               id="username"
               value={enteredUsername}
               onChange={usernameChangeHandler}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
               type="number"
               id="age"
               value={enteredAge}
               onChange={ageChangeHandler}
            />
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default AddUser;
