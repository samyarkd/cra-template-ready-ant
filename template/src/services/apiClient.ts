import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    console.warn("Error status", error.response.status);
    if (error.response.status === 401) {
      setTimeout(() => {
        localStorage.removeItem("token");
        window.location.reload();
      }, 1000);
    } else if (error.response.status === 0) {
      console.log(error.response.status);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
