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
    <div className="min-h-screen px-5">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-4 p-5  mx-auto lg:px-[170px]">
          {studentList.length > 0 ? (
            studentList.map(({ _id, userId }) => (
              <div
                key={_id}
                className="dark:bg-slate-500 p-6 rounded-md shadow-md dark:text-gray-300"
              >
                <h2 className="text-xl font-bold mb-2 dark:text-gray-100">
                  {userId.fullName}
                </h2>
                <p className="mb-4">
                  Arrival Date:{" "}
                  <strong>{userId?.demographics?.arrivalDate}</strong>
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="mb-2">
                      Province:{" "}
                      <strong>{userId?.demographics?.province}</strong>
                    </p>
                    <p>
                      City: <strong>{userId?.demographics?.city}</strong>
                    </p>
                  </div>
                  <button
                    className="bg-green-500 px-4 py-2 text-white rounded-md"
                    onClick={() => navigate("/tasks", { state: { id: _id } })}
                  >
                    Tasks
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center p-8 text-gray-800 bg-white rounded-md border-2 border-gray-300">
              No Appointments Yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ABoard;
