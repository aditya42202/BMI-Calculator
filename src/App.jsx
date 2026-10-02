import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      setBmi(null);
      setMessage("Please enter valid height and weight.");
      return;
    }

    // Height in cm → meters
    const heightInMeters = height / 100;

    const result = weight / (heightInMeters * heightInMeters);

    setBmi(result.toFixed(2));

    if (result < 18.5) {
      setMessage("Underweight");
    } else if (result < 25) {
      setMessage("Normal weight");
    } else if (result < 30) {
      setMessage("Overweight");
    } else {
      setMessage("Obesity");
    }
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>BMI Calculator</h1>
        <p className="subtitle">
          Calculate your Body Mass Index
        </p>

        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>

        {bmi && (
          <div className="result">
            <h2>Your BMI</h2>
            <div className="bmi-value">{bmi}</div>
            <p>{message}</p>
          </div>
        )}

        {message && !bmi && (
          <p className="error">{message}</p>
        )}

        <div className="categories">
          <h3>BMI Categories</h3>

          <div>
            <span>Underweight</span>
            <strong>Below 18.5</strong>
          </div>

          <div>
            <span>Normal</span>
            <strong>18.5 – 24.9</strong>
          </div>

          <div>
            <span>Overweight</span>
            <strong>25 – 29.9</strong>
          </div>

          <div>
            <span>Obesity</span>
            <strong>30+</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;