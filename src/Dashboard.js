import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/features/userSlice";

function App() {
  const { Users } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
      {users.map((item) => (
        <h2>
          {" "}
          {item.id} {item.email}
        </h2>
      ))}
    </div>
  );
}

export default App;
