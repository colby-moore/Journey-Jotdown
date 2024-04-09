import React, { SyntheticEvent } from "react";

interface Props {
  expenseType: string
  state: number;
  onChange: (event: SyntheticEvent) => void;
}

const Expense = ({ expenseType, state, onChange }: Props) => {
  //const [cost, setCost] = useState(0);

  return (
    <div className="col test">
      <p>Cost: {state}</p>
      <label>
        <input onChange={onChange}/>
        <p className="text-left">{expenseType}</p>
      </label>
    </div>
  );
};

export default Expense;
