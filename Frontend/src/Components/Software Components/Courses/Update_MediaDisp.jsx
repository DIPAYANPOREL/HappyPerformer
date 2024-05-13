import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 30px;
  margin: 15px auto;
  width: 60%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap:40px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
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

const Update_MediaDisp = () => {
  const [course, setCourse] = useState({
    course_id: "",
    course_title: "",
    videos: [],
  });
  const { course_id } = useParams();

  useEffect(() => {
    fetchCourseDetails();
  }, []);

  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/UpdateMedia/${course_id}`);
      setCourse(response.data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  const updateCourse = async () => {
    try {
      await axios.put(`http://127.0.0.1:8000/UpdateMedia/${course_id}`, course);
      console.log("Course updated successfully:", course);
      window.location.reload();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedVideos = [...course.videos];
    updatedVideos[index] = { ...updatedVideos[index], [name]: value };
    setCourse((prevCourse) => ({
      ...prevCourse,
      videos: updatedVideos,
    }));
  };

  return (
    <Card>
      <Form onSubmit={(e) => { e.preventDefault(); updateCourse(); }}>
        <div>
          <Label>Course ID:</Label>
          <Input
            type="text"
            name="course_id"
            value={course.course_id}
            readOnly
          />
        </div>
        <div>
          <Label>Course Title:</Label>
          <Input
            type="text"
            name="course_title"
            value={course.course_title}
            onChange={(e) => setCourse({ ...course, course_title: e.target.value })}
          />
        </div>
        {course.videos.map((video, index) => (
          <div key={index}>
            <div>
              <Label>Video Url:</Label>
            </div>
            <div>
              <Input
                type="text"
                name="location"
                value={video.location}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <br />
            <div>
              <Label>Video Description:</Label>
            </div>
            <div>
              <Input
                type="text"
                name="descr"
                value={video.descr}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          </div>
        ))}
        <Button type="submit">Update</Button>
      </Form>
    </Card>
  );
};

export default Update_MediaDisp;
