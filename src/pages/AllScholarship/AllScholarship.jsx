import React from "react";
import { Helmet } from "react-helmet";
import useScholarship from "../../hooks/useScholarship";
import AllScholarshipCart from "../../Shared/AllScholarshipCart";

const AllScholarship = () => {

    const [Scholarships] = useScholarship();
    console.log("Fetched Scholarships:", Scholarships);
    const Scholarship = Scholarships.filter(category => category.scholarshipCategory === 'Scholarship');
    


  return (
    <div>
      <Helmet>
        <title>Scholarship Management | All Scholarship</title>
      </Helmet>
      {
        Scholarship.map(category => <AllScholarshipCart key={category._id} category={category}></AllScholarshipCart>)
      }
    </div>
  );
};

export default AllScholarship;
