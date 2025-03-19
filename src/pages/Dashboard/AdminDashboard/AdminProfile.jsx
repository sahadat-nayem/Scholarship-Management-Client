import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { motion } from "framer-motion";

const AdminProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // Check if user exists before accessing properties
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const onSubmit = async (data) => {
    try {
      if (!user) return;
      await updateUserProfile(data.name, data.image);
      window.location.reload();
      navigate(from);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Prevent rendering before user is loaded
  if (!user) {
    return (
      <div className="text-center py-20">
      <p className="text-xl font-bold flex items-center justify-center gap-1">
        Loading Profile
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          .
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 0.2 }}
        >
          .
        </motion.span>
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 0.4 }}
        >
          .
        </motion.span>
      </p>
    </div>
    );
  }

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
              value={displayName}
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
              value={photoURL}
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

export default AdminProfile;
