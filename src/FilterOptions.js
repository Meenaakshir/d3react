import React, { useState } from "react";

export default function FilterOptions() {
  const [checkedOne, setCheckedOne] = useState(true);
  const updateOne = () => setCheckedOne(checkedOne);
  const [checked, setChecked] = useState(false);
  const update = () => setChecked(checked);

  return (
    <div>
      <div
        style={{ width: "20rem", justifyItems: "center", marginLeft: "30rem" }}
      >
        <form
          style={{
            marginLeft: "10%",
            border: "1px solid",
            padding: "1rem",
            borderColor: "gray",
          }}
        >
          <label>
            <input
              name="a"
              checked={checkedOne}
              onChange={updateOne}
              value={true}
              type="checkbox"
            />
            All CQA Results
          </label>

          <label>
            <br />
            <input
              onClick={() => setChecked(!checked)}
              name="a"
              label="All CQA Results"
              checked={checked}
              onChange={update}
              value={true}
              type="checkbox"
              unchecked
            />
            CQA's with closed loop
          </label>
        </form>
      </div>
    </div>
  );
}
