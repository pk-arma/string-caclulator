import React, { useState } from "react";
// import { add } from "./utils/stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleCalculate = () => {
    try {
      const sum = 0;
      // add(input); // Use your TDD logic
      setResult(sum);
    } catch (error: any) {
      setResult(error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        style={{ padding: "10px", width: "300px" }}
      />
      <button
        onClick={handleCalculate}
        style={{ marginLeft: "10px", padding: "10px 20px" }}
      >
        Calculate
      </button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default App;
