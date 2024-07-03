import React from "react";
import styled from "styled-components";
import AddCourseForm from "../../../Components/Software Components/Courses/Add_CoursesDisp";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background-color: #f1f2f6;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const AddCourses = () => {
  return (
    <Layout>
      <Header title="Add Course" />
      <MainWrapper>
        <Content>
          <AddCourseForm />
        </Content>
      </MainWrapper>
    </Layout>
  );
};

export default AddCourses;
