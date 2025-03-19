import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      await updateUserProfile(data.name, data.image);
      window.location.reload(); // Page reload to reflect changes immediately
      navigate(from);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="my-3 lg:my-12">
      <div className="bg-base-200 py-10">
        <Helmet>
          <title>MedShop | Update Profile</title>
        </Helmet>
        <h1 className="text-center text-4xl font-bold">Update Your Profile</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-3/4 lg:w-1/2 mx-auto py-12"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              defaultValue={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              {...register("image")}
              defaultValue={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
