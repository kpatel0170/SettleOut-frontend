import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import commonApi from "../../api/common";
import { useLocation } from "react-router-dom";

function TodoItem({ id, text, handleUpdate, status }) {
  const [isChecked, setIsChecked] = useState(status ? true : false);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setIsChecked(!isChecked);
      handleUpdate(text);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox text-indigo-600 h-5 w-5"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`ml-3 text-lg ${
          isChecked ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default function StudentTask() {
  const [todos, setTodos] = useState([]);
  const [demo, setDemo] = useState({
    fullName: "",
    email: "",
    phone: "",
    demographics: {
      ticket: "",
      arrivalDate: "",
      arrivalTime: "",
    },
  });
  const [allCompleted, setAllCompleted] = useState(false);
  const { state } = useLocation();
  useEffect(() => {
    const getServices = async () => {
      await commonApi({
        action: "listTasks",
        data: {
          query: {
            _id: state.id,
          },
          options: {
            populate: ["userId"],
          },
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          setTodos(DATA.data[0].services);
          setDemo(DATA.data[0].userId);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getServices();
  }, []);
  const handleUpdate = async (name) => {
    await commonApi({
      action: "updateTaskList",
      data: {
        name: name,
        taskId: state.id,
      },
    })
      .then(({ DATA = {}, MESSAGE }) => {
        setTodos(DATA.services);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const incompleteTodos = todos.filter((todo) => !todo.status);
    setAllCompleted(incompleteTodos.length === 0);
  }, [todos]);

  return (
    <>
      <Navbar />
      <div>
        <div
          className="shadow-md"
          style={{
            padding: "20px",
            height: "200px",
            width: "70%",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "15px",
          }}
        >
          <span style={{ display: "grid", margin: "0px auto", width: "100%" }}>
            <span style={{ padding: "20px", paddingRight: "5px" }}>
              Name: <strong>{demo.fullName}</strong>
            </span>
            {todos.length > 0 && (
              <div
                style={{ display: "grid", gridTemplateColumns: "30% 30% 30%" }}
              >
                <span style={{ padding: "20px" }}>
                  EmailId: <strong>{demo.email}</strong>
                </span>
                <span style={{ padding: "20px" }}>
                  Phone: <strong>{demo.phone?.phone}</strong>
                </span>
                <span style={{ padding: "20px" }}>
                  INR number: <strong>{demo.demographics?.ticket}</strong>
                </span>
                <span style={{ padding: "20px" }}>
                  Arrival Date:
                  <strong>{demo.demographics?.arrivalDate}</strong>
                </span>
                <span style={{ padding: "20px" }}>
                  <strong>
                    Arrival Time: {demo.demographics?.arrivalTime}
                  </strong>
                </span>
              </div>
            )}
          </span>
        </div>
      </div>
      <div>
        <p style={{ textAlign: "center", margin: "30px", fontSize: "1.5em" }}>
          Tasks
        </p>
      </div>
      <div className="max-w-md mx-auto mt-4">
        {todos.length === 0 && (
          <div style={{ textAlign: "center", paddingBottom: "180px" }}>
            <p>No tasks found.</p>
            <p>Please check back later.</p>
          </div>
        )}
        {todos.length > 0 && (
          <>
            <ul className="mt-4">
              {todos.map((todo) => (
                <li key={todo.id} className="py-2">
                  <TodoItem
                    text={todo.name}
                    handleUpdate={handleUpdate}
                    status={todo.status}
                  />
                </li>
              ))}
            </ul>
            {todos.every((todo) => todo.status) && (
              <div style={{ textAlign: "center" }}>
                <a href="/feedback" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Give Feedback
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
