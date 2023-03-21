import React, { useState, useEffect, useContext } from "react";
import commonApi from "../../api/common";
import Navbar from "../../components/Navbar/";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const ADBoard = () => {
  const [studentList, setStudentList] = useState([]);
  const { user } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const getTasks = async () => {
      await commonApi({
        action: "listTasks",
        data: {
          query: {
            agentId: user._id,
          },
          options: {
            populate: [
              {
                path: "userId",
                model: "user",
              },
              {
                path: "agentId",
                model: "user",
              },
            ],
          },
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          setStudentList(DATA.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getTasks();
  }, [user._id]);

  // const studentData = [
  //   {
  //     id: 1,
  //     name: "Jhon Dane
  //     arrivalDate: "20-04-2023",
  //     Province: "Saskatchewan",
  //     City: "Regina",
  //     status: "In-progress",
  //   },
  //   {
  //     id: 1,
  //     name: "Klaus Mickky",
  //     arrivalDate: "20-04-2023",
  //     Province: "Saskatchewan",
  //     City: "Regina",
  //     status: "In-progress",
  //   },
  // ];

  return (
    <>
    <div>
      <Navbar />
      <div>
        {studentList.length > 0 ? (
          studentList.map((tasks) => (
            <span key={tasks._id}>
              <div
                className="shadow-md"
                style={{
                  display: "grid",
                  margin: "3%",
                  width: "80%",
                  padding: "30px",
                }}
              >
                <div style={{ fontSize: "1.5em" }}>{tasks.userId.fullName}</div>
                <div>
                  arrival date:{" "}
                  <strong>{tasks.userId?.demographics?.arrivalDate}</strong>
                </div>
                <div
                  style={{ justifyContent: "space-between", display: "flex" }}
                >
                  <div>
                    <span style={{ marginRight: "30px" }}>
                      Province:{" "}
                      <strong>{tasks.userId?.demographics?.province}</strong>
                    </span>
                    <span>
                      City: <strong>{tasks.userId?.demographics?.city}</strong>
                    </span>
                  </div>
                  <div>
                    {/* <span style={{ backgroundColor: "green", padding: '10px', borderRadius: "10px", color: "white" }}> */}
    
                      <button style={{
                        border: "0px",
                        backgroundColor: "green",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      onClick={() => {
                        navigate("/Tasks", { state: { id: tasks._id } });
                      }}>
                        Tasks
                        </button>
                    {/* </span> */}
                  </div>
                </div>
              </div>
            </span>
          ))
        ) : (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
              color: "black",
              width: "30%",
              marginLeft: "30%",
              marginTop: "30px",
              borderRadius: "15px",
              fontSize: "30px",
              borderBlockWidth: "3px"
              
            }}
          >
            No Appointments Yet
          </span>
        )}
      </div>
    </div>
    </>
  );
};

export default ADBoard;

