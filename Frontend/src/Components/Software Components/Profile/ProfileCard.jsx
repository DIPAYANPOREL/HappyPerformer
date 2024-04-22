import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 0;
`;

const CardBody = styled.div``;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Col = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 768px) {
    &.col-md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }

    &.col-md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
  }
`;

const ProfileView = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProfileImgWrap = styled.div``;

const ProfileImg = styled.div`
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const ProfileBasic = styled.div`
  flex: 1;
`;

const ProfileInfoLeft = styled.div``;

const UserName = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;

const StaffId = styled.div``;

const StaffMsg = styled.div``;

const PersonalInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PersonalInfoItem = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

const PersonalInfoTitle = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const PersonalInfoText = styled.div``;

const AvatarBox = styled.div``;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProEdit = styled.div``;

const ProfileCard = () => {
  return (
    <Card className="mb-0">
      <CardBody>
        <Row>
          <Col md={12}>
            <ProfileView>
              <ProfileImgWrap>
                <ProfileImg>
                  <a href="/react/template/profile">
                    {/* <img src={avatar02} alt="User Image" /> */}
                  </a>
                </ProfileImg>
              </ProfileImgWrap>
              <ProfileBasic>
                <Row>
                  <Col md={5}>
                    <ProfileInfoLeft>
                      <UserName className="user-name m-t-0 mb-0">John Doe</UserName>
                      <h6 className="text-muted">UI/UX Design Team</h6>
                      <small className="text-muted">Web Designer</small>
                      <StaffId>Employee ID : FT-0001</StaffId>
                      <div className="small doj text-muted">Date of Join : 1st Jan 2023</div>
                      <StaffMsg>
                        <a className="btn btn-custom" href="/react/template/call/chat">
                          Send Message
                        </a>
                      </StaffMsg>
                    </ProfileInfoLeft>
                  </Col>
                  <Col md={7}>
                    <Row>
                      <Col md={6}>
                        <PersonalInfo className="personal-info">
                          <PersonalInfoItem>
                            <PersonalInfoTitle>Phone:</PersonalInfoTitle>
                            <PersonalInfoText>
                              <a href="tel:9876543210">9876543210</a>
                            </PersonalInfoText>
                          </PersonalInfoItem>
                          <PersonalInfoItem>
                            <PersonalInfoTitle>Email:</PersonalInfoTitle>
                            <PersonalInfoText>
                              <a href="mailto:johndoe@example.com">johndoe@example.com</a>
                            </PersonalInfoText>
                          </PersonalInfoItem>
                          <PersonalInfoItem>
                            <PersonalInfoTitle>Birthday:</PersonalInfoTitle>
                            <PersonalInfoText>24th July</PersonalInfoText>
                          </PersonalInfoItem>
                          <PersonalInfoItem>
                            <PersonalInfoTitle>Address:</PersonalInfoTitle>
                            <PersonalInfoText>1861 Bayonne Ave, Manchester Township, NJ, 08759</PersonalInfoText>
                          </PersonalInfoItem>
                          <PersonalInfoItem>
                            <PersonalInfoTitle>Gender:</PersonalInfoTitle>
                            <PersonalInfoText>Male</PersonalInfoText>
                          </PersonalInfoItem>
                        </PersonalInfo>
                      </Col>
                      <Col md={6}>
                        <PersonalInfo className="personal-info">
                          <PersonalInfoItem>
                            <PersonalInfoTitle>Reports to:</PersonalInfoTitle>
                            <PersonalInfoText>
                              <AvatarBox>
                                <Avatar className="avatar avatar-xs">
                                  {/* <img src={avatar16} alt="User Image" /> */}
                                </Avatar>
                              </AvatarBox>
                              <a href="/react/template/profile/profile">Jeffery Lalor</a>
                            </PersonalInfoText>
                          </PersonalInfoItem>
                        </PersonalInfo>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </ProfileBasic>
              <ProEdit>
                <a data-bs-target="#profile_info" data-bs-toggle="modal" className="edit-icon" href="/react/template/profile">
                  <i className="fa-solid fa-pencil"></i>
                </a>
              </ProEdit>
            </ProfileView>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
