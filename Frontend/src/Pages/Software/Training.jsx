import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from "../../Components/Software Components/Footer";


const FlexContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const AdditionalContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const CertificateButton = styled.button`
  width: 9vw;
  border: none;
  padding: 11px 15px;
  background-color: #e74c3c;
  color: white;
  cursor: pointer;
  margin: 1rem auto;
  border-radius: 6px;
  

  &:hover {
    background-color: #6659e0;
  }
  @media (max-width: 768px) {
    width: 30vw;
  }
`;

const LearningButton = styled.button`
 width: 14vw;
border: none;
padding: 11px 15px;
background-color: #e74c3c;
color: white;
cursor: pointer;
margin: 1rem auto;
border-radius: 6px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #6659e0;
}

@media (max-width: 768px) {
  width: 30vw;
}
`;

const PdfCard = styled.div`
width: 10vw;
height: 10vh;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  const Header = styled.h1`
  text-align: center;
  margin-top: 2rem;
  `;

const Training = () => {
  const videos = [
    {
      id: 1,
      title: 'JavaScript Tutorial',
      description: 'This is a complete JavaScript Course',
      image: 'https://i.ytimg.com/vi/PbpYtmTe5o4/hqdefault.jpg',
      link: 'https://www.youtube.com/embed/PkZNo7MFNFg?si=1HuwXr2k1cAZZDQu',
    },
    {
      id: 2,
      title: 'HTML Tutorial',
      description: 'This is a complete HTML Course',
      image: 'https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg',
      link: 'https://www.youtube.com/embed/kUMe1FH4CHE?si=vTLbH2ADCckqUkcZ',
    },
  ];

  const [learningCompleted, setLearningCompleted] = useState({});

  const handleLearningChange = (id) => {
    setLearningCompleted((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
    <Header>Training</Header>
    <FlexContainer>
      <MainContainer>
        <div className="container">
          {/* <h2 className="text-center pt-4">Course Title</h2> */}
          <div className="row justify-content-center">
            <div key={videos[0].id} className="col-md-4 mt-4">
              <div className="card">
                <div className="card-img-top embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={videos[0].link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{videos[0].title}</h5>
                  <p className="card-text">{videos[0].description}</p>
                  <CertificateButton>Get Certificate</CertificateButton>
                  <div className="mt-2">
                    <h4>Video Training</h4>
                    <LearningButton
                      className="btn btn-primary"
                      onClick={() => handleLearningChange(videos[0].id)}
                    >
                      Learnings for this video
                    </LearningButton>
                    <div>
                      {learningCompleted[videos[0].id] ? (
                        <span className="text-success">Completed</span>
                      ) : (
                        <span className="text-danger">Not Completed</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <PdfCard>
                <h5>Study Material</h5>
                <a
                  href="https://happyperformer.com/pdf/JS%20pdf%20description.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Download PDF
                </a>
              </PdfCard>
            </div>
          </div>
        </div>
      </MainContainer> 
      <AdditionalContainer> 
        <div className="container">
          <div className="row justify-content-center">
            <div key={videos[1].id} className="col-md-4 mt-4">
              <div className="card">
                <div className="card-img-top embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={videos[1].link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{videos[1].title}</h5>
                  <p className="card-text">{videos[1].description}</p>
                  <CertificateButton>Get Certificate</CertificateButton>
                  <div className="mt-2">
                    <h4> Video Training </h4>
                    <LearningButton
                      className="btn btn-primary"
                      onClick={() => handleLearningChange(videos[1].id)}
                    >
                      
                      Learnings for this video
                    </LearningButton>
                    <div>
                      {learningCompleted[videos[1].id] ? (
                        <span className="text-success">Completed</span>
                      ) : (
                        <span className="text-danger">Not Completed</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <PdfCard>
                <h5> Study Material </h5>
                <a
                  href="https://happyperformer.com/pdf/JS%20pdf%20description.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Download PDF
                </a>
              </PdfCard>
            </div>
          </div>
        </div>
      </AdditionalContainer>
    </FlexContainer>
    <Footer/>
    </>
  );
};

export default Training;