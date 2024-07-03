import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";


const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100vw;  
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  height: 65%;
  max-width: 900px;
  max-height: 700px; 
  overflow-y: auto; 
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const OptionContainer = styled.div`
  max-height: 250px;
  padding-right: 25px;  
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 15px 0;
  margin: 25px 0; 
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 13px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  border-radius: 10px;
  height: 50px;
  width: 150px;
`;

const DoneButton = styled(Button)`
  background-color: #28a745;
  margin-top: 15px;
  text-align: center;
  margin-left: 40%;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%; 
  max-width: 600px; 
  max-height: 500px; 
  border-radius: 10px;
`;

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const FileInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(52, 152, 219, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const DownloadButton = styled.a`
  display: block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 15px;
  text-decoration: none;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgba(52, 152, 219, 1);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const BulkUpload = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const openModal = (type) => {
    setModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
    setSelectedFile(null);
    setUploadStatus("");
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const upload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axios.post(`/upload/${modalType}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setUploadStatus("File uploaded successfully!");
        console.log("File upload response:", response.data);
      } catch (error) {
        setUploadStatus("Error uploading file. Please try again.");
        console.error("Error uploading file:", error);
      }
    } else {
      setUploadStatus("Please select a file to upload.");
    }
  };

  const downloadTemplate = (type) => {
    let downloadLink = "";
    switch (type) {
      case "personal":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_personal.php";
        break;
      case "job":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_job.php";
        break;
      case "bank":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_bank.php";
        break;
      case "family":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_family.php";
        break;
      case "work":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_work.php";
        break;
      case "dependent":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_dependent.php";
        break;
      case "qualification":
        downloadLink = "https://happyperformer.com/Bulk_Upload/Import_Template/download_template_qualification.php";
        break;
      default:
        break;
    }
    window.open(downloadLink, "_blank");
  };

  const handleDoneClick = () => {
    alert("Data has been submitted successfully!");
    setDataSubmitted(true);
  };

  return (
    <Container>
      <Card>
        <Title style={{ textAlign: 'center', marginTop: '10px' }}>BULK UPLOAD DATA</Title>
        <OptionContainer>
          <Option>
            <Label>Personal Details</Label>
            <Button onClick={() => openModal("personal")}>Import Data</Button>
          </Option>
          <Option>
            <Label>Job Details</Label>
            <Button onClick={() => openModal("job")}>Import Data</Button>
          </Option>
          <Option>
            <Label>Bank Details</Label>
            <Button onClick={() => openModal("bank")}>Import Data</Button>
          </Option>
          <Option>
            <Label>Family Details</Label>
            <Button onClick={() => openModal("family")}>Import Data</Button>
          </Option>
          <Option>
            <Label>Work Experience</Label>
            <Button onClick={() => openModal("work")}>Import Data</Button>
          </Option>
          <Option>
            <Label>Dependent Details</Label>
            <Button onClick={() => openModal("dependent")}>Import Data</Button>
          </Option>
          <Option>
            <Label>Qualification Details</Label>
            <Button onClick={() => openModal("qualification")}>Import Data</Button>
          </Option>
          <DoneButton onClick={handleDoneClick} style={{marginBottom: '20px'}}>Done</DoneButton>
        </OptionContainer>
     
      </Card>
      {modalOpen && (
        <ModalContainer>
          <ModalContent>
            <h3 style={{ marginBottom: "15px" }}>File Import</h3>
            <FileInputContainer>
              <FileInput type="file" onChange={handleFileUpload} />
              <UploadButton onClick={upload}>Upload</UploadButton>
            </FileInputContainer>
            {uploadStatus && <p>{uploadStatus}</p>}
            <DownloadButton onClick={() => downloadTemplate(modalType)}>
              Download Template
            </DownloadButton>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </Container>
  );
};

export default BulkUpload;