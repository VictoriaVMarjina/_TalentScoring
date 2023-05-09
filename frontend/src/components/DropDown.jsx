import React, { useState } from "react";
import { useUserData } from "../state/store";

const DropDown = () => {
  const { updateId, clearContext } = useUserData();
  const getNumsArr = () => {
    const nums = [];
    for (let i = 1; i <= 10; i++) {
      nums.push(i);
    }

    return nums;
  };

  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(e.target.value);
    updateId(e.target.value);
    clearContext();
  };

  return (
    <div>
      <label>Client Id: </label>
      <select
        defaultValue={0}
        value={value}
        onChange={onChange}
        className="border rounded"
      >
        {getNumsArr().map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
