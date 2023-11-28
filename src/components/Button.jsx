import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";

export const Button = () => {
  const { userState, setUserState } = useContext(UserContext);
  function fetchData() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userState.login,
        password: userState.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserState((prevUserState) => ({ ...prevUserState, id: data.id }));
      });
  }

  return (
    <button onClick={fetchData}>
      {userState.id ? "You logged in" : "Log in"}
    </button>
  );
};
