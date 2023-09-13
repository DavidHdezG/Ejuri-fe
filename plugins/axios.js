import axios from "axios";
import { toast } from "vue-sonner"
export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.withCredentials = true;

  axios.defaults.baseURL = "http://ec2-18-224-54-81.us-east-2.compute.amazonaws.com:3000";
  axios.interceptors.response.use(function(response) {
    return response;
  }, function(error){
    const router = useRouter();
    if(error.response.status === 400){
      toast.error(error.response.data.message);
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
