import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";


const LayoutWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
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