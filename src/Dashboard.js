import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "./redux/features/userSlice";
import { Card, Col, Row } from "antd";
import { Button } from "antd";

function Dashboard() {
  const text = useSelector((state) => state.user.users);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.users);

        dispatch(userData(res.users));
      });
  }, [dispatch]);

  const handleClick = (id) => {
    fetch(` http://localhost:3001/users/${id} `, {
      method: "DELETE",
    }).then((result) => result.json);
  };

  // const handleClick1 = () => {
  //   fetch(" http://localhost:3001/users/3 ", {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       dispatch(userData(res.users));
  //     });
  // };

  return (
    <div className="form-label2">
      <Row gutter={16}>
        <Col span={8}>
          {text.map((item, index) => (
            <Card title="Employee Details">
              <p>ID :{item.id}</p>
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
              {/* <Button type="primary" value={index} onClick={handleClick1}>
                Edit
              </Button> */}
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
