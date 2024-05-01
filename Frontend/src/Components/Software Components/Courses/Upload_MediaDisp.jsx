import React, { useState } from 'react';
import styled from 'styled-components';

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
  /* border: 1px solid #ccc; */
`;

const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  `;

const Description = styled.div`
    padding: 20px;
`

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  margin-top:20px;
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

    const handleVideoSubmit = (e) => {
        e.preventDefault();
        // Handle video upload logic here
        console.log('Video URL:', videoUrl);
        console.log('Video Description:', videoDescription);
    };

    const handlePdfSubmit = (e) => {
        e.preventDefault();
        // Handle PDF upload logic here
        console.log('PDF File:', pdfFile);
        console.log('PDF Description:', pdfDescription);
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
                            <Label htmlFor="video_description">SHORT VIDEO DESCRIPTION</Label>
                            <Input
                                type="text"
                                id="video_description"
                                placeholder="Enter a short description for video"
                                value={videoDescription}
                                onChange={handleVideoDescriptionChange}
                            />
                        </Description>
                        <Button type="submit" name="save">
                            Upload
                        </Button>
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
                            Upload
                        </Button>
                    </Form>
                </FormContainer>
            </CardBody>
        </Card>
    );
};

export default Upload_MediaDisp;
