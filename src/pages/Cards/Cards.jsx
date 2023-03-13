import React, { useState, useEffect } from "react";
import Card from "../../components/MembershipCard";
import commonApi from "../../api/common";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Cards() {
  const { state } = useLocation();
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const call = async () => {
      await commonApi({
        action: "findMembership",
        data: {},
      })
        .then(({ DATA = {}, MESSAGE }) => {
          setPlans(DATA.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    call();
  }, []);

  const handleSubmit = (id, amount) => {
    try {
      navigate("/payment", {
        state: {
          agentId: state.agentId,
          membershipId: id,
          amount: amount,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="h-full flex flex-col mt-10">
        <main className="flex-1 px-6 py-12 lg:flex lg:justify-center lg:items-center lg:w-full mt-10 mb-20">
          <div className="grid gap-2 md:gap-12 lg:gap-16 xl:gap-2 lg:grid-cols-3 pb-15">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className={`w-full max-w-lg mx-auto ${
                  plan.featured
                    ? "order-first lg:order-none lg:transform lg:scale-110 lg:z-10"
                    : "lg:transform lg:scale-90"
                }`}
              >
                <Card {...plan} handleSubmit={handleSubmit} />
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Cards;
