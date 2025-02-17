import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
  }
`;

const QuestionContainer = styled.div`
  padding: 15px;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Answer = styled.div`
  padding: 15px;
  border-top: 1px solid #eaeaea;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  height: 100px;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 15px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 480px) {
    width: 90%;
    padding: 15px;
  }
`;

const PopupTitle = styled.h3`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ question: "" });
  const [errors, setErrors] = useState({ question: "" });

  const fetchFAQs = () => {
    axios
      .get("http://127.0.0.1:8000/FAQsView")
      .then((response) => {
        setFaqs(response.data.faqs);
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { question: "" };

    if (!formData.question) {
      errors.question = "Question is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://127.0.0.1:8000/FAQsView/", formData, {
          withCredentials: true,
        })
        .then((response) => {
          setFormData({ question: "" });
          setShowPopup(true);
          fetchFAQs(); // Refresh the FAQ list
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <Layout>
      <Header title="FAQ's" />
      <Container>
        <Title>Frequently Asked Questions</Title>
        {faqs.map((faq, index) => (
          <div key={faq.faq_id}>
            <QuestionContainer onClick={() => handleToggle(index)}>
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </QuestionContainer>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </div>
        ))}
        <FormTitle>More Questions? Let us help you!</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="question">Question</Label>
          <TextArea
            id="question"
            name="question"
            placeholder="Your question"
            value={formData.question}
            onChange={handleChange}
            required
          />
          {errors.question && <p style={{ color: "red" }}>{errors.question}</p>}
          <Button type="submit">SUBMIT</Button>
        </Form>
      </Container>

      {showPopup && (
        <>
          <Overlay />
          <PopupContainer>
            <PopupTitle>Confirmation!</PopupTitle>
            <p>Your Question has been Submitted!</p>
            <CloseButton onClick={handlePopupClose}>Close</CloseButton>
          </PopupContainer>
        </>
      )}
    </Layout>
  );
};

export default FAQ;
