import Banner from "./Banner";
import CollegeSlider from "./CollegeSlider";
import Marquees from "./Marquees";
import Organizations from "./Organizations";
import Overview from "./Overview";
import ScholarshipManagement from "./ScholarshipManagement";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Marquees></Marquees>
            <ScholarshipManagement></ScholarshipManagement>
            <Organizations></Organizations>
            <Overview></Overview>
            <CollegeSlider></CollegeSlider>
        </div>
    );
};

export default Home;