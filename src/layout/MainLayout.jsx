import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import colors from "../styles/colors";

const LayoutWrapper = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  min-height: 0;
  background-color: ${colors.backgroundGray};
`;

export default function MainLayout() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}