import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase/firebase";

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

export default function useMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const q = query(collection(db, "members"));
        const snapshot = await getDocs(q);

        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMembers(items);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, []);

  const activeMembers = useMemo(() => {
    return members.filter((member) => member.isActive === true);
  }, [members]);

  const alumniMembers = useMemo(() => {
    return members.filter((member) => member.isActive === false);
  }, [members]);

  const professor = useMemo(() => {
    return activeMembers
      .filter((member) => member.degree === "Professor")
      .sort(sortByName);
  }, [activeMembers]);

  const phdStudents = useMemo(() => {
    return activeMembers
      .filter((member) => member.degree === "Ph.D. Students")
      .sort(sortByName);
  }, [activeMembers]);

  const msStudents = useMemo(() => {
    return activeMembers
      .filter((member) => member.degree === "Master's Students")
      .sort(sortByName);
  }, [activeMembers]);

  const undergraduateInterns = useMemo(() => {
    return activeMembers
      .filter((member) => member.degree === "Undergraduate Intern")
      .sort(sortByName);
  }, [activeMembers]);

  const alumni = useMemo(() => {
    return alumniMembers.sort(sortByName);
  }, [alumniMembers]);

  return {
    loading,
    members,
    professor,
    phdStudents,
    msStudents,
    undergraduateInterns,
    alumni,
  };
}