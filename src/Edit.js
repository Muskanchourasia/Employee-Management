import React, { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./redux/features/userSlice";
import { Button } from "antd";

function EditUi(props) {
  useEffect(() => {
    fetch(`http://localhost:3001/users/${props.location.state.id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setdata(res.users);
      });
  }, []);
  const [data, setdata] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mob_no, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");

  //const dispatch = useDispatch();

  // const data = useSelector((state) => state.user.users);

  const handleClick1 = (id) => {
    let data = {
      username,
      email,
      gender,
      mob_no,
      role,
      address,
      salary,
      password,
    };
    fetch(` http://localhost:3001/users/${props.location.state.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
      body: JSON.stringify(data),
    }).then((result) => result.json());

    // if (
    //   username !== "" &&
    //   email !== "" &&
    //   gender !== "" &&
    //   mob_no !== "" &&
    //   role !== "" &&
    //   address !== "" &&
    //   salary !== "" &&
    //   password !== ""
    // ) {
    // }
    props.history.push("/Dashboard");
  };

  return (
    <div className="main">
      <div>
        <h1>Edit </h1>

        <div>
          <label className="form-label" htmlFor="Username">
            Username
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your first name"
            className="name"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="Email">
            Email address:
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your ID or email"
            className="name"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="Gender">
            Gender
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your gender"
            className="name"
            onChange={(event) => setGender(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="Number">
            Mobile no.:
          </label>
          <br />
          <input
            type="number"
            placeholder="Enter your mobile no."
            className="name"
            onChange={(event) => setNumber(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="Role">
            Role:
          </label>
          <br />
          {/* <Select> */}
          <input
            type="text"
            placeholder="Enter your Position"
            className="name"
            onChange={(event) => setRole(event.target.value)}
          />

          {/* <Menu>
              <Menu.Item>junior</Menu.Item>
              <Menu.Item>senior</Menu.Item>
              <Menu.Item>lead</Menu.Item>
            </Menu>
          </Select> */}
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="Address">
            Address
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your address"
            className="name"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <br />

        <div>
          <label className="form-label" htmlFor="Salary">
            Salary
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter your Salary"
            className="name"
            onChange={(event) => setSalary(event.target.value)}
          />
        </div>
        <br />

        <div className="second-input">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="name"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <br />

        <div className="Submit-button">
          <Button type="primary" onClick={handleClick1}>
            update
          </Button>

          <Button type="primary">cancel</Button>
        </div>
      </div>
    </div>
  );
}
export default withRouter(EditUi);
