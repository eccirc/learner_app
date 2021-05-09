import { useState, useEffect } from "react";
import { storeDB } from "./firebaseConfig";

const useFirestore = (collection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //let dataArray = [];
  let isNewData = null;

  useEffect(() => {
    const abortCont = new AbortController();

    storeDB.collection(collection).onSnapshot((snapshot) => {
      isNewData = snapshot;
    });

    storeDB.collection(collection).onSnapshot(
      (snapshot) => {
        var profiles = [];
        snapshot.forEach((doc) => {
          profiles.push(doc.data());
        });
        setData(profiles);
        setIsPending(false);
        setError(null);
      },
      (error) => {
        if (!error.name === "AbortError") {
          setIsPending(false);
          setError(error.message);
        } else setError(error.message);
      }
    );

    // storeDB
    //   .collection(collection)
    //   .get({ signal: abortCont.signal })
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       dataArray.push(doc.data());
    //     });
    //     setData(dataArray);
    //     setError(null);
    //     setIsPending(false);
    //   })
    //   .catch((err) => {
    //     if (!err.name === "AbortError") {
    //       setIsPending(false);
    //       setError(err.message);
    //     }
    //   });
    return () => {
      abortCont.abort();
    };
  }, [isNewData]);

  return { data, isPending, error };
};

export default useFirestore;
