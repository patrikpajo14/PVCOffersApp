import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchUsers = () => {
  return axios.get("/api/users");
};

export const useGetUsers = () => {
  return useQuery("users", fetchUsers, {
    select: (data) => {
      return data.data;
    },
  });
};

const updateUserStatus = (data) => {
  console.log("updateUserStatus", data);
  return axios.put(`/api/users/status`, data);
};

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
    onError: () => {
      toast.error("Status change failed!");
    },
  });
};
