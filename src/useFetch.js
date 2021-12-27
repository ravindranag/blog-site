import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { dbContext } from './App';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const abortFetch = new AbortController();

    //     fetch(url, { signal: abortFetch.signal })
    //         .then(res => {
    //             // console.log(res);
    //             if(!res.ok)
    //             throw Error(`${res.status} : ${res.statusText}`);
    //             else
    //             return res.json();
    //         })
    //         .then(data => {
    //             // console.log(data);
    //             setData(data);
    //             setError(null);
    //             setIsPending(false);
    //         })
    //         .catch(error => {
    //             setError(error.message);
    //             setIsPending(null);
    //             console.log(error.message);
    //         });

    //         return () => abortFetch.abort();

    // }, [url]);
    const db = useContext(dbContext);
    useEffect(() => {
        
        const blogs = [];
        const querySnapshot = getDocs(collection(db, "blogs"));
        querySnapshot
            .then(res => {
                res.forEach(doc => {
                    const obj =  doc.data();
                    obj.id = doc.id;
                    blogs.push(obj);
                });
                // console.log(blogs);
                setData(blogs);
                setIsPending(false);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setIsPending(null);
                console.log(error.message);
            });
    }, [db]);
    return {data, isPending, error};
};
 
export default useFetch;