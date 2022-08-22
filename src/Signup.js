import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import { Button } from "antd";

function SignupUi(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mob_no, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [address, setAddress] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
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
    console.log(data);
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => result.json());

    // props.history.push("/loginUi");
  }

  // const url = "http://localhost:3001/";

  // function handleClick1 = () => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((url) => {
  //       setState();
  //     });
  // };

  // function handleClick() {
  //   localStorage.setItem("name", JSON.stringify(username));
  //   localStorage.setItem("role", JSON.stringify(role));
  //   localStorage.setItem("email", JSON.stringify(email));
  //   localStorage.setItem("password", JSON.stringify(password));
  //   localStorage.setItem("number", JSON.stringify(number));
  //   if (username !== "" && email !== "" && password !== "" && number !== "") {
  //     props.history.push("/loginUi");
  //   }
  // }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <h1>SignUp Page</h1>

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
            <input
              type="text"
              placeholder="Enter your Position"
              className="name"
              onChange={(event) => setRole(event.target.value)}
            />
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
            <Button type="primary" onClick={handleClick}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SignupUi);
