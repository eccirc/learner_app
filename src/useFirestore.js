import { useState, useEffect } from "react";
import { storeDB } from "./firebaseConfig";

const useFirestore = (collection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  let dataArray = [];

  useEffect(() => {
    const abortCont = new AbortController();

    storeDB
      .collection(collection)
      .get({ signal: abortCont.signal })
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dataArray.push(doc.data());
        });
        setData(dataArray);
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        if (!err.name === "AbortError") {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => {
      abortCont.abort();
    };
  }, []);

  return { data, isPending, error };
};

export default useFirestore;
