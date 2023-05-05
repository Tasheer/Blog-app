
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data,setData] = useState(null);

    const [pending,setPending] = useState(true);

    const [error,setError] = useState(null);


    
    useEffect(() => {

        const abortConst = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortConst.signal} )
            
            .then(res => {
                
                if(!res.ok){
                    throw Error("Cann't process your request right now")
                }
                return res.json ();
            })
            .then (data => {
                setError(null)
                setData(data);
                setPending(false);
                
            })
            
            .catch(err => {

                if(err.name === "AbortError") {
                    console.log('fetch aborted');
                }
                else{
                    setPending(false)
                    setError(err.message);
                }
                    
            })
        }, 1000);

        return () => abortConst.abort();

    }, [url]);

    return {data, pending, error}

}

export default useFetch;