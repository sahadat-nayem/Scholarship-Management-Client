
import { Link } from "react-router-dom";

const AllScholarshipCart = ({ category }) => {
  const {
    _id,
    universityName,
    scholarshipCategory,
    universityImage,
    applicationDeadline,
    location,
    subjectName,
    applicationFees,
  } = category;

  return (
      <div className="card bg-base-100 w-96 shadow-xl mb-5">
        <figure className="px-10 pt-10">
          <img
            src={universityImage}
            alt={universityName}
            className="rounded-xl max-h-32"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{universityName}</h2>
          <p>Category : {scholarshipCategory}</p>
          <p>Subject Name : {subjectName}</p>
          <p>Country : {location.country}</p>
          <p>City : {location.city}</p>
          <p>Application Deadline : {applicationDeadline}</p>
          <p>Application Fee : {applicationFees}</p>
          <div className="card-actions">
            <Link
               to={`/scholarshipDetails/${_id}`}
              className="btn btn-outline glass bg-black text-white border border-b-2 w-full"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
  );
};

export default AllScholarshipCart;
