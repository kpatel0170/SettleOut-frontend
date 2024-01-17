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
    <div className="min-h-screen flex flex-col mt-10 dark:bg-gray-800">
      <main className="flex-1 px-6 py-12 lg:flex lg:justify-center lg:items-center lg:w-full mt-10 mb-20">
        <div className="grid gap-8 md:gap-12 lg:gap-16 xl:gap-8 lg:grid-cols-1 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`w-full max-w-lg mx-auto ${
                plan.featured
                  ? "order-first lg:order-none lg:transform lg:scale-110 lg:z-10"
                  : "lg:transform lg:scale-90"
              } bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-md overflow-hidden shadow-md`}
            >
              <Card {...plan} handleSubmit={handleSubmit} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Cards;
