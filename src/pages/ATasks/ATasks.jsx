import React, { useState, useEffect } from "react";
import commonApi from "../../api/common";
import { useLocation } from "react-router-dom";

function TodoItem({ text, handleUpdate, status }) {
  const [isChecked, setIsChecked] = useState(status);

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

const ATasks = () => {
  const [todos, setTodos] = useState([]);
  const [demo, setDemo] = useState({
    fullName: "",
    email: "",
    phone: "",
    demographics: {
      ticket: "",
      arrivalDate: "",
      arrivalTime: ""
    }
  });
  const [allCompleted, setAllCompleted] = useState(false);
  const { state } = useLocation();

  useEffect(() => {
    const getServices = async () => {
      try {
        const { DATA = {} } = await commonApi({
          action: "listTasks",
          data: {
            query: {
              _id: state.id
            },
            options: {
              populate: ["userId"]
            }
          }
        });
        setTodos(DATA.data[0].services);
        setDemo(DATA.data[0].userId);
      } catch (error) {
        console.error(error);
      }
    };

    getServices();
  }, [state.id]);

  const handleUpdate = async (name) => {
    try {
      const { DATA = {} } = await commonApi({
        action: "updateTaskList",
        data: {
          name: name,
          taskId: state.id
        }
      });
      setTodos(DATA.services);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const incompleteTodos = todos.filter((todo) => !todo.status);
    setAllCompleted(incompleteTodos.length === 0);
  }, [todos]);

  return (
    <div className=" min-h-screen py-5">
      <div className="max-w-2xl mx-auto mt-8 p-4 dark:bg-slate-500 dark:text-gray-300 shadow-md rounded-md mx-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4 dark:text-gray-100">
              Name: {demo.fullName}
            </h2>
            {todos.length > 0 && (
              <div className="flex flex-col gap-1">
                <p>Email: {demo.email}</p>
                <p>Phone: {demo.phone?.phone}</p>
                <p>INR number: {demo.demographics?.ticket}</p>
                <p>Arrival Date: {demo.demographics?.arrivalDate}</p>
                <p>Arrival Time: {demo.demographics?.arrivalTime}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-8 p-4 dark:bg-slate-500 dark:text-gray-300 shadow-md rounded-md">
        <p className="text-center text-2xl font-bold mb-4 dark:text-gray-100">
          Tasks
        </p>

        {todos.length === 0 && (
          <div className="text-center pb-8">
            <p>No tasks found.</p>
            <p>Please check back later.</p>
          </div>
        )}

        {todos.length > 0 && (
          <>
            <ul>
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
              <div className="text-center mt-4">
                <a
                  href="/feedback"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Give Feedback
                </a>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ATasks;
