import { useEffect, useState } from "react";


const useScholarship = () => {
    const [scholarship, setScholarship] = useState([]);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            fetch('http://localhost:5000/scholarship')
                .then(res => res.json())
                .then(data => {
                    setScholarship(data);
                    setLoading(false);
                })
        }, [])
        return [scholarship, loading]
};

export default useScholarship;