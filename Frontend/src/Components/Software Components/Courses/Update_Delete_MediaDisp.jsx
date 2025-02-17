import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Main = styled.main`
  width: 100%;
  padding: 20px;
`;

const ContainerFluid = styled.div`
  padding: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Col = styled.div`
  flex: 1;

  @media (min-width: 1200px) {
    flex: 20%;
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

const Th = styled.th`
  text-align: center;
  padding-bottom: 1rem;
`;

const Tr = styled.tr`
  text-align: center;
`;

const Td = styled.td`
  text-align: center;
  padding: 10px;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Message = styled.p`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

const Update_Delete_MediaDisp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/UpdateDeleteMedia/"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorMessage("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (course_id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`http://127.0.0.1:8000/UpdateMedia/${course_id}`);
        setData(data.filter((item) => item.course_id !== course_id));
      } catch (error) {
        console.error("Error deleting data:", error);
        setErrorMessage("Error deleting data. Please try again.");
      }
    }
  };

  if (loading) {
    return <Main>Loading...</Main>;
  }

  return (
    <Main>
      <ContainerFluid>
        <Row>
          <Col>
            <Card>
              <Table>
                <thead>
                  <Tr>
                    <Th style={{ width: "20%" }}>Course Title</Th>
                    <Th style={{ width: "20%" }}>Description</Th>
                    <Th style={{ width: "60%" }} colSpan="2">
                      Operations
                    </Th>
                  </Tr>
                  <Tr>
                    <Th colSpan="4">
                      <hr />
                    </Th>
                  </Tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.course_title}</Td>
                      <Td>{item.description}</Td>
                      <Td>
                        <a href={`updatemedia/${item.course_id}`}>Update</a>
                      </Td>
                      <Td>
                        <a onClick={() => handleDelete(item.course_id)}>
                          Delete
                        </a>
                      </Td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              {errorMessage && <Message>{errorMessage}</Message>}
            </Card>
          </Col>
        </Row>
      </ContainerFluid>
    </Main>
  );
};

export default Update_Delete_MediaDisp;
