import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Software Components/Dashboard/Header";
import Layout from "../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const MainContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const FAQView = () => {
  const [faqs, setFaqs] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/api/faqs")
      .then((response) => {
        setFaqs(response.data.faqs || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the FAQs:", error);
        setError("No data available, please try again");
        setLoading(false);
      });
  }, []);

  const handleSubmitAnswer = (id, answer) => {
    axios
      .post(
        `/api/faqs?faq_id=${id}`,
        { answer },
        {
          credentials: true,
        }
      )
      .then((response) => {
        console.log("Answer submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the answer:", error);
      });
  };

  const handleInputChange = (id, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value,
    }));
  };

  if (loading) {
    return (
      <Layout>
        <MainContainer>
          <Container>
            <Title>Loading...</Title>
          </Container>
        </MainContainer>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <MainContainer>
          <Container>
            <Title>{error}</Title>
          </Container>
        </MainContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Header title="FAQ's" />
      <MainContainer>
        <Container>
          <Title>Frequently Asked Questions</Title>
          <Table>
            <thead>
              <tr>
                <Th>ID</Th>
                <Th>Employee</Th>
                <Th>Question</Th>
                <Th>Answer</Th>
                <Th>Mark Important</Th>
              </tr>
            </thead>
            <tbody>
              {faqs.map((item) => (
                <tr key={item.faq_id}>
                  <Td>{item.faq_id}</Td>
                  <Td>{item.emp_emailid}</Td>
                  <Td>{item.question}</Td>
                  <Td>
                    <Input
                      type="text"
                      value={answers[item.faq_id] || ""}
                      onChange={(e) =>
                        handleInputChange(item.faq_id, e.target.value)
                      }
                      placeholder="Answer..."
                    />
                  </Td>
                  <Td>
                    <button
                      onClick={() =>
                        handleSubmitAnswer(item.faq_id, answers[item.faq_id])
                      }
                    >
                      Submit Answer
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </MainContainer>
    </Layout>
  );
};

export default FAQView;
