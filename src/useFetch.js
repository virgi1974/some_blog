import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('use effect was run');
    
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          console.log(res);
          if (!res.ok) {
            throw Error('could not fetch data from DB')
          }
          return res.json();
        })
        .then(data => {
          // console.log("-- data from json file --");
          console.table(data);
          setData(data);
          setisPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            // console.error(err.message);
            setisPending(false);
            setError(err.message);
          }
        })
    }, 1000)

    // we return a cleanup function
    return () => abortCont.abort();

  }, [url])

  return {data, isPending, error}
}

export default useFetch;