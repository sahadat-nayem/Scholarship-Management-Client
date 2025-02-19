import { Helmet } from "react-helmet-async";

import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

const CollegeSlider = () => {
  return (
    <div className="p-20">
      <Helmet>
        <title>Scholarship Management | Home</title>
      </Helmet>
      <div>
        <Marquee speed={50} gradient={false}>
          <img
            style={{ marginRight: "50px" }}
            
            src="https://i.ibb.co.com/DQPgRjK/images-removebg-preview.png"
          />
          <img
            style={{ marginRight: "50px" }}
            src="https://i.ibb.co.com/b2XfShq/images-1-removebg-preview-1.png"
          />
          <img
            style={{ marginRight: "50px" }}
            src="https://i.ibb.co.com/dD5Tgdm/images-removebg-preview-1.png"
          />
          <img
            style={{ marginRight: "50px" }}
            src="https://i.ibb.co.com/wsQtvtW/images-2-removebg-preview.png"
          />
          <img
            style={{ marginRight: "50px" }}
            src="https://i.ibb.co.com/HF99pPb/images-1-removebg-preview-2.png"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default CollegeSlider;
