import axios from "axios";
import { toast } from "vue-sonner"
/**
 * Axios plugin 
 */
export default defineNuxtPlugin((NuxtApp) => {
/*   const config = useRuntimeConfig(); */
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://ec2-3-17-148-180.us-east-2.compute.amazonaws.com:3001";
  axios.interceptors.response.use(function(response) {
    return response;
  }, function(error){
    // Do something with response error
    const router = useRouter();
    if(error.response.status === 400){
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
