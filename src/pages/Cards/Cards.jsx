import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import commonApi from "../../api/common";
import { useNavigate, useLocation} from "react-router-dom";

// export const plans = [
//   {
//     name: "Hobby",
//     price: 19,
//     frequency: "month",
//     features: [
//       "Nullam gravida elementum",
//       "Mauris mauris neque",
//       "Duis auctor tincidunt leo",
//     ],
//   },
//   {
//     name: "Growth",
//     price: 49,
//     frequency: "month",
//     featured: true,
//     features: [
//       "Nullam gravida elementum",
//       "Mauris mauris neque",
//       "Duis auctor tincidunt leo",
//     ],
//   },
//   {
//     name: "Scale",
//     price: 99,
//     frequency: "month",
//     features: [
//       "Nullam gravida elementum",
//       "Mauris mauris neque",
//       "Duis auctor tincidunt leo",
//     ],
//   },
// ];

function Cards() {
const {state}=useLocation()
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

  const handleSubmit=(id,amount)=>{
    try{
      navigate("/payment",{state:{
        agentId:state.agentId,
        membershipId:id,
        amount:amount
      }})
    }
    catch(error)
    {
      console.error(error)
    }
  }
  return (
    <div className="h-full flex flex-col">
      <main className="flex-1 px-6 py-12 lg:flex lg:justify-center lg:items-center">
        <div className="grid gap-12 lg:gap-0 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan._id}
              className={`w-full max-w-lg mx-auto ${
                plan.featured
                  ? "order-first lg:order-none lg:transform lg:scale-110 lg:z-10"
                  : "lg:transform lg:scale-90"
              }`}
            >
              <Card {...plan} handleSubmit={handleSubmit}/>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default Cards;