// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


const MyProfile = () => {

    // const { email } = useParams();
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch(`/user/${email}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setUser(data);
    //         setLoading(false);
    //     })
    //     .catch((error) => {
    //         console.error('Error fetching user data:', error);
    //         setLoading(false);
    //     });
    // }, [email]);

    // if (loading) {
    //     return <div>Loading...</div>; // লোডিং অবস্থায় দেখাবে
    // }

    // if (!user) {
    //     return <div>User not found</div>; // যদি ব্যবহারকারী না মেলে
    // }

    return (
    //     <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
    //   <img
    //     src={user.image || '/default-avatar.png'}
    //     alt="User Avatar"
    //     style={{ width: '100px', borderRadius: '50%' }}
    //   />
    //   <h2>{user.name}</h2>
    //   <p>Email: {user.email}</p>
    //   {user.role && user.role !== 'user' && <p>Role: {user.role}</p>}
    // </div>
    <div></div>
    );
};

export default MyProfile;