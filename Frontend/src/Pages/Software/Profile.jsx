import React, { useState } from "react";
import styled from "styled-components";
import Lama from "../../assets/Lama.png";
import Personalinfo from "../../Components/Software Components/PersonalInfo";
import EditNoteIcon from '@mui/icons-material/EditNote';


const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  max-width: 800px;
  width: 100%;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const DetailsLeft = styled.div`
  margin-right: 20px;
  flex: 1;
`;

const DetailsRight = styled.div`
  flex: 1;
`;

const Divider = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  margin: 0 20px;
`;

const AdditionalContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #ff8600;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  flex: 0 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  width: 100%;
  background: #aeb8fe;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  transition: 0.3s;
  border: 2px solid transparent;
  position: relative;

  &:hover {
    border-color: #faaf72;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const PopupIcon = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;



function InfoCardComponent() {
  const [infocard] = useState([
    {
      title: 'Personal Information',
      text: 'Loren ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Emergency Contact',
      text: 'Lorem ipsum color sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Bank Information',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Family Information',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Qualification',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    },
    {
      title: 'Experience',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe'
    }
  ]);

  const handlePopupClick = (card) => {
    alert(`This is ${card.title}`);
  };

  return (
    <InfoCard>
      {infocard.map((card, i) => (
        <Card key={i}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          <PopupIcon onClick={() => handlePopupClick(card.title)}><EditNoteIcon></EditNoteIcon></PopupIcon>
          <PopupIcon onClick={() => <Personalinfo/>}><EditNoteIcon></EditNoteIcon></PopupIcon>
          <PopupIcon onClick={() => handlePopupClick(card)}></PopupIcon>
        </Card>
      ))}
    </InfoCard>
  );
}

const Profile = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
   
    <Container>
      <ProfileSection>
        <ProfilePicture src={Lama} alt="Profile Picture" />
        <ProfileDetails>
          <DetailsLeft>
            <h2 style={{ fontWeight: 600, marginBottom: '10px' }}>Shawn Edmund Pinto</h2>
            <p style={{ marginBottom: '10px' }}>Team Name: Development Team</p>
            <p style={{ marginBottom: '10px' }}>Job Name: Software Engineer</p>
            <p style={{ marginBottom: '10px' }}>Employee ID: 12345</p>
            <p style={{ marginBottom: '10px' }}>Date of Join: January 1, 2024</p>
            <Button onClick={handleButtonClick}>Click Me</Button>
          </DetailsLeft>
          <Divider />
          <DetailsRight>
            <p style={{ marginBottom: '10px' }}><strong>Phone:</strong> +973 12345678</p>
            <p style={{ marginBottom: '10px' }}><strong>Email:</strong> shalav.d@example.com</p>
            <p style={{ marginBottom: '10px' }}><strong>Birthday:</strong> May 15, 1990</p>
            <p style={{ marginBottom: '10px' }}><strong>Address:</strong> 123 Pune, Maharashtra</p>
            <p style={{ marginBottom: '10px' }}><strong>Gender:</strong> Male</p>
            <p style={{ marginBottom: '10px' }}><strong>Reports to:</strong> Monica Dey</p>
          </DetailsRight>
        </ProfileDetails>
      </ProfileSection>
      <AdditionalContainer>
        <InfoCardComponent/>
      </AdditionalContainer>
    </Container>
  );
};

export default Profile;
