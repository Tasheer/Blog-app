// usefetch.js


// import { useState, useEffect } from "react";

// const useFetch = (url) => {

//     const [data,setData] = useState(null);

//     const [pending,setPending] = useState(true);

//     const [error,setError] = useState(null);


    
//     useEffect(() => {

//         this is how we make an abort controller 
//         const abortConst = new AbortController();

//         setTimeout(() => {
//             you can associate abort controller  with the fetch by adding a second argument to fetch
//             fetch(url, {signal: abortConst.signal} )
            
//             .then(res => {
                
//                 if(!res.ok){
//                     throw Error("Cann't process your request right now")
//                 }
//                 return res.json ();
//             })
//             .then (data => {
//                 setError(null)
//                 setData(data);
//                 setPending(false);
                
//             })
            
//             when we abort then fetch throws an error which is being catched by this .catch we are not updating the data but we are still updating the state 
//             so we are using an if statement that if the error is being caused by our abort then we don't want to update the state
//             .catch(err => {

//                 if(err.name === "AbortError") {
//                     console.log('fetch aborted');
//                 }
//                 but if the error is of some other type then we want to know
//                 else{
//                     setPending(false)
//                     setError(err.message);
//                 }
                    
//             })
//         }, 1000);

//         by using the below command we are aborting the fetch/ pausing the fetch 
//         return () => abortConst.abort();

//     }, [url]);

//     return {data, pending, error}

// }

// export default useFetch;