import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ title, learnerList }) => {
  return (
    <div className="home mt-4 mx-16">
      <h1 className="font-bold text-pink-400 text-4xl p-2">{title}</h1>
      <div className="flex flex-wrap w-full">
        {learnerList.map((list, index) => (
          <Link to="/profile" key={index}>
            <div className="learners-list justify-center border-4 m-1 flex-col items-center">
              <h2>{list["First Name"] + " " + list["Last Name"]}</h2>
              <p className="text-white">view details</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  learnerList: PropTypes.array,
};

export default Home;
