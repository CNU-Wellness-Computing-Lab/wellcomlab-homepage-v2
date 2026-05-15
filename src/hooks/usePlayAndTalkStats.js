import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const TYPE_NAMES = ["Builder", "Explorer", "Collaborator", "Pioneer"];

function calculateStats(submissions, currentResultKey) {
  const totalCount = submissions.length;

  const typeCounts = [0, 0, 0, 0];
  let sameResultCount = 0;

  submissions.forEach((submission) => {
    if (!submission.resultKey) return;

    const [mainType] = submission.resultKey.split("-").map(Number);

    if (!Number.isNaN(mainType) && typeCounts[mainType] !== undefined) {
      typeCounts[mainType] += 1;
    }

    if (submission.resultKey === currentResultKey) {
      sameResultCount += 1;
    }
  });

  const typeDistribution = typeCounts.map((count, index) => ({
    type: index,
    name: TYPE_NAMES[index],
    count,
    percent: totalCount > 0 ? Math.round((count / totalCount) * 100) : 0,
  }));

  const sameResultPercent =
    totalCount > 0 ? Math.round((sameResultCount / totalCount) * 100) : 0;

  return {
    totalCount,
    typeDistribution,
    sameResultCount,
    sameResultPercent,
  };
}

export default function usePlayAndTalkStats(currentResultKey) {
  const [stats, setStats] = useState({
    totalCount: 0,
    typeDistribution: [],
    sameResultCount: 0,
    sameResultPercent: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentResultKey) return;

    const fetchStats = async () => {
      try {
        const q = query(
          collection(db, "playAndTalkSubmissions"),
          where("source", "==", "openlab-2026")
        );

        const snapshot = await getDocs(q);
        const submissions = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setStats(calculateStats(submissions, currentResultKey));
      } catch (error) {
        console.error("Failed to fetch Play&Talk stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [currentResultKey]);

  return { stats, loading };
}