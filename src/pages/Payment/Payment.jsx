// import "./Payment.css";

import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import commonApi from "../../api/common";
import Toast from "../../api/toast";

function Payment() {
  const [card, setCard] = useState({
    cardno: "",
    cardtype: "far fa-credit-card",
    expirydt: ""
  });
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [cvv, setCVV] = useState("");
  const handlePayment = async () => {
    let data = {
      membershipId: state.membershipId,
      agentId: state.agentId,
      userId: user._id,
      amount: state.amount,
      cardDetails: {
        number: card.cardno,
        exp_month: card.expirydt.replace(/\//g, "").substring(0, 2),
        exp_year: card.expirydt.replace(/\//g, "").substring(2, 4),
        cvc: cvv
      }
    };
    await commonApi({
      action: "createTransaction",
      data: data
    })
      .then(({ DATA = {}, MESSAGE }) => {
        Toast.success("Payment Submitted Sucessfully");
        navigate("/preArrival");
      })
      .catch((error) => {
        Toast.danger(error(error));
      });
  };
  const onChange = (e) => {
    var cartype_new = cardnumber(e.target.value);
    setCard({
      ...card,
      cardno: e.target.value,
      cardtype: cartype_new
    });
  };
  const cardnumber = (inputtxt) => {
    var matches = inputtxt.match(/(\d+)/);
    var cardno = "";
    if (matches) {
      cardno = inputtxt.split(" - ").join("");
    }
    var cardtype1 = card.cardtype;
    //var visa = /^(?:4[0-9]{16}(?:[0-9]{3})?)$/;
    var visa = /^(?:4[0-9]{2}?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    var amexpRegEx = /^(?:3[47][0-9]{3})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
    if (visa.test(cardno) === true) {
      //eg:4651970022334445
      cardtype1 = "far fa fa-3x fa-cc-visa  carddetail-cardtype";
    } else if (mastercardRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-mastercard carddetail-cardtype";
    } else if (amexpRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-amex carddetail-cardtype";
    } else if (discovRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-discover carddetail-cardtype";
    }
    return cardtype1;
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" - ") : value;
  };
  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  const onChangeExp = (e) => {
    setCard({
      ...card,
      expirydt: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 dark:bg-slate-600 rounded-lg shadow-lg">
        <div className="text-2xl font-bold mb-4  dark:text-gray-300">
          Payment Details
        </div>
        <form className="space-y-4">
          <div className="relative">
            <label
              htmlFor="cardNumber"
              className="text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-gray-400"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              data-mask="0000 0000 0000 0000"
              value={card.cardno}
              maxLength={16}
              onChange={onChange}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <i className={card.cardtype} id="cardtype"></i>
          </div>
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <label
                htmlFor="expiryDate"
                className="text-sm font-medium text-gray-700  dark:text-gray-400"
              >
                Expiry date:
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300  dark:bg-slate-800 dark:text-gray-400"
                placeholder="mm/yy"
                onChange={onChangeExp}
                value={expriy_format(card.expirydt)}
              />
              <i className="far fa-calendar-alt absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 "></i>
            </div>
            <div className="relative flex-1">
              <label
                htmlFor="cvv"
                className="text-sm font-medium text-gray-700  dark:text-gray-400"
              >
                CVV:
              </label>
              <input
                type="password"
                id="cvv"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300  dark:bg-slate-800 dark:text-gray-400"
                placeholder="000"
                maxLength="3"
                pattern="[0-9][0-9][0-9]"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => setCVV(e.target.value)}
                value={cvv}
              />
              <i className="fas fa-lock absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="cardHolder"
              className="text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Name on Card:
            </label>
            <input
              type="text"
              id="cardHolder"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300  dark:bg-slate-800 dark:text-gray-400"
              placeholder=""
            />
            <i className="fas fa-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <button
            type="button"
            className="w-full px-4 py-2 bg-black text-white rounded-md focus:outline-none hover:bg-blue-600"
            onClick={handlePayment}
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
