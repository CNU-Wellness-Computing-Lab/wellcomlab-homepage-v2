import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useMembers from "../hooks/useMembers";
import MemberSection from "../layout/MemberSection";


const Section = styled.section`
  width: 100%;
`;

function preloadImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve();
      return;
    }

    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => resolve();
  });
}

export default function MembersPage() {
  const {
    loading,
    professor,
    phdStudents,
    msStudents,
    undergraduateInterns,
    alumni,
  } = useMembers();

  const [imagesReady, setImagesReady] = useState(false);

  const memberSections = useMemo(() => {
    return [
      { title: "Professor", members: professor },
      { title: "Ph.D. Students", members: phdStudents },
      { title: "M.S. Students", members: msStudents },
      { title: "Undergraduate Intern", members: undergraduateInterns },
      { title: "Alumni", members: alumni },
    ].filter((section) => section.members && section.members.length > 0);
  }, [professor, phdStudents, msStudents, undergraduateInterns, alumni]);

  useEffect(() => {
    async function preloadAllImages() {
      if (loading) return;

      const allMembers = memberSections.flatMap((section) => section.members);
      const imageUrls = allMembers
        .filter((member) => member.profileUrl)
        .map((member) => member.profileUrl);

      await Promise.all(imageUrls.map(preloadImage));
      setImagesReady(true);
    }

    preloadAllImages();
  }, [loading, memberSections]);

  if (loading || !imagesReady) {
    return <Section>Loading...</Section>;
  }

  return (
    <Section>
      {memberSections.map((section, index) => (
        <MemberSection
          key={section.title}
          title={section.title}
          members={section.members}
          index={index}
        />
      ))}
    </Section>
  );
}