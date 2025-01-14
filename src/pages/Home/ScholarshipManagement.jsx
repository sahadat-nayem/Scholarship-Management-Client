const ScholarshipManagement = () => {
  return (
    <div className="md:flex gap-3 p-10 mt-5 items-center bg-[#9edabe2e]">
      <div>
        <h3 className="text-4xl mb-3 font-bold">
          <span className="text-red-500">AI enabled</span> all-in-one
          Scholarship Management Software for scholarship providers
        </h3>
        <p>
          Create a smooth-running scholarship application process with
          Communityforce, a platform to help universities, educational
          institutions, foundations, associations, colleges and corporations
          manage their entire scholarship lifecycle in one centralized solution.
        </p>
      </div>
      <div className="max-w-screen-lg">
        <iframe
        className="md:w-[560px] w-[360px]"
          height="315"
          src="https://www.youtube.com/embed/7wbOGDVtJ7o?si=u1oVKqP1qCXVY13i"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ScholarshipManagement;
