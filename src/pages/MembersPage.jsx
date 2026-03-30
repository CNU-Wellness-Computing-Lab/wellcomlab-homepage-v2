import { useMemo } from "react";
import styled from "styled-components";
import useMembers from "../hooks/useMembers";
import MemberSection from "../layout/MemberSection";

const Section = styled.section`
  width: 100%;
`;

export default function MembersPage() {
  const {
    loading,
    professor,
    phdStudents,
    msStudents,
    undergraduateInterns,
    alumni,
  } = useMembers();

  const memberSections = useMemo(() => {
    return [
      { title: "Professor", members: professor },
      { title: "Ph.D. Students", members: phdStudents },
      { title: "M.S. Students", members: msStudents },
      { title: "Undergraduate Intern", members: undergraduateInterns },
      { title: "Alumni", members: alumni },
    ].filter((section) => section.members && section.members.length > 0);
  }, [professor, phdStudents, msStudents, undergraduateInterns, alumni]);

  if (loading) {
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