import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard.jsx';


const ContentContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const PageHeader = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const PageTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: 500;
`;

const Breadcrumb = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  margin-bottom: 0;
  list-style: none;
  background-color: transparent;
  border-radius: 0.25rem;
`;

const BreadcrumbItem = styled.li`
  display: flex;

  &:not(:last-child)::after {
    content: '/';
    margin: 0 0.5rem;
    color: #6c757d;
  }
`;

const BreadcrumbLink = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }
`;

const PageWrapper = () => {
  return (
    <ContentContainer>
      <PageHeader>
        <PageTitle>Profile</PageTitle>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink >Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>Profile</BreadcrumbItem>
        </Breadcrumb>
      </PageHeader>

      <ProfileCard/>
    </ContentContainer>
  );
};

export default PageWrapper;
