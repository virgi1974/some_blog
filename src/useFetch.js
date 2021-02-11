import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('use effect was run');

    setTimeout(() => {
      fetch(url)
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
          // console.error(err.message);
          setisPending(false);
          setError(err.message);
        })
    }, 1000)

  }, [url])

  return {data, isPending, error}
}

export default useFetch;