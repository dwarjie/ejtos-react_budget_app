import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch, currency } = useContext(AppContext);
  const [newCurrency, setNewCurrency] = useState(currency);

  const handleChangeCurrency = (newCurr) => {
    setNewCurrency(newCurr);
    dispatch({
      action: "CHG_CURRENCY",
      payload: newCurrency,
    });
  };

  return (
    <div className="btn-group">
      <button
        className="btn btn-success btn-lg dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Currency {newCurrency}
      </button>
      <div className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleChangeCurrency("$")}
          >
            $ Dollar
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleChangeCurrency("£")}
          >
            £ Pound
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleChangeCurrency("€")}
          >
            € Euro
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleChangeCurrency("₹")}
          >
            ₹ Ruppee
          </a>
        </li>
      </div>
    </div>
  );
};

export default Currency;
