import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      {user && user?.email ? (
        <div className="">
          <img
            className="size-20 md:size-36 rounded-full relative md:left-[220px] left-[45px] lg:left-[360px] border-2 to-blue-900"
            src={user?.photoURL}
            alt=""
          />
          <span className="text-5xl font-bold relative md:left-28 lg:left-60 top-4 lg:top-8">
            {user?.displayName}
          </span>
        </div>
      ) : (
        <div>
          <h3>User profile is not available</h3>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
