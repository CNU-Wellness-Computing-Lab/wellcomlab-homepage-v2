import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import { playResults } from "../assets/playandtalk/playResult";

export default function usePlayAndTalkSubmissions(maxCount = 12) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const q = query(
          collection(db, "playAndTalkSubmissions"),
          orderBy("createdAt", "desc"),
          limit(maxCount)
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => {
          const submission = {
            id: doc.id,
            ...doc.data(),
          };

          const resultContent = playResults[submission.resultKey];

          return {
            ...submission,
            resultTitle: resultContent?.title || submission.resultKey,
            resultImage: resultContent?.image || "/images/results/default.png",
            resultKeywords: resultContent?.keywords || [],
          };
        });

        setSubmissions(data);
      } catch (error) {
        console.error("Failed to fetch Play&Talk submissions:", error);
        setSubmissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [maxCount]);

  return { submissions, loading };
}