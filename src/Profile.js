import { useState } from "react";
import PropTypes from "prop-types";

const Profile = ({ details }) => {
  const [editFirstLast, setEditFirstLast] = useState(false);
  const [editEmail, seteditEmail] = useState(false);
  const [editScore, seteditScore] = useState(false);

  const handleSetDetails = (name, email, score) => {
    setEditFirstLast(name);
    seteditEmail(email);
    seteditScore(score);
  };

  return (
    <div className="m-4 rounded-xl border-4">
      {!editFirstLast && (
        <h1 className="text-2xl">
          {details["First Name"] + details["Last Name"]}
        </h1>
      )}
      <button>{!editFirstLast ? "Edit" : "Save"}</button>
      {!editEmail && <span>{details["Email"]}</span>}
      <button>{!editEmail ? "Edit" : "Save"}</button>
      {!editScore && <span>{details["Score"]}</span>}
      <button>{!editScore ? "Edit" : "Save"}</button>
      {() => handleSetDetails}
    </div>
  );
};

Profile.propTypes = {
  details: PropTypes.object,
};

export default Profile;
