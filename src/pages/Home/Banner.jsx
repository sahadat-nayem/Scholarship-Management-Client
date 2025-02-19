import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://i.ibb.co.com/99pv7drg/education-scholarship-web-banner-design-free-vector.jpg"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/JF8rpTtY/student-loan-program-web-banner-design-students-do-the-student-exchange-signatures-on-unrolled-stude.jpg"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/21XvZtRp/images.jpg"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/x8Xfrz4X/images-2.jpg"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/cKD1b0Nq/images-1.jpg"/>
                </div>
        </Carousel>
    );
};

export default Banner;