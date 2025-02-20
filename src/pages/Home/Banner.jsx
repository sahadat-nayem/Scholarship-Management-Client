import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://i.ibb.co.com/hRkvTg68/What-are-Merit-based-Scholarships-and-How-to-Manage-Them-Featured-Image-22-Jan-2024.webp"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/4RxMgRH0/What-are-Need-based-Scholarships-and-How-to-Manage-Them-Featured-Image-29-Jan-2024.webp"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/67LCPkFQ/Benefits-of-Need-Based-Scholarships-Internal-Image-29-Jan-2024.webp"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/d0bvgwkv/635981465057592148-Thinkstock-Photos-531313679-1.webp"/>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/svyqsMnc/8-Types-Of-Scholarship-Funds-And-How-Does-Each-One-Work.webp"/>
                </div>
        </Carousel>
    );
};

export default Banner;