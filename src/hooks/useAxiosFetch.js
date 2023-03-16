import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  useEffect(()=>{
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) =>{
        setIsloading(true);
        try{
            const response = await axios.get(url,{
                cancelToken:source.token
            });
            if(isMounted){
                setData(response.data);
                setFetchError(null);
            }
        }catch(err){
            if(isMounted){
                setFetchError(err.message);
                setData([]);
            }            
        }finally{
            // isMounted && setTimeout(()=>setIsloading(false),1000);
            isMounted && setIsloading(false);
        }
    }
    fetchData(dataUrl);
    const cleanUp = () =>{
        //console.log('clean up function');
        isMounted = false;
        source.cancel();
    }
    return cleanUp;
  },[dataUrl]);
  return {data, fetchError, isLoading};
}
export default useAxiosFetch;