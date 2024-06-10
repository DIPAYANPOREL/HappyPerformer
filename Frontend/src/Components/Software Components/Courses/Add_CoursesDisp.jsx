import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 96%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  background-color: #0077b6;
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

const AddCourseForm = () => {
  const [course_title, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setThumbnail(event.target.files[0]);
  };

  const handleRemoveFile = () => {
    setThumbnail(null);
    document.getElementById("file").value = "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("course_title", course_title);
    formData.append("description", description);
    if (thumbnail) {
      formData.append("thumbnail", thumbnail);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/AddCourses/",
        formData,
        {
          withCredentials: true,
        }
      );
      const { course_id } = response.data;
      navigate(`/UploadMedia/${course_id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>COURSE TITLE</Label>
          <Input
            type="text"
            value={course_title}
            onChange={(e) => setCourseTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>SHORT DESCRIPTION</Label>
          <TextArea
            rows="5"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></TextArea>
        </div>
        <div>
          <Label>Thumbnail</Label>
          <FileInputWrapper>
            <Input type="file" id="file" onChange={handleFileChange} />
            {thumbnail && (
              <RemoveButton type="button" onClick={handleRemoveFile}>
                &times;
              </RemoveButton>
            )}
          </FileInputWrapper>
        </div>
        <Button type="submit">Add Media</Button>
      </Form>
    </Card>
  );
};

export default AddCourseForm;
