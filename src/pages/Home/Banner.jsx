import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src="https://i.ibb.co.com/q7wbHRX/1712898622176.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/Ks8FgJ6/Automate-workflows.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/0GVv0QP/monitor-impact.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/0GVv0QP/monitor-impact.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/8rVNGP2/Fellowship-Management.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/f9tSJ8K/design-of-students-take-money-in-trophy-outstanding-students-receive-scholarship-support-for-tuition.jpg" />
                </div>
        </Carousel>
    );
};

export default Banner;