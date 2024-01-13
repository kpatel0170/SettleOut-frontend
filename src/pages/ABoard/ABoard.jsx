import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import commonApi from "../../api/common";
import { Context } from "../../context/Context";

const ABoard = () => {
  const [studentList, setStudentList] = useState([]);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { DATA = {} } = await commonApi({
          action: "listTasks",
          data: {
            query: {
              agentId: user._id
            },
            options: {
              populate: [
                {
                  path: "userId",
                  model: "user"
                },
                {
                  path: "agentId",
                  model: "user"
                }
              ]
            }
          }
        });
        setStudentList(DATA.data);
      } catch (error) {
        console.error(error);
      }
    };

    getTasks();
  }, [user._id]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
        {studentList.length > 0 ? (
          studentList.map(({ _id, userId }) => (
            <div key={_id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{userId.fullName}</h2>
              <p>
                Arrival Date:{" "}
                <strong>{userId?.demographics?.arrivalDate}</strong>
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="mr-4">
                    Province: <strong>{userId?.demographics?.province}</strong>
                  </span>
                  <span>
                    City: <strong>{userId?.demographics?.city}</strong>
                  </span>
                </div>
                <div>
                  <button
                    className="bg-green-500 px-4 py-2 text-white rounded-md"
                    onClick={() => navigate("/tasks", { state: { id: _id } })}
                  >
                    Tasks
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center p-8 text-black w-full md:w-2/3 lg:w-1/2 mx-auto mt-8 bg-white rounded-md border-2 border-gray-300">
            No Appointments Yet
          </div>
        )}
      </div>
    </div>
  );
};

export default ABoard;
