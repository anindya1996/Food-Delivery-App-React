import { useContext } from "react";
import UserContext from "../utils/UserContext";

const User = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="user-card  ">
      <h2>Name: Anindya Sundar Mukherjee</h2>
      <h3>Location: Rampurhat</h3>
      <h4>Contact: anindya.mukherjee26@gmail.com</h4>
    </div>
  );
};

export default User;
