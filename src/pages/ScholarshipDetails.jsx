import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useApply from "../hooks/useApply";

const ScholarshipDetails = () => {
  const {
    _id,
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
    serviceCharge,
  } = useLoaderData();

  const { user } = useAuth();
  const navigate = useNavigate();
  const locations = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useApply();

  const handleApply = () => {
    if (user && user.email) {
      // Sand cart item to database

      const applyItem = {
        menuId: _id,
        email: user.email,
        universityName,
        universityImage,
        applicationFees,
      };
      axiosSecure.post("/apply", applyItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${universityName} added to apply`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add to Scholarship Apply!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Send user to login page
          navigate("/login", { state: locations.pathname });
        }
      });
    }
  };

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
          <button onClick={handleApply} className="btn btn-info md:w-96">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;
