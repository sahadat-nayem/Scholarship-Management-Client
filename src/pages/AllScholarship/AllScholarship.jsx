import React, { useState} from "react";
import { Helmet } from "react-helmet";
import useScholarship from "../../hooks/useScholarship";
import AllScholarshipCart from "../../Shared/AllScholarshipCart";
import { useLocation, useNavigate } from "react-router-dom";

const AllScholarship = () => {
  const [Scholarships] = useScholarship();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParam = new URLSearchParams(location.search).get("search") || "";
  const [search, setSearch] = useState(searchParam);

  const [currentPage, setCurrentPage] = useState(1);
  const scholarshipsPerPage = 6;

  const handleSearch = (e) => {
    const newSearch = e.target.value.toLowerCase();
    setSearch(newSearch);
    setCurrentPage(1);
    navigate(`?search=${newSearch}`);
  };

  const filteredScholarships = Scholarships.filter((category) =>
    category.universityName.toLowerCase().includes(search)
  );

  // Pagination logic
  const indexOfLastScholarship = currentPage * scholarshipsPerPage;
  const indexOfFirstScholarship = indexOfLastScholarship - scholarshipsPerPage;
  const currentScholarships = filteredScholarships.slice(
    indexOfFirstScholarship,
    indexOfLastScholarship
  );

  const totalPages = Math.ceil(filteredScholarships.length / scholarshipsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <h1 className="mb-5 text-5xl font-bold">
              Information of universities and colleges offering scholarships
            </h1>
          </div>
        </div>
      </div>
      <div className="justify-center text-center mt-5 mb-10">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search popular University Name"
          className="input input-bordered input-primary w-full max-w-2xl"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentScholarships.length > 0 ? (
          currentScholarships.map((category) => (
            <AllScholarshipCart
              key={category._id}
              category={category}
            ></AllScholarshipCart>
          ))
        ) : (
          <p>No scholarships available at the moment.</p>
        )}
      </div>
      {/* Pagination Component */}
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`btn mx-1 ${
              currentPage === index + 1 ? "btn-warning" : "btn-outline"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllScholarship;
