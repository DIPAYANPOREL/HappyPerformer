import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 350px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 18px;
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
  width: 35%; /* Adjust the width of the modal content */
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
  const [modalType, setModalType] = useState('');

  const openModal = (type) => {
    setModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType('');
  };

  const handleFileUpload = (event) => {
    // Handle file upload logic here
  };

  const downloadTemplate = (type) => {
    let downloadLink = '';
    switch (type) {
      case 'personal':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_personal.php';
        break;
      case 'job':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_job.php';
        break;
      case 'bank':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_bank.php';
        break;
      case 'family':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_family.php';
        break;
      case 'work':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_work.php';
        break;
      case 'dependent':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_dependent.php';
        break;
      case 'qualification':
        downloadLink = 'https://happyperformer.com/Bulk_Upload/Import_Template/download_template_qualification.php';
        break;
      default:
        break;
    }
    window.open(downloadLink, '_blank');
  };

  const upload = () => {
    // Logic for file upload
  };

  return (
    <Container>
      <Card>
        <Label>Personal Details</Label>
        <CardContent>
          <Button onClick={() => openModal('personal')}>Import Data</Button>
          {modalOpen && modalType === 'personal' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('personal')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
      <Card>
        <Label>Job Details</Label>
        <CardContent>
          <Button onClick={() => openModal('job')}>Import Data</Button>
          {modalOpen && modalType === 'job' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('job')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
      <Card>
        <Label>Bank Details</Label>
        <CardContent>
          <Button onClick={() => openModal('bank')}>Import Data</Button>
          {modalOpen && modalType === 'bank' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('bank')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
      <Card>
        <Label>Family Details</Label>
        <CardContent>
          <Button onClick={() => openModal('family')}>Import Data</Button>
          {modalOpen && modalType === 'family' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('family')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
      <Card>
        <Label>Work Experience</Label>
        <CardContent>
          <Button onClick={() => openModal('work')}>Import Data</Button>
          {modalOpen && modalType === 'work' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('work')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
      <Card>
        <Label>Dependent Details</Label>
        <CardContent>
          <Button onClick={() => openModal('dependent')}>Import Data</Button>
          {modalOpen && modalType === 'dependent' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('dependent')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
      <Card>
        <Label>Qualification Details</Label>
        <CardContent>
          <Button onClick={() => openModal('qualification')}>Import Data</Button>
          {modalOpen && modalType === 'qualification' && (
            <ModalContainer>
              <ModalContent>
                <h3 style={{ marginBottom: '15px' }}>File Import</h3>
                <FileInputContainer>
                  <FileInput type="file" onChange={handleFileUpload} />
                  <UploadButton onClick={upload}>Upload</UploadButton>
                </FileInputContainer>
                <DownloadButton onClick={() => downloadTemplate('qualification')}>Download Template</DownloadButton>
                <CloseButton onClick={closeModal}>Close</CloseButton>
              </ModalContent>
            </ModalContainer>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default BulkUpload;