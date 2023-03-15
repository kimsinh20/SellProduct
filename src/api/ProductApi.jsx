import axiosClient from "./axiosClient";

const ProductApi = {
    getAll: (params) => {
        const url = "/products";
        return axiosClient.get(url, { params });
    },
    getProductTrending : (params) => {
     const url = "/products/trending";
     return axiosClient.get(url,{params});
    },
    getProductId: (id) => {
        const url = "/products/" + id;
        return axiosClient.get(url);
    }
}
export default ProductApi;