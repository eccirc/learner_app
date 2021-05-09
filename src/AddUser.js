import { useState } from "react";
import { storeDB } from "./firebaseConfig";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const [First, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [Email, setEmail] = useState("");
  const [Score, setScore] = useState(0);

  const history = useHistory();

  const addUser = () => {
    const random = Math.floor(10000 + Math.random() * 90000);
    const id = `id:${random}`;

    storeDB
      .collection("learners")
      .doc(id)
      .set({
        "First Name": First,
        "Last Name": Last,
        Email: Email,
        Score: Score,
        id: id,
      })
      .then(() => {
        alert("successfully added new learner: " + First + " " + Last);
        history.push("/");
        setFirst("");
        setLast("");
        setEmail("");
        setScore(0);
      })
      .catch((err) => {
        alert("Failed to add new learner: " + err);
      });
  };

  const inputs = [
    {
      label: "firstName",
      placeholder: "First Name",
      type: "text",
      value: First,
      func: setFirst,
    },
    {
      label: "lastName ",
      placeholder: "Last Name",
      type: "text",
      value: Last,
      func: setLast,
    },
    {
      label: "email",
      placeholder: "E-mail address",
      type: "email",
      value: Email,
      func: setEmail,
    },
    {
      label: "Current score",
      placeholder: "Initial score 0-10",
      type: "number",
      value: Score,
      func: setScore,
    },
  ];

  return (
    <div className="m-4 hover:shadow-lg  border-4 p-8 rounded-xl">
      <div className="flex justify-between">
        <h2 className="p-2 font-bold text-pink-400 text-2xl">
          Add new learner
        </h2>
        <button
          onClick={() => addUser()}
          className="rounded-xl px-2 bg-blue-400 text-white"
        >
          Submit New Learner
        </button>
      </div>
      <form className="inline-flex flex-wrap">
        {inputs.map((input, index) => (
          <div className="inline" key={index}>
            <label htmlFor="firstName" className="block m-2">
              {input.placeholder}
            </label>
            <input
              className="border-2 rounded-2xl p-2 "
              type={input.type}
              id={input.label}
              name={input.label}
              min="0"
              max="10"
              value={input.value}
              onChange={(e) => input.func(e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default AddUser;
