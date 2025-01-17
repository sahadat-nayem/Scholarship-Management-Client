import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useScholarship from "../../../hooks/useScholarship";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageScholarship = () => {
  const [scholarship, ,refetch] = useScholarship();
  const axiosSecure = useAxiosSecure();

  const handleDeleteScholarship = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/scholarship/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.universityName} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Scholarship name</th>
              <th>University Name</th>
              <th>Degree</th>
              <th>Application Fees</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {scholarship.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  {item.subjectName}
                </td>
                <td>{item.universityName}</td>
                <td>${item.scholarshipCategory}</td>
                <td className="text-right">${item.applicationFees}</td>
                <td>
                  <Link to={`/scholarshipDetails/${item._id}`}>
                    <button className="btn btn-ghost btn-md bg-[#9edabe]">
                      <BiSolidMessageAltDetail
                        className="text-black 
                                        "
                      ></BiSolidMessageAltDetail>
                    </button>
                  </Link>
                </td>
                <td>
                  {/* <Link to={`/dashboard/updateItem/${item._id}`}> */}
                    <button className="btn btn-ghost btn-md bg-[#9edabe]">
                      <FaEdit
                        className="text-black 
                                        "
                      ></FaEdit>
                    </button>
                  {/* </Link> */}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteScholarship(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageScholarship;
