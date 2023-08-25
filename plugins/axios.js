import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.withCredentials = true;
  /* axios.defaults.baseURL = "https://ejuri-be.onrender.com"; */
  axios.defaults.baseURL = "http://localhost:3001";
  axios.interceptors.response.use(function(response) {
    return response;
  }, function(error){
    const router = useRouter();
    if(error.response.status === 401){
      /* NuxtApp.$router.push('/login'); */
    }else if(error.response.status === 403){
      router.push('/errors/403');
      /* NuxtApp.$router.push('/errors/403'); */
    }else if(error.response.status === 404){
      /* NuxtApp.$router.push('/login'); */
    }else if(error.response.status === 500){
      /* NuxtApp.$router.push('/login'); */
    }


    return Promise.reject(error);
  })

  return {
    provide: {
      axios: axios,
    },
  };
});
