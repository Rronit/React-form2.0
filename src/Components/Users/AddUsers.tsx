import React from "react";
import Card from "../UI/Card";
import style from "./AddUsers.module.css";

const AddUsers = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };
  const [userName, setUserName] = React.useState<string>("");
  return (
    <Card className={style.input}>
      <form>
        <div style={{ padding: 20, maxWidth: "40rem" }}>
          <label htmlFor="user">Name: </label>
          <input id="user" type="text"></input>
        </div>
        <div style={{ padding: 20 }}>
          <label htmlFor="age">Age: </label>
          <input id="age" type="number"></input>
        </div>
        <div style={{ padding: 20 }}>
          <button onSubmit={handleSubmit}>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default AddUsers;
