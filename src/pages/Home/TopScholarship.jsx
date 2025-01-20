import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init();

const TopScholarship = ({ category }) => {
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
    <div className="card bg-base-100 w-96 border rounded-md hover:rounded-xl border-black hover:shadow-2xl mb-5" data-aos="fade-right">
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
            className="btn btn-outline text-[#BB8506] bg-gray-200 border border-b-2 w-full"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopScholarship;
