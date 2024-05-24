import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Message = styled.p`
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s ease forwards;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  width: 90%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 20px;
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`;

const Description = styled.div`
  padding: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

const Upload_MediaDisp = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDescription, setPdfDescription] = useState('');
  const [lastSubmittedVideo, setLastSubmittedVideo] = useState(null);
  const [videoMessage, setVideoMessage] = useState('');
  const [pdfMessage, setPdfMessage] = useState('');
  const [showVideoMessage, setShowVideoMessage] = useState(false);
  const [showPdfMessage, setShowPdfMessage] = useState(false);
  const { course_id } = useParams();

  useEffect(() => {
    if (videoMessage) {
      setShowVideoMessage(true);
      const timeout = setTimeout(() => {
        setShowVideoMessage(false);
        setVideoMessage('');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [videoMessage]);

  useEffect(() => {
    if (pdfMessage) {
      setShowPdfMessage(true);
      const timeout = setTimeout(() => {
        setShowPdfMessage(false);
        setPdfMessage('');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [pdfMessage]);

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleVideoDescriptionChange = (e) => {
    setVideoDescription(e.target.value);
  };

  const handlePdfFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handlePdfDescriptionChange = (e) => {
    setPdfDescription(e.target.value);
  };

  const handleVideoSubmit = async (e) => {
    e.preventDefault();

    if (lastSubmittedVideo && lastSubmittedVideo.course_id === course_id) {
      setVideoMessage('Details for this course and location have already been submitted.');
      return;
    }

    if (videoUrl && videoDescription) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/UploadMedia/', {
          location: videoUrl,
          descr: videoDescription,
          course_id: course_id,
        });
        console.log(response.data);
        setLastSubmittedVideo({ course_id});
        setVideoMessage(response.data.message);
      } catch (error) {
        setVideoMessage('Error uploading video. Please try again.');
        console.error('Error uploading video:', error);
      }
    }
  };

  const handlePdfSubmit = async (e) => {
    e.preventDefault();
    console.log('PDF File:', pdfFile);
    console.log('PDF Description:', pdfDescription);

    if (pdfFile && pdfDescription) {
      const formData = new FormData();
      formData.append('pdf_file', pdfFile);
      formData.append('pdf_description', pdfDescription);
      formData.append('course_id', course_id);

      try {
        const response = await axios.post('http://127.0.0.1:8000/UploadPdf/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setPdfMessage(response.data.message);
      } catch (error) {
        setPdfMessage('Error uploading PDF. Please try again.');
        console.error('Error uploading PDF:', error);
      }
    }
  };

  return (
    <Card>
      <CardBody>
        <FormContainer>
          <Form onSubmit={handleVideoSubmit}>
            <UploadSection>
              <Label>Choose or Drag & Drop a Video file to upload</Label>
              <Input
                type="text"
                name="course_overview_url"
                id="course_overview_url"
                placeholder="E.g: https://youtu.be/bixR-KIJKYM"
                value={videoUrl}
                onChange={handleVideoUrlChange}
              />
            </UploadSection>
            <Description>
              <Label htmlFor="descr">SHORT VIDEO DESCRIPTION</Label>
              <Input
                type="text"
                id="descr"
                placeholder="Enter a short description for video"
                value={videoDescription}
                onChange={handleVideoDescriptionChange}
              />
            </Description>
            <Button type="submit" name="save_video">
              Upload Video
            </Button>
            <Message visible={showVideoMessage}>{videoMessage}</Message>
          </Form>
          <Form onSubmit={handlePdfSubmit}>
            <UploadSection>
              <Label>Choose or Drag & Drop a PDF file to upload</Label>
              <Input type="file" name="pdf" onChange={handlePdfFileChange} />
            </UploadSection>
            <Description>
              <Label htmlFor="pdf_description">SHORT PDF DESCRIPTION</Label>
              <Input
                type="text"
                name="pdf_description"
                id="pdf_description"
                placeholder="Enter a short description for PDF"
                value={pdfDescription}
                onChange={handlePdfDescriptionChange}
              />
            </Description>
            <Button type="submit" name="save_pdf">
              Upload PDF
            </Button>
            <Message visible={showPdfMessage}>{pdfMessage}</Message>
          </Form>
        </FormContainer>
      </CardBody>
    </Card>
  );
};

export default Upload_MediaDisp;
