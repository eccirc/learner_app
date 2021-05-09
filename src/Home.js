import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = ({ title, learnerList, isAdmin }) => {
  const average = () => {
    let count = 0;
    learnerList.forEach((element) => {
      count += Number(element.Score);
    });
    return count / learnerList.length;
  };

  return (
    <div className="home mt-4 mx-16">
      <h1 className="font-bold text-pink-400 text-4xl p-2">
        {title + "Learner Average Score: " + " " + Math.floor(average())}{" "}
      </h1>
      <div className="flex flex-wrap w-full">
        {learnerList.map(
          (list, index) =>
            isAdmin && (
              <Link to={`/profile/${list.id}`} key={index}>
                <div className="learners-list justify-center border-4 m-1 flex-col items-center">
                  <h2 className="text-gray-600">
                    {list["First Name"] + " " + list["Last Name"]}
                  </h2>
                  <p className="text-white">view details</p>
                </div>
              </Link>
            )
        )}
        {!isAdmin &&
          learnerList.map((list, index) => (
            <div
              key={index}
              className="learners-list justify-center border-4 m-1 flex-col items-center"
            >
              <h2 className="text-gray-600">
                {list["First Name"] + " " + list["Last Name"]}
              </h2>
              <p className="text-white">login to view details</p>
            </div>
          ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string,
  learnerList: PropTypes.array,
  isAdmin: PropTypes.bool,
};

export default Home;
