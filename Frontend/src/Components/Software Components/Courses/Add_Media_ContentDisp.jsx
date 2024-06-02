import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Column = styled.div`
  flex-basis: 80%;
  @media (min-width: 1200px) {
    flex-basis: 80%;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  text-align: center;
`;

const Th = styled.th`
  padding: 8px;
  text-align: center;
`;

const Tr = styled.tr`
  text-align: center;
`;

const Td = styled.td`
  padding: 8px;
  text-align: center;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CoursesDisp = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/AddMediaContent/")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <Container>
      <Row>
        <Column>
          <Card>
            <Table>
              <Thead>
                <Tr>
                  <Th>Course Title</Th>
                  <Th>Operations</Th>
                </Tr>
                <Tr>
                  <Td colSpan="2">
                    <hr />
                  </Td>
                </Tr>
              </Thead>
              <tbody>
                {courses.map((course) => (
                  <Tr key={course.course_id}>
                    <Td>{course.course_title}</Td>
                    <Td>
                      <Link href={`UploadMedia/${course.course_id}`}>ADD</Link>
                    </Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Column>
      </Row>
    </Container>
  );
};

export default CoursesDisp;
