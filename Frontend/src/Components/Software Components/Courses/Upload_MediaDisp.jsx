const Upload_MediaDisp = () => {
  const [location, setLocation] = useState("");
  const [descr, setDescr] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDescription, setPdfDescription] = useState("");
  const [lastSubmittedVideo, setLastSubmittedVideo] = useState(null);
  const [videoMessage, setVideoMessage] = useState("");
  const [pdfMessage, setPdfMessage] = useState("");
  const [showVideoMessage, setShowVideoMessage] = useState(false);
  const [showPdfMessage, setShowPdfMessage] = useState(false);
  const { course_id } = useParams();

  useEffect(() => {
    if (videoMessage) {
      setShowVideoMessage(true);
      const timeout = setTimeout(() => {
        setShowVideoMessage(false);
        setVideoMessage("");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [videoMessage]);

  useEffect(() => {
    if (pdfMessage) {
      setShowPdfMessage(true);
      const timeout = setTimeout(() => {
        setShowPdfMessage(false);
        setPdfMessage("");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [pdfMessage]);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDescrChange = (e) => {
    setDescr(e.target.value);
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
      setVideoMessage(
        "Details for this course and location have already been submitted."
      );
      return;
    }

    if (location && descr) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/UploadMedia/",
          {
            location: location,
            descr: descr,
            course_id: course_id,
          }
        );
        console.log(response.data);
        setLastSubmittedVideo({ course_id });
        setVideoMessage(response.data.message);
      } catch (error) {
        setVideoMessage("Error uploading video. Please try again.");
        console.error("Error uploading video:", error);
      }
    }
  };

  const handlePdfSubmit = async (e) => {
    e.preventDefault();
    console.log("PDF File:", pdfFile);
    console.log("PDF Description:", pdfDescription);

    if (pdfFile && pdfDescription) {
      const formData = new FormData();
      formData.append("pdf_file", pdfFile);
      formData.append("pdf_description", pdfDescription);
      formData.append("course_id", course_id);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/UploadPdf/",
          formData
        );
        setPdfMessage(response.data.message);
      } catch (error) {
        setPdfMessage("Error uploading PDF. Please try again.");
        console.error("Error uploading PDF:", error);
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
                value={location}
                onChange={handleLocationChange}
              />
            </UploadSection>
            <Description>
              <Label htmlFor="descr">SHORT VIDEO DESCRIPTION</Label>
              <Input
                type="text"
                id="descr"
                placeholder="Enter a short description for video"
                value={descr}
                onChange={handleDescrChange}
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
