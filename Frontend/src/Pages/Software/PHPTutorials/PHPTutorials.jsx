import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Software Components/Dashboard/Header";
import Layout from "../../../Components/Software Components/Dashboard/Layout";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const WhiteContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16/9;
  border: 5px solid black;
`;

const PHPTutorials = ({ videoId }) => {
  return (
    <>
      <Layout>
        <Header title="Tutorials" />
        <Container>
          <h1>Tutorial Videos</h1>
          <WhiteContainer>
            <VideoContainer>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/m52ljs78S24?si=inKcAqj-HSzaAWgA${videoId}`}
                title="PHP Tut 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/GRqw0pBwewY?si=Dq3Wev2E2Kt_3rKC${videoId}`}
                title="PHP Tut 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/7YCFg9gyMjE?si=yiMESCtd1jfXXU8n${videoId}`}
                title="PHP Tut 3"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/FLs6rAVQWs0?si=flobZZW-H9Wcw8N5${videoId}`}
                title="PHP Tut 4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/MujfofukfwQ?si=WmeQ-wjkvadhLj_R${videoId}`}
                title="PHP Tut 5"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/bOqTCDfc7Tk?si=Fxzw-R6LOk8ziRH0${videoId}`}
                title="PHP Tut 6"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/oY91DwQyGlI?si=0KO98c5Pmr1TYAje${videoId}`}
                title="PHP Tut 7"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/OlvCP8kHjvs?si=ubt7DWNlwr0t93IN${videoId}`}
                title="PHP Tut 8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/vjw5UmY7g9M?si=a3uDYTicAcwgqkW9${videoId}`}
                title="PHP Tut 9"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/D7mqV-p1kEc?si=s-rvzyVal9xGWxtC${videoId}`}
                title="PHP Tut 10"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/vxSkDk6x9-o?si=zvzm5d5MUS_anzcR${videoId}`}
                title="PHP Tut 11"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/jiTI33oeKzU?si=jiNWp-LTt_fabaCV${videoId}`}
                title="PHP Tut 12"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/YIM6OLBMyY8?si=j_vlkBoWUR-E9IZf${videoId}`}
                title="PHP Tut 13"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/EbdQjdXw6XQ?si=OD5WluzTn5kdRDNs${videoId}`}
                title="PHP Tut 14"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/g7h5ndxKV9U?si=UKerv-SYqfyuTiDy${videoId}`}
                title="PHP Tut 15"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/H2XtR1zwg6s?si=Sc-zN4gp7mcxnbkv${videoId}`}
                title="PHP Tut 16"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/KMYZqb88Wm0?si=ioXBThLZzGCTwZXB${videoId}`}
                title="PHP Tut 17"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/s-gc9CvbJ0M?si=hjz6tsDNSf6kcSKj${videoId}`}
                title="PHP Tut 18"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/LiK0mhBbhbc?si=ZmFRFfMS1T9wmADN${videoId}`}
                title="PHP Tut 19"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/tHKsZdS8Oug?si=aMNzSeZqJOUl2nZH${videoId}`}
                title="PHP Tut 20"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/7ALVC1eWgdI?si=9DQbO5KvlWCb1Qgx${videoId}`}
                title="PHP Tut 21"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/IagGGcC95Ig?si=VJcCQDUrTVmL4dGn${videoId}`}
                title="PHP Tut 22"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/9Mkd4ig3yjE?si=bgKn1AYQ_guL9plU${videoId}`}
                title="PHP Tut 23"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/i3UcDdOcodc?si=CZFOhUN-fg4Q5U7J${videoId}`}
                title="PHP Tut 24"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/JAgd_L3GhI0?si=FHFpYMsowsWvjiuE${videoId}`}
                title="PHP Tut 25"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/FbLYsTHJKDw?si=h8jZNsel_o65z9yD${videoId}`}
                title="PHP Tut 26"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/N8pHSP3ob7o?si=17DfGt4Fi97ycoHJ${videoId}`}
                title="PHP Tut 27"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/Ojk70Ag8Ofs?si=7duGsjOqPYRYcR9f${videoId}`}
                title="PHP Tut 28"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/XDz9SMYyTQo?si=ZD5mNZP6i9LuX82n${videoId}`}
                title="PHP Tut 29"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/yrFr5PMdk2A?si=5T3evicWxRLaoF_k${videoId}`}
                title="PHP Tut 30"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></ResponsiveIframe>
            </VideoContainer>
          </WhiteContainer>
        </Container>
      </Layout>
    </>
  );
};

export default PHPTutorials;
