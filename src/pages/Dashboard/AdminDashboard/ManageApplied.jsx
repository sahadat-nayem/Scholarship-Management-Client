import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useEffect, useState } from "react";

const ManageApplied = () => {
  const [apply, setApply] = useState([]);
  const [sortType, setSortType] = useState("");
  const axiosSecure = useAxiosSecure();

  const fetchApplications = async (sortBy = "") => {
    const res = await axiosSecure.get(`/apply?sortBy=${sortBy}`);
    setApply(res.data);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleSortChange = async (e) => {
    const value = e.target.value;
    setSortType(value);
    fetchApplications(value);
  };

  const handleDeleteItem = (item) => {
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
        const res = await axiosSecure.delete(`/apply/${item._id}`);
        if (res.data.deletedCount > 0) {
          setApply(apply.filter((a) => a._id !== item._id));
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
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl uppercase border-y-4 py-4">
          All Applied Scholarships
        </h3>
      </div>
      <div className="text-center my-4">
        <select
          className="border border-purple-500 p-2 rounded"
          value={sortType}
          onChange={handleSortChange}
        >
          <option value="">Sort By All Applied Scholarships</option>
          <option value="appliedDate">Applied Date</option>
          <option value="applicationDeadline">Scholarship Deadline</option>
        </select>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>University Image</th>
                <th>University Name</th>
                <th>Application Fees</th>
                <th>Email</th>
                <th>Details</th>
                <th>Feedback</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {apply.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.universityImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.universityName}</td>
                  <td className="text-right">${item.applicationFees}</td>
                  <td className="text-right">{item.email}</td>
                  <td>
                    <button className="btn btn-ghost btn-md bg-[#9edabe]">
                      <BiSolidMessageAltDetail className="text-black"></BiSolidMessageAltDetail>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-ghost btn-md bg-[#9edabe]">
                      <MdFeedback className="text-black"></MdFeedback>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
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
    </div>
  );
};

export default ManageApplied;
