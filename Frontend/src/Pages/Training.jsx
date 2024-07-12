import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Footer from "../Components/Software Components/Footer.jsx";
import Nav from "../Components/Software Components/Dashboard/Nav";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100vh;
`;

const CardContainer = styled.div``;

const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  width: 30%;
  margin-bottom: 20px;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h5`
  margin: 0;
`;

const CardText = styled.p`
  margin: 5px 0;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 145px;
  border: none;
`;

const Button = styled.a`
  display: inline-block;
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Training = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/DisplayTraining/");
        if (response.data && Array.isArray(response.data)) {
          setCourses(response.data);
        } else {
          setCourses([]);
          console.log("No courses found");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <CardContainer>
          <Title>Training Page</Title>
          <hr />
          <Row>
            {courses.length > 0 ? (
              courses.map((course) => (
                <Col key={course.course_id}>
                  <CourseCard
                    title={course.course_title}
                    description={course.description}
                    thumbnail={course.thumbnail}
                  />
                </Col>
              ))
            ) : (
              <p>No courses found</p>
            )}
          </Row>
        </CardContainer>
      </Container>
      <Footer />
    </>
  );
};

const CourseCard = ({ title, description, thumbnail }) => {
  return (
    <Card>
      <Thumbnail src={thumbnail} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default Training;
