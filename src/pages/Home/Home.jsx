import Banner from "./Banner";
import Organizations from "./Organizations";
import Overview from "./Overview";
import ScholarshipManagement from "./ScholarshipManagement";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ScholarshipManagement></ScholarshipManagement>
            <Organizations></Organizations>
            <Overview></Overview>
        </div>
    );
};

export default Home;