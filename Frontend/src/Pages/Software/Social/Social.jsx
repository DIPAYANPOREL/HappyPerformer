import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 1rem;
  overflow-y: scroll;
`;

const Sidecontainer = styled.div`
  width: 350px;
  height: 150vh;
  align-items: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-right: 1rem;
`;

const Header = styled.header`
  background-color: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ccc;
  margin-bottom: 1rem;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedbacksSection = styled.section`
  margin-bottom: 2rem;
`;

const Feedback = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const FeedbackBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FeedbackButton = styled.button`
  margin-left: 0.5rem;
`;

const LeaveFeedbackSection = styled.section`
  margin-bottom: 20rem;
  width: 100%;

`;

const FeedbackTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const FeedbackSubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CategoriesSection = styled.section`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const CategoryCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CategoryLabel = styled.label`
  margin-left: 0.5rem;
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
`;


const FeedbackCategory = ({ category, checked, onChange }) => (
  <CategoryCheckbox>
    <input
      type="checkbox"
      id={category}
      checked={checked}
      onChange={() => onChange(category)}
    />
    <CategoryLabel htmlFor={category}>{category}</CategoryLabel>
  </CategoryCheckbox>
);


const FeedbackComponent = ({ name, date, feedback }) => (
  <Feedback>
    <FeedbackHeader>
      <div>{name}</div>
      <div>{date}</div>
    </FeedbackHeader>
    <FeedbackBody>
      <div>{feedback}</div>
      <div>
        <FeedbackButton>Somewhat Agree</FeedbackButton>
        <FeedbackButton>Agree</FeedbackButton>
        <FeedbackButton>Strongly Agree</FeedbackButton>
        <FeedbackButton>Disagree</FeedbackButton>
        <FeedbackButton>Needs Work</FeedbackButton>
      </div>
    </FeedbackBody>
  </Feedback>
);

const SocialPage = () => {
  const [feedback, setFeedback] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission here
    console.log('Submitted feedback:', feedback);
    console.log('Selected categories:', selectedCategories);
    setFeedback('');
  };

  const toggleCategory = (category) => {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      const newCategories = [...selectedCategories];
      newCategories.splice(index, 1);
      setSelectedCategories(newCategories);
    }
  };

  const feedbackCategories = [
    'Customer Focus',
    'Accountability',
    'Adaptability',
    'Organizational Knowledge',
    'Teamwork',
    'Problem Solving',
    'Communication',
    'Initiative',
    'Work Quality',
    'Leadership',
    'Ethics & Integrity',
    'Attention to Detail',
    'Result Focus',
    'Product Development',
    'Process Knowledge',
  ];

  const Feedbacks = [
    {
      name: 'Shawn Pinto',
    
      feedback: 'Feedback for You',
    },
  ];

  return (
    <Container>
      {/* Sidebar */}
      <Sidecontainer>
        <h2>Profile Details</h2>
        <ProfileSection>
          <Avatar />
          <ProfileDetails>
            <h2>Shawn Pinto</h2>
            <p>Positive feedback by manager</p>
          </ProfileDetails>
          <CategoriesSection>
            {feedbackCategories.map((category, index) => (
              <FeedbackCategory
                key={index}
                category={category}
                checked={selectedCategories.includes(category)}
                onChange={toggleCategory}
              />
            ))}
          </CategoriesSection>
        </ProfileSection>
      </Sidecontainer>

      {/* Main Content */}
      <div>
        {/* Header/Navigation */}
        <Header>
          <nav>
            {/* Your navigation components */}
          </nav>
        </Header>

        <Main>
          {/* Leave Feedback */}
          <LeaveFeedbackSection>
            <FeedbacksSection>
              <h3>Feedbacks for You</h3>
              {Feedbacks.map((Feedback, index) => (
                <FeedbackComponent
                  key={index}
                  name={Feedback.name}
                  date={Feedback.date}
                  feedback={Feedback.feedback}
                />
              ))}
            </FeedbacksSection>
            <h3>Leave Feedback</h3>
            <form onSubmit={handleFeedbackSubmit}>
              <FeedbackTextarea
                placeholder="Type your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <CategoriesSection>
                {selectedCategories.map((category, index) => (
                  <span key={index}>{category}</span>
                ))}
              </CategoriesSection>
              <FeedbackSubmitButton type="submit">Submit Feedback</FeedbackSubmitButton>
            </form>
          </LeaveFeedbackSection>
        </Main>
      </div>
    </Container>
  );
};

export default SocialPage;
