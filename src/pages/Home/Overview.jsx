import './Overview.css';

const Overview = () => {
    return (
        <div className="pb-8 pt-10 px-10 bg-slate-500 bg-opacity-10 featured-item bg-fixed text-white bg-blend-overlay bg-[#15151598] text-center bg-no-repeat bg-cover">
                <div className="md: ml-10">
                    <p className="text-2xl font-bold mb-5">CommunityForce Scholarship Management Software Overview</p>
                    <p className="uppercase font-semibold">Join us for a quick overview of our platform, or jump to sections that interest you most!</p>
                </div>
                <iframe className='mx-auto mt-8 w-[360px] md:w-[460px] lg:w-[560px] pr-5 ' height="315" src="https://www.youtube.com/embed/LLqf_vu-1uw?si=_2G3pPWMPSa6kd-I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
    );
};

export default Overview;