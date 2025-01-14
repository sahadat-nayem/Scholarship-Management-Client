import { FaGraduationCap } from "react-icons/fa6";
import CountUp from "react-countup";

const Organizations = () => {
  const counts = [
    { label: "Scholarship Applications Processed", value: 159072630 },
    { label: "Awarded", value: 428235232 },
  ];

  return (
    <div className="md:flex mt-20 px-10 grayscale">
      <div className="w-4/6">
        <div>
          <h3 className="text-2xl font-semibold md:px-20">
            Hundreds of Organizations use CommunityForce Scholarship Management
            System to achieve their goals.
          </h3>
        </div>
        <div className="flex size-20 md:size-32 mt-5 mb-5 lg:size-44 gap-5">
          <img
            src="https://i.ibb.co.com/DQPgRjK/images-removebg-preview.png"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/b2XfShq/images-1-removebg-preview-1.png"
            alt=""
          />
          <img
            src="https://i.ibb.co.com/dD5Tgdm/images-removebg-preview-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="rounded-lg py-10 px-5 text-center w-3/6 gap-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Hundreds of Organizations Worldwide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-56">
          {counts.map((count, index) => (
            <div
              key={index}
              className="rounded-lg transform transition duration-300 hover:scale-105"
            >
                <FaGraduationCap className="text-6xl" />
              <div className="text-4xl font-bold mb-2">
                <CountUp
                  start={0}
                  end={count.value}
                  duration={2.5}
                  delay={0}
                  formattingFn={(value) => value.toLocaleString()}
                />
              </div>
              <p className="text-gray-600 font-medium">{count.label}</p>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default Organizations;
