import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const UpdateScholarship = () => {

    const { register, handleSubmit, reset } = useForm();
  const { _id, subjectName, universityName, scholarshipCategory, applicationFees } = useLoaderData();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const scholarshipItem = {
      subjectName: data.subjectName,
      scholarshipCategory: data.scholarshipCategory,
      applicationFees: parseFloat(data.applicationFees),
      universityName: data.universityName,
    };
    console.log(scholarshipItem);
    

    try {
      const scholarshipRes = await axiosSecure.patch(`/scholarship/update/${_id}`, scholarshipItem);
      console.log(_id);
      
      if (scholarshipRes.data.modifiedCount > 0) {
        console.log("API Response:", scholarshipRes.data);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.universityName} is updated.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error updating scholarship:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "There was an error updating the scholarship.",
      });
    }
  };
    

    return (
        <div className="bg-gray-100 p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Subject Name*</span>
            </label>
            <input
              type="text"
              defaultValue={subjectName}
              placeholder="Subject Name"
              {...register("subjectName", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Subject Name*</span>
            </label>
            <input
              type="text"
              defaultValue={universityName}
              placeholder="University Name"
              {...register("universityName", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Scholarship Category*</span>
              </label>
              <select
                defaultValue={scholarshipCategory}
                {...register("scholarshipCategory", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="MBA">MBA</option>
                <option value="PhD">PhD</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Application Fees</span>
              </label>
              <input
                type="text"
                defaultValue={applicationFees}
                placeholder="Application Fees"
                {...register("applicationFees", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <button className="btn bg-gradient-to-r from-[#68e8ac] to-[#9edabe87] text-black">
            Update Scholarship
          </button>
        </form>
      </div>
    );
};

export default UpdateScholarship;