import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyApplication = () => {

    const { user} = useAuth();
    const { refetch, data: apply = [] } = useQuery({
        queryKey: ['apply', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/apply?email=${user.email}`);
            return res.data;
        },
    });
    const totalPrice = apply.reduce((total, item) => total + item.applicationFees, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/myApply/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Scholarship has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
      };

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items: {apply.length}</h2>
        <h2 className="text-4xl">Total Fees: ${totalPrice}</h2>
        {apply.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table  w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>University Name</th>
              <th>University Address</th>
              <th>Applied Degree</th>
              <th>Application Fees</th>
              <th>Service Charge</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {apply.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
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
                <td>{item.location.country}</td>
                <td>{item.scholarshipCategory}</td>
                <td>${item.applicationFees}</td>
                <td>{item.serviceCharge}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
