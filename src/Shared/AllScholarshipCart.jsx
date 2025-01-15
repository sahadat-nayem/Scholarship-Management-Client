const AllScholarshipCart = ({ category }) => {
  const {
    universityName,
    scholarshipCategory,
    universityImage,
    applicationDeadline,
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
        <p>{scholarshipCategory}</p>
        <p>{subjectName}</p>
        <p>{applicationDeadline}</p>
        <p>{applicationFees}</p>
        <div className="card-actions">
          <button className="btn btn-outline text-[#BB8506] bg-gray-200 border border-b-2 w-full">Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllScholarshipCart;
