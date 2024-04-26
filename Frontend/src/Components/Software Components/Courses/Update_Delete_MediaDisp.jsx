import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  padding: 20px;
  `;

const ContainerFluid = styled.div`
  padding: 0;
  `;

const Row = styled.div`
    display: flex;
    justify-content: center;
    `;

const Col = styled.div`
  flex: 20%;

  @media (min-width: 1200px) {
    flex: 20%;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 96%;
  font-size: 1.4rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  `;

const Th = styled.th`
  text-align: center;
  padding-bottom: 1rem;
  `;

const Tr = styled.tr`
  text-align: center;
  `;

const Td = styled.td`
  text-align: center;
  padding: 10px;

  a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const Update_Delete_MediaDisp = () => {

    const data = [
        {
            course_title: 'Course 1',
            descr: 'Description 1',
            video_id: 1,
            location: 'Location 1',
            course_id: 1
        },
        {
            course_title: 'Course 2',
            descr: 'Description 2',
            video_id: 2,
            location: 'Location 2',
            course_id: 2
        }
    ];
    return (

        <Main >
            <ContainerFluid >
                <Row>
                    <Col >
                        <Card >
                            <Table >
                                <thead>
                                    <Tr>
                                        <Th style={{ width: '20%' }}>Course Title</Th>
                                        <Th style={{ width: '20%' }}>Description</Th>
                                        <Th style={{ width: '60%' }} colSpan="2">Operations</Th>
                                    </Tr>
                                    <tr>
                                        <Th colSpan="4"> <hr /></Th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <Tr key={index}>
                                            <Td>{item.course_title}</Td>
                                            <Td>{item.descr}</Td>
                                            <Td>
                                                {/* <a href={`media_update.php?id=${item.video_id}&loc=${item.location}&cd=${item.course_id}&desc=${item.descr}`}>UPDATE</a> */}
                                                <a>UPDATE</a>
                                            </Td>
                                            <Td>
                                                {/* <a href={``} onClick={() => checkDelete()}>Delete</a> */}
                                                <a onClick={() => checkDelete()}>Delete</a>
                                            </Td>
                                        </Tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </ContainerFluid>
        </Main>
    );
};

export default Update_Delete_MediaDisp;
