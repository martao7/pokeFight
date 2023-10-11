import { useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function CreateSpieler({ setSpielers }) {
  const [newSpieler, setNewSpieler] = useState({
    name: "",
    score: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://onrender.com/posts", newSpieler)
      .then((response) => {
        console.log("Success:", response.data);
        alert("You're ready! Click on PLAY");
        setSpielers((prevSpielers) => [...prevSpielers, response.data]);
        setNewSpieler({
          name: "",
          score: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setNewSpieler({ ...newSpieler, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={newSpieler.name}
        onChange={handleChange}
        placeholder="name"
        required
      />

      <button type="submit" id="submitButton">
        OK
      </button>
    </form>
  );
}

export default CreateSpieler;
