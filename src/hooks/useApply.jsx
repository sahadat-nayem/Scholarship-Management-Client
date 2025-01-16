import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useApply = () => {
    const axiosSecure = useAxiosSecure();
    const { user} = useAuth();
    const { refetch, data: apply = [] } = useQuery({
        queryKey: ['apply', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/apply?email=${user.email}`);
            return res.data;
        }
    })

    return [apply, refetch]
};

export default useApply;