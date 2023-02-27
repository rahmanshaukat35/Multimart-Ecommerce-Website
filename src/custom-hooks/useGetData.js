import { useState, useEffect } from "react";
import { firestore } from "../config";
import { collection, onSnapshot } from "firebase/firestore";

export default function useGetData(collectionName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const collectionRef = collection(firestore, collectionName);
  useEffect(() => {
    const getData = async () => {
      // firebase firestore realtime data update
      await onSnapshot(collectionRef, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoading(false);
      });
    };
    getData();
  }, []);
  return { data, loading };
}
