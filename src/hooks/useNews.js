import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getYear } from "../layout/Utils"; 

export default function useNews() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);
  const [selectedYear, setSelectedYear] = useState("all");

  useEffect(() => {
    async function fetchNews() {
      try {
        const q = query(collection(db, "news"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);

        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNewsItems(items);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(newsItems.map((item) => getYear(item.date)).filter(Boolean))
    );
    return ["all", ...uniqueYears.sort((a, b) => Number(b) - Number(a))];
  }, [newsItems]);

  const filteredNews = useMemo(() => {
    if (selectedYear === "all") return newsItems;
    return newsItems.filter((item) => getYear(item.date) === selectedYear);
  }, [newsItems, selectedYear]);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return {
    loading,
    openId,
    selectedYear,
    years,
    filteredNews,
    setSelectedYear,
    handleToggle,
  };
}