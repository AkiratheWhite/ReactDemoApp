import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        //Fetch makes a request, then returns a promise to the Response to the request.
        setTimeout(() => {
            fetch(url, {signal: abortController.signal}).then(resp => {
                if (!resp.ok) {
                    throw Error('Data could not be fetched.');
                }
                return resp.json()
            }).then((data) => {
                setError(null);
                setData(data);
                setIsPending(false);
            }).catch((err) => { //Catches failure to connect errors and errors thrown manually.
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted.');
                }
                else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
            
         }, 1000);
        
        return () => abortController.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;