import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

const Profile = ({ details }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [First, setFirst] = useState("");
  const [Last, setLast] = useState("");
  const [Email, setEmail] = useState("");
  const [Score, setScore] = useState(0);

  const handleEditProfile = (edit) => {
    setEditProfile(edit);
  };

  const { name } = useParams();

  let profile = details.filter((first) => first["First Name"] === name);

  const inputs = [
    {
      label: "firstName",
      placeholder: "New First Name",
      type: "text",
      inner: profile[0]["First Name"],
      value: First,
      func: setFirst,
    },
    {
      label: "lastName ",
      placeholder: "New Last Name",
      type: "text",
      inner: profile[0]["Last Name"],
      value: Last,
      func: setLast,
    },
    {
      label: "email",
      placeholder: "New e-mail address",
      type: "email",
      inner: profile[0]["Email"],
      value: Email,
      func: setEmail,
    },
    {
      label: "initScore",
      placeholder: "New score 0-10",
      type: "number",
      inner: profile[0]["Score"],
      value: Score,
      func: setScore,
    },
  ];

  return (
    <div className=" mx-auto lg:w-1/2 p-4 rounded-xl border-4 relative">
      <button
        onClick={() => handleEditProfile(true)}
        className="absolute top-0 right-0 m-4 bg-blue-500 rounded-xl p-2 text-white"
      >
        {!editProfile ? "Edit" : "Save"}
      </button>
      {!editProfile && (
        <div>
          <h1 className="text-2xl block font-bold">
            {profile[0]["First Name"] + " " + profile[0]["Last Name"]}
          </h1>
          <br />
          <span className="text-xl text-gray-600 block">
            {profile[0]["Email"]}
          </span>
          <br />
          <span className="text-xl text-gray-600">
            Current Score: {profile[0]["Score"]}
          </span>
        </div>
      )}
      {editProfile &&
        inputs.map((input, index) => (
          <form className="inline" key={index}>
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
              placeholder={input.inner}
              value={input.value}
              onChange={(e) => input.func(e.target.value)}
            />
          </form>
        ))}
    </div>
  );
};

Profile.propTypes = {
  details: PropTypes.array,
};

export default Profile;
