import React from 'react'
import styled from 'styled-components';
import PageWrapper from '../../../Components/Software Components/Profile/PageWrapper.jsx';

const Main_wrapper = styled.div`
  display:block;
//   background-color: #f1f2f6;
  padding: 10px;
`;

const Profile = () => {
    return (
        <Main_wrapper>
            {/* navbar */}
            {/* sidebar */}
            <PageWrapper/>
        </Main_wrapper>
    );
};

export default Profile;
