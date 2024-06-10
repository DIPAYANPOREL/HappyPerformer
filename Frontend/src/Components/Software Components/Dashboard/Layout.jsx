import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "../../../Components/Software Components/Dashboard/Nav";
import Footer from "../../../Components/Software Components/Footer";
import SideBar from "./SideBar";

const GlobalStyle = createGlobalStyle`
  body.blurred #content {
    filter: blur(5px);
    transition: filter 0.3s ease-in-out;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

const SidebarContainer = styled.div`
  width: ${({ isCollapsed }) => (isCollapsed ? "50px" : "250px")};
  transition: width 0.3s ease-in-out;
  background-color: #0a1128; /* Match sidebar background */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow: hidden; /* Prevents intermediate white space */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${({ isCollapsed }) => (isCollapsed ? "50px" : "250px")};
  transition: margin-left 0.3s ease-in-out;
  padding: 0;
`;

const PageContent = styled.div`
  flex: 1;
  background-color: #f4f4f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("blurred", !isCollapsed);
  }, [isCollapsed]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <ContentContainer>
          <SidebarContainer isCollapsed={isCollapsed}>
            <SideBar onToggle={toggleSidebar} isCollapsed={isCollapsed} />
          </SidebarContainer>
          <MainContent id="content" isCollapsed={isCollapsed}>
            <Nav />
            <PageContent>{children}</PageContent>
            <Footer />
          </MainContent>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default Layout;
