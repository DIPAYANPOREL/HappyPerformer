import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  margin-bottom: 20px;
  width: 100%;
  max-width: 1200px;
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

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
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
  const [data, setData] = useState({ tasks: [], sop: [], files: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/soppolicies");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRating = async (sopId, rating) => {
    try {
      let newRating = 0;
      const sopItem = data.sop.find((item) => item.sop_id === sopId);

      if (rating === sopItem.selfRate) {
        newRating = 0;
      } else {
        newRating = rating;
      }

      setData((prevData) => ({
        ...prevData,
        sop: prevData.sop.map((sopItem) =>
          sopItem.sop_id === sopId
            ? { ...sopItem, selfRate: newRating }
            : sopItem
        ),
      }));

      await axios.put(`http://127.0.0.1:8000/tasks/${sopId}/`, {
        selfratings: newRating,
      });
      fetchData();
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle>Your SOP's list & Company's Policies</CardTitle>
            </CardHeader>

            {loading ? (
              <NoSOP>
                <div>
                  <div>
                    <h1>Loading...</h1>
                  </div>
                </div>
              </NoSOP>
            ) : data.sop.length === 0 ? (
              <NoSOP>
                <div>
                  <div>
                    <h1>No SOP</h1>
                  </div>
                </div>
              </NoSOP>
            ) : (
              <TableWrapper>
                <Table>
                  <TableHead>
                    <tr>
                      <th style={{ width: "5%" }}>ID</th>
                      <th style={{ width: "25%" }}>Type - Name</th>
                      <th style={{ width: "15%" }}>Date</th>
                      <th style={{ width: "10%" }}>Self Rate</th>
                      <th style={{ width: "17%" }}>Filename</th>
                      <th style={{ width: "9%" }}>Manager Ratings</th>
                      <th style={{ width: "20%" }}>Manager Remark</th>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {data.sop.map((sopItem) => {
                      const task = data.tasks.find(
                        (taskItem) => taskItem.sop_id === sopItem.sop_id
                      );
                      return (
                        <tr key={sopItem.sop_id}>
                          <td style={{ width: "3em" }}>{sopItem.sop_id}</td>
                          <td>{`${sopItem.type} - ${sopItem.s_name}`}</td>
                          <td>{sopItem.sdate}</td>
                          <td>
                            <StarRating>
                              {[...Array(5)].map((_, index) => (
                                <FaStar
                                  key={index}
                                  color={
                                    index + 1 <=
                                    (task ? task.selfratings || 0 : 0)
                                      ? "#ffcc00"
                                      : "#e4e5e9"
                                  }
                                  onClick={() =>
                                    handleRating(sopItem.sop_id, index + 1)
                                  }
                                />
                              ))}
                            </StarRating>
                          </td>
                          <td>
                            <a href={`uploads/${sopItem.file_name}`}>
                              Open File
                            </a>
                          </td>
                          <td>{task ? task.ratings || "-" : "-"}</td>
                          <td>{task ? task.remark || "-" : "-"}</td>
                        </tr>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableWrapper>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SopDisp;
