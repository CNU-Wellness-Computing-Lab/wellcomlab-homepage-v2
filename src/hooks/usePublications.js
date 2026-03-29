
import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getYear } from "../layout/Utils";

export default function usePublications() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState("all");

  useEffect(() => {
    async function fetchPublications() {
      try {
        const q = query(
          collection(db, "publications"),
          orderBy("year", "desc")
        );

        const snapshot = await getDocs(q);

        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPublications(items);
      } catch (error) {
        console.error("Failed to fetch publications:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPublications();
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(
        publications
          .map((item) => {
            if (item.year) return String(item.year);
            return getYear(item.date);
          })
          .filter(Boolean)
      )
    );

    return ["all", ...uniqueYears.sort((a, b) => Number(b) - Number(a))];
  }, [publications]);

  const filteredPublications = useMemo(() => {
    if (selectedYear === "all") return publications;

    return publications.filter((item) => {
      if (item.year) return String(item.year) === selectedYear;
      return getYear(item.date) === selectedYear;
    });
  }, [publications, selectedYear]);

  return {
    loading,
    selectedYear,
    years,
    filteredPublications,
    setSelectedYear,
  };
}