// import PropTypes from "prop-types";

const AddUser = () => {
  const inputs = [
    { label: "firstName", placeholder: "Enter First Name", type: "text" },
    { label: "lastName ", placeholder: "Enter Last Name", type: "text" },
    { label: "email", placeholder: "Enter e-mail address", type: "email" },
    { label: "initScore", placeholder: "Initial score 0-10", type: "number" },
  ];

  return (
    <div className="m-4 hover:shadow-lg  border-4 p-8 rounded-xl">
      <div className="flex justify-between">
        <h2 className="p-2 font-bold text-pink-400 text-2xl">
          Add new learner
        </h2>
        <button className="rounded-xl px-2 bg-blue-400 text-white">
          Submit New Learner
        </button>
      </div>
      <section className="inline-flex">
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
            />
          </div>
        ))}
      </section>
    </div>
  );
};

// AddUser.propTypes = {
//   submitNewLearner: PropTypes.func,
// };

export default AddUser;
