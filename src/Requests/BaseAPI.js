import axios from 'axios'
import store from '../Store/Store';
import { authAction } from '../Store/Slice/authSlice';
import { useDispatch } from 'react-redux';

const baseURL = import.meta.env.VITE_BACKEND_BASEURL

const api = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    withCredentials: true,
  });

const addHeader = () => {
    const authState = store.getState().auth
    if (authState.accessToken) {
        console.log("token:", authState.accessToken)
        api.defaults.headers.common['authorization'] = `Bearer ${authState.accessToken}`;
    }
}

const useAxiosInterceptor = () => {
    const dispatch = useDispatch();
    
    api.interceptors.response.use((response) => response, async (error) => {
        // whatever you want to do with the error
        console.log(error)
    
        if (error?.response?.status === 440) { // Token Expired
            const refreshResult = await api.post('/api/auth/refresh')

            if (refreshResult.data) {
                console.log("refreshing token...")
                dispatch(authAction.setAuth({...refreshResult.data}))
            } else {

                if (refreshResult?.error?.status === 403) {
                    refreshResult.error.data.message = "Your login has expired. "
                }
                return refreshResult
            }
        }
        return error;
      });

  };

export { api as default, addHeader, useAxiosInterceptor }