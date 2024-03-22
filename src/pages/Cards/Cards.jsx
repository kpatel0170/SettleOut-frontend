import React, { useState, useEffect } from "react";
import Card from "../../components/MembershipCard";
import commonApi from "../../api/common";
import { useNavigate, useLocation } from "react-router-dom";

function Cards() {
  const { state } = useLocation();
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { DATA = {} } = await commonApi({
          action: "findMembership",
          data: {}
        });
        setPlans(DATA.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (id, amount) => {
    try {
      navigate("/payment", {
        state: {
          agentId: state.agentId,
          membershipId: id,
          amount: amount
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className=" lg:flex lg:justify-center lg:items-center py-10">
        <div className="grid lg:grid-cols-1 xl:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div key={plan._id} className={`w-full max-w-lg mx-auto my-auto`}>
              <Card {...plan} handleSubmit={handleSubmit} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Cards;
