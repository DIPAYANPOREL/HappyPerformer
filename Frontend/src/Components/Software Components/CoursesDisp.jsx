import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width:100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FileInputWrapper = styled.div`
  position: relative;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #dc3545;
  font-size: 16px;
  cursor: pointer;
`;

const CoursesDisp = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        document.getElementById('file').value = '';
    };

    return (
        <Card>
            <Form>
                <div>
                    <Label>COURSE TITLE</Label>
                    <Input type="text" required />
                </div>
                <div>
                    <Label>SHORT DESCRIPTION</Label>
                    <TextArea
                        rows="5"
                        cols="20"
                        id="short_description"
                        placeholder="Enter description"
                        required
                    ></TextArea>
                </div>
                <div>
                    <Label>Thumbnail</Label>
                    <FileInputWrapper>
                        <Input type="file" id="file" onChange={handleFileChange} required />
                        {selectedFile && (
                            <RemoveButton type="button" onClick={handleRemoveFile}>
                                &times;
                            </RemoveButton>
                        )}
                    </FileInputWrapper>
                </div>
                <Button type="submit" >
                    Add Media
                </Button>
            </Form>
        </Card>
    );
};

export default CoursesDisp;
