import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";
import HomeSal from "../../../Components/Software Components/PayRoll/HomeSal";

const Container = styled.div`
  flex: 1;
  padding: 20px;
`;

const Bottom = styled.div`
  overflow: auto;
`;

const HomeSalary = () => {
  return (
    <Layout>
      <Header title="Home Salary" />
      <Container>
        <Bottom>
          <HomeSal />
        </Bottom>
      </Container>
    </Layout>
  );
};

export default HomeSalary;
