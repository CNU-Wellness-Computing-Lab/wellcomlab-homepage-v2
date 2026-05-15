import { useEffect, useState } from "react";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "../firebase/firebase";


export default function usePlayAndTalkCount() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const collRef = collection(db, "playAndTalkSubmissions");
        const snapshot = await getCountFromServer(collRef);

        setCount(snapshot.data().count);
      } catch (error) {
        console.error("Failed to fetch playAndTalk count:", error);
        setCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);
  return { count, loading };
}