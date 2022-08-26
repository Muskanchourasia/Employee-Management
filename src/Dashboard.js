import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./redux/features/userSlice";
import { Card, Col, Row } from "antd";
import { Button } from "antd";

function Dashboard(props) {
  const text = useSelector((state) => state.user.users);
  const [Role, setRole] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.users);
        dispatch(userData(res.users));
      });
  }, []);

  const handleClick = (id) => {
    fetch(` http://localhost:3001/users/${id} `, {
      method: "DELETE",
      headers: { Authorization: JSON.parse(localStorage.getItem("token")) },
    }).then((result) => result.json);
  };

  const handleClick1 = (id) => {
    // fetch(` http://localhost:3001/users/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: JSON.parse(localStorage.getItem("token")),
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     dispatch(userData(res.users));
    //   });
    props.history.push({ pathname: "/EditUi", state: { id: id } });
  };

  const handleClick2 = () => {
    fetch(`http://localhost:3001/users?role=${Role}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(userData(res.users));
      });
  };
  return (
    <div>
      <form>
        <label htmlFor="Role">Choose Role:</label>
        <select
          onChange={(event) => setRole(event.target.value)}
          id="Role"
          name="Role"
        >
          <option value="senior">senior</option>
          <option value="junior">junior</option>
          <option value="lead">lead</option>
        </select>

        <Button type="primary" onClick={handleClick2}>
          Filter
        </Button>
      </form>

      <div className="main2">
        <Row gutter={5}>
          <Col span={12}>
            {text.map((item, index) => (
              <Card key={index} title="Employee Details">
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
                <p>Role: {item.role}</p>
                <p>Address: {item.address}</p>
                <p>Salary :{item.salary}</p>
                <Button
                  type="danger"
                  value={index}
                  onClick={() => handleClick(item.id)}
                >
                  DELETE
                </Button>
                <Button
                  type="primary"
                  value={index}
                  onClick={() => handleClick1(item.id)}
                >
                  Edit
                </Button>
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;
