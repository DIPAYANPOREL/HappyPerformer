import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Container = styled.div`
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const CardHeader = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const CardTitle = styled.h5`
  margin-bottom: 0;
  position: relative;
  font-size: 1rem;
  i {
    position: absolute;
    right: 20px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    padding: 0.75rem;
    text-align: center;
  }
`;

const TableBody = styled.tbody`
  td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    text-align: center;
  }
`;

const NoSOP = styled.div`
  text-align: center;
  padding: 2rem;
`;

const StarRating = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  color: #ffcc00;
  cursor: pointer;
`;

const SopDisp = () => {
  const [count, setCount] = useState(10);
  const [data, setData] = useState([
    {
      id: 1,
      type: 'SOP',
      name: 'Example SOP',
      date: '2023-04-20',
      selfRate: 4,
      filename: 'example.pdf',
      managerRating: 5,
      managerRemark: 'Good job',
    },
  ]);

  const handleRating = (id, rating) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selfRate: rating } : item
      )
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle>
                Your SOP's list & Company's Policies
              </CardTitle>
            </CardHeader>

            {count === 0 ? (
              <NoSOP>
                <div>
                  <div>
                    <h1>No SOP</h1>
                  </div>
                </div>
              </NoSOP>
            ) : (
              <Table>
                <TableHead>
                  <tr>
                    <th style={{ width: '5%' }}>ID</th>
                    <th style={{ width: '25%' }}>Type - Name</th>
                    <th style={{ width: '15%' }}>Date</th>
                    <th style={{ width: '10%' }}>Self Rate</th>
                    <th style={{ width: '17%' }}>Filename</th>
                    <th style={{ width: '9%' }}>Manager Ratings</th>
                    <th style={{ width: '20%' }}>Manager Remark</th>
                  </tr>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td style={{ width: '3em' }}>{item.id}</td>
                      <td>{`${item.type} - ${item.name}`}</td>
                      <td>{item.date}</td>
                      <td>
                        <StarRating>
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              color={
                                index < item.selfRate ? '#ffcc00' : '#e4e5e9'
                              }
                              onClick={() => handleRating(item.id, index + 1)}
                            />
                          ))}
                        </StarRating>
                      </td>
                      <td>
                        <a href={`uploads/${item.filename}`}>Open File</a>
                      </td>
                      <td>{item.managerRating || '-'}</td>
                      <td>{item.managerRemark || '-'}</td>
                    </tr>
                  ))}
                </TableBody>
              </Table>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SopDisp;
