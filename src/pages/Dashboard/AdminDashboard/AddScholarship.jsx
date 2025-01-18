import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddScholarship = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.universityImage[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const scholarshipItem = {
        universityName: data.universityName,
        universityImage: data.universityImage,
        serviceCharge: parseFloat(data.serviceCharge),
        applicationFees: parseFloat(data.applicationFees),
        scholarshipCategory: data.scholarshipCategory,
        applicationDeadline: data.applicationDeadline,
        subjectName: data.subjectName,
        scholarshipDescription: data.scholarshipDescription,
        postDate: new Date(data.postDate).toISOString(),
        stipend: data.stipend,
        location: {
            country: data.location.country,
            city: data.location.city
          },
        universityImage: res.data.data.display_url,
      };
      const scholarshipRes = await axiosSecure.post(
        "/scholarship",
        scholarshipItem
      );
      console.log(scholarshipRes.data);
      if (scholarshipRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the scholarship.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <>
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <h3 className='text-3xl uppercase border-y-4 py-4'>Add Scholarship</h3>
        </div>
        <div className="bg-gray-100 p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">University Name</span>
            </label>
            <input
              type="text"
              placeholder="University Name"
              {...register("universityName", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <input
              type="text"
              placeholder="Country Name"
              {...register("location.country", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">City Name</span>
            </label>
            <input
              type="text"
              placeholder="City Name"
              {...register("location.city", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <input
              type="text"
              placeholder="Application Deadline"
              {...register("applicationDeadline", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Subject Name</span>
            </label>
            <input
              type="text"
              placeholder="Subject Name"
              {...register("subjectName", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Stipend</span>
            </label>
            <input
              type="text"
              placeholder="Stipend"
              {...register("stipend", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Post Date</span>
            </label>
            <input
              type="text"
              placeholder="Post Date"
              {...register("postDate", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Service Charge</span>
            </label>
            <input
              type="text"
              placeholder="Service Charge"
              {...register("serviceCharge", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* category */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Scholarship Category*</span>
            </label>
            <select
              defaultValue="default"
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
              placeholder="Application Fees"
              {...register("applicationFees", { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* recipe details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Scholarship Description</span>
          </label>
          <textarea
            {...register("scholarshipDescription")}
            className="textarea textarea-bordered h-24"
            placeholder="Scholarship Description"
          ></textarea>
        </div>

        <div className="form-control w-full my-6">
          <input
            {...register("universityImage", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button className="btn bg-gradient-to-r from-[#68e8ac] to-[#9edabe87] text-black">
          Add Item
        </button>
      </form>
    </div>
    </>
  );
};

export default AddScholarship;
