import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const q = query(collection(db, "projects"));
        const snapshot = await getDocs(q);

        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        items.sort((a, b) => (Number(b.year) || 0) - (Number(a.year) || 0));

        setProjects(items);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return {
    loading,
    projects,
  };
}