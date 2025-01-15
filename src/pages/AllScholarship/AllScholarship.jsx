import React from "react";
import { Helmet } from "react-helmet";
import useScholarship from "../../hooks/useScholarship";
import AllScholarshipCart from "../../Shared/AllScholarshipCart";

const AllScholarship = () => {
  const [Scholarships] = useScholarship();
  return (
    <div>
      <Helmet>
        <title>Scholarship Management | All Scholarship</title>
      </Helmet>
      <div
        className="hero min-h-screen mb-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/ZN71R3M/i-Stock-1142918319-WENR-Ranking-740-430.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Information of universities and collage offering scholarships</h1>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Scholarships.length > 0 ? (
        Scholarships.map((category) => (
          <AllScholarshipCart
            key={category._id}
            category={category}
          ></AllScholarshipCart>
        ))
      ) : (
        <p>No scholarships available at the moment.</p>
      )}
      </div>
    </div>
  );
};

export default AllScholarship;
