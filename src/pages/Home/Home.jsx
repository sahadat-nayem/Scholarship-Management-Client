import { useLoaderData } from "react-router-dom";
import CollegeSlider from "./CollegeSlider";
import Marquees from "./Marquees";
import Organizations from "./Organizations";
import Overview from "./Overview";
import ScholarshipManagement from "./ScholarshipManagement";
import TopScholarship from "./TopScholarship";
import Banner from "./Banner/Banner";


const Home = () => {

    const categorys = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Marquees></Marquees>
            <ScholarshipManagement></ScholarshipManagement>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto">
                {
                    categorys.map(category => <TopScholarship category={category} key={category._id}></TopScholarship>)
                }
            </div>
            <Organizations></Organizations>
            <Overview></Overview>
            <CollegeSlider></CollegeSlider>
        </div>
    );
};

export default Home;