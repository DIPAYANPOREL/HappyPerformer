import React, { useState } from "react";
import styled, { css } from "styled-components";
import Lama from "../../../assets/Lama.png";
import EditNoteIcon from '@mui/icons-material/EditNote';
import { CheckBox } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, FormControlLabel, IconButton, Stack, TextField } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  width:100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const breakpoints = {
  mobile: "768px",
};

const mobileStyles = css`
  @media (max-width: ${breakpoints.mobile}) {
    // Mobile styles go here
  }
`;

const ProfileSection = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 40px;

  ${mobileStyles} {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    margin-top: 20px;
  }
`;

const DetailsLeft = styled.div`
  margin-right: 20px;
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px 0;
    text-align: center;
  }
`;

const DetailsRight = styled.div`
  flex: 1;

  @media (max-width: ${breakpoints.mobile}) {
    margin: 20px 0;
    text-align: center;
  }
`;

const Divider = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  margin: 0 20px;

  ${mobileStyles} {
    border-left: none;
    border-top: 1px solid #ccc;
    height: 1px;
    width: 100%;
    margin: 20px 0;
  }
`;

const AdditionalContainer = styled.div`
  background-color: #ffffff;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 30px;
  width: 100%;
`;

const StyledButton = styled.button`
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
  width: 100%;
  margin: 20px;
  min-height: 900px ;
`;

const Card = styled.div`
  flex: 0 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  width: 100%;
  background: linear-gradient(135deg, #aeb8fe, #c9d3fe);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  transition: 0.3s;
  border: 2px solid transparent;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: #faaf72;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const PopupIcon = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff8600;
  }
`;

const Profile = () => {
  const [infocard] = useState([
    {
      title: 'Personal Information',
      text: 'Loren ipsum dolor sit amet consectetur, adipisicing elit. Sit ducimus fuga itaque, ex natus quaerat deserunt asperiores dolore eligendi doloremque?Name: John Doe '
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

  const [openDialogs, setOpenDialogs] = useState({
    PersonalInformation: false,
    EmergencyContact: false,
    FamilyInformation: false,
    Qualification: false,
    Experience: false
  });

  const handlePopupClick = (card) => {
    setOpenDialogs(prevState => ({
      ...prevState,
      [card.title.replace(/\s+/g, '')]: true
    }));
  };

  const closePopup = (card) => {
    setOpenDialogs(prevState => ({
      ...prevState,
      [card.title.replace(/\s+/g, '')]: false
    }));
  };

  const menuItems = ['Edit', 'Delete', 'View Details'];

  return (
    <>
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
            <Button >Click Me</Button>
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
        <InfoCard>
          {infocard.map((card, i) => (
            <Card key={i}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <PopupIcon
                onClick={() => handlePopupClick(card)}
              >
                <EditNoteIcon></EditNoteIcon>
              </PopupIcon>
              <Dialog open={openDialogs[card.title.replace(/\s+/g, '')]} onClose={() => closePopup(card)} fullWidth maxWidth="md">
                <DialogTitle>
                  {card.title}
                  <IconButton onClick={() => closePopup(card)} style={{ float: 'right' }}>
                    <CloseIcon color='error'></CloseIcon>
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <Stack spacing={2} margin={2}>
                    {/* Add dialog content here */}
                  </Stack>
                </DialogContent>
              </Dialog>
            </Card>
          ))}
        </InfoCard>
      </AdditionalContainer>
    </Container>
    </>
  );
};

export default Profile;
