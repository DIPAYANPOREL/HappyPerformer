import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  flex-basis: 80%;
  @media (min-width: 1200px) {
    flex-basis: 80%;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 96%;
  font-size: 1.4rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  text-align: center;
`;

const Th = styled.th`
  width: 3em;
  padding: 8px;
`;

const Tr = styled.tr`
  text-align: center;
`;

const Td = styled.td`
  width: 3em;
  padding: 8px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CoursesDisp = () => {

  const courses = [
    { id: 1, title: 'JavaScript in One Video' },
    { id: 2, title: 'Php Full Course' },
    { id: 3, title: 'React Complete Course' },
  ];

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
                  <Tr key={course.id}>
                    <Td>{course.title}</Td>
                    <Td>
                      {/* Link with course id, to be activate after backend integrated */}
                      {/* <Link href={`Upload_Media.jsx?&cd=${course.id}`}>ADD</Link> */}
                      <Link href={`Upload_Media`}>ADD</Link>
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
