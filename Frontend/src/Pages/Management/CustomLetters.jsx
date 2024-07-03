import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import Footer from "../../Components/Software Components/Footer";
import Nav from "../../Components/Software Components/Dashboard/Nav";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.div`
  color: black;
  padding: 10px 20px;
  display: flex;
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 10px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
  }
`;

const YourLettersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  height: 70%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LetterList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LetterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

const LetterName = styled.span`
  font-weight: bold;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LetterActions = styled.div`
  display: flex;
`;

const LetterAction = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #666;
  transition: color 0.3s;

  &:hover {
    color: #333;
  }
`;

const CreateLetterContainer = styled.div`
  width: 48%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 70%;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
`;

const CreateLetterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
`;

const CreateLetterButton = styled.button`
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2c3e50;
  }
`;

const NoLettersText = styled.div`
  margin-top: 20px;
  color: #888;
`;

const YourLetterHeading = styled.h3`
  margin-bottom: 20px;
`;

const CustomLetters = () => {
  const [letters, setLetters] = useState([]);
  const [newLetterName, setNewLetterName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchLetters();
  }, []);

  const fetchLetters = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/letters");
      if (Array.isArray(response.data)) {
        setLetters(response.data);
      } else {
        setError("Invalid response format");
      }
    } catch (error) {
      setError("Failed to fetch letters");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLetter = async () => {
    if (newLetterName.trim()) {
      try {
        const response = await axios.post("/api/letters", {
          name: newLetterName.trim(),
        });
        if (response.data && response.data.id) {
          setLetters([...letters, response.data]);
          setNewLetterName("");
        } else {
          setError("Failed to create letter");
        }
      } catch (error) {
        setError("Failed to create letter");
      }
    }
  };

  const handleDeleteLetter = async (index) => {
    const letterToDelete = letters[index];
    try {
      await axios.delete(`/api/letters/${letterToDelete.id}`);
      const updatedLetters = [...letters];
      updatedLetters.splice(index, 1);
      setLetters(updatedLetters);
    } catch (error) {
      setError("Failed to delete letter");
    }
  };

  return (
    <>
      <Nav />
      <Container>
        <Header>
          <HeaderTitle>Custom Letters</HeaderTitle>
        </Header>
        <Content>
          <YourLettersContainer>
            <YourLetterHeading>Your Letters</YourLetterHeading>
            {loading ? (
              <NoLettersText>Loading letters...</NoLettersText>
            ) : error ? (
              <NoLettersText>{error}</NoLettersText>
            ) : letters.length === 0 ? (
              <NoLettersText>
                No letters available. Please create a letter to see it here.
              </NoLettersText>
            ) : (
              <LetterList>
                {letters.map((letter, index) => (
                  <LetterItem key={index}>
                    <LetterName>{letter.name}</LetterName>
                    <LetterActions>
                      <LetterAction>
                        <Link to={`/view/${letter.id}`}>
                          <FaEye />
                        </Link>
                      </LetterAction>
                      <LetterAction onClick={() => handleDeleteLetter(index)}>
                        <FaTrashAlt />
                      </LetterAction>
                    </LetterActions>
                  </LetterItem>
                ))}
              </LetterList>
            )}
          </YourLettersContainer>
          <CreateLetterContainer>
            <YourLetterHeading>Create A New Letter</YourLetterHeading>
            <CreateLetterInput
              placeholder="Ex: Offer Letter..."
              value={newLetterName}
              onChange={(e) => setNewLetterName(e.target.value)}
            />
            <CreateLetterButton onClick={handleCreateLetter}>
              Create
            </CreateLetterButton>
          </CreateLetterContainer>
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default CustomLetters;
