import Marquee from "react-fast-marquee";


const Marquees = () => {
    return (
        <div className="flex gap-2 items-center p-2 bg-black">
            <Marquee pauseOnHover={true} className="space-x-10 py-10">
                <p className="text-3xl font-bold text-white">“We originally had a paper process and in 2014 we chose CommunityForce scholarship management system as the tool to help us manage our application lifecycle as well as our refresher grants. CommunityForce platform has really streamlined our scholarship application process and eliminated the use of packets and binders to manage the hundreds of applications we get each cycle.............”</p>
            </Marquee>
        </div>
    );
};

export default Marquees;