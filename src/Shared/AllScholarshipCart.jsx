

const AllScholarshipCart = ({category}) => {

    const {universityName, scholarshipCategory, universityImage, applicationDeadline, subjectName, applicationFees} = category;

    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[80px] h-[80px]' src={universityImage} alt="" />
            <div>
                <h3 className='uppercase'>{universityName}---</h3>
                <p className='text-sm'>{scholarshipCategory}</p>
            </div>
            <p className='text-yellow-600'>{applicationFees}</p>
        </div>
    );
};

export default AllScholarshipCart;