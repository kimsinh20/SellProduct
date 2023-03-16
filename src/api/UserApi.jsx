import axiosClient from "./axiosClient";

const UserApi = {
    register: (data) => {
        const url = "/api/v1/signup";
        return axiosClient.post(url, data);
    },
    login: (data) => {
        const url = "/api/v1/signin";
        return axiosClient.post(url, data);
    }
}
export default UserApi;