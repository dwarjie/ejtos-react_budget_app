import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, currency, budget, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    if (parseInt(event.target.value) > 20000) {
      alert(
        `The value cannot exceed remaining funds ${
          parseInt(event.target.value) - 20000
        }`
      );
      return;
    }

    if (parseInt(event.target.value) < totalExpenses) {
      alert(`You cannot reduce the budget value lower than the spending`);
      return;
    }
    setNewBudget(event.target.value);
    dispatch({
      action: "SET_BUDGET",
      payload: newBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
