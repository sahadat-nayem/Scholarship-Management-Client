import { Link, useLoaderData } from "react-router-dom";

const ScholarshipDetails = () => {
  const {
    universityName,
    scholarshipCategory,
    universityImage,
    applicationDeadline,
    location,
    subjectName,
    applicationFees,
    scholarshipDescription,
    stipend,
    postDate,
    serviceCharge

  } = useLoaderData();

  return (
    <div className="card bg-base-100 max-w-[760px] shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={universityImage} className="rounded-xl max-w-96 max-h-96" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{universityName}</h2>
        <p>Subject Name : {subjectName}</p>
        <p>Category : {scholarshipCategory}</p>
        <p>Application Deadline : {applicationDeadline}</p>
        <p>Country: {location?.country}</p>
        <p>City: {location?.city}</p>
        <p>Service Charge : {serviceCharge}</p>
        <p>Scholarship Description : {scholarshipDescription}</p>
        <p>Stipend : {stipend}</p>
        <p>Post Date : {postDate}</p>
        <p>Application Fees : {applicationFees}</p>
        <div className="card-actions">
          <Link className="btn btn-info md:w-96">Apply</Link>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
