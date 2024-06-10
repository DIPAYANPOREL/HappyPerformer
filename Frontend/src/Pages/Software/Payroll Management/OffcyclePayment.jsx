import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const TableContainer = styled.div`
  margin-top: 138px;
  width: 80%;
  margin-left: 10%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: -38px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1), 0 6px 20px 0 rgba(0,0,0,0.19);
  overflow-y: auto; 
  max-height: 450px; 
  padding-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background-color: #0b2447;
  color: #f1f1f1;
`;

const Td = styled.td`
  padding: 15px;
  text-align: left;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 5px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 5px;
  margin-top: 5px;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;

const Modal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 38%;
`;

const OffcyclePayment = () => {
  const [showForm, setShowForm] = useState(false);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')// change the API Endpoint
      .then(response => {
        setRows(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  }, []);

  const handleAddRow = () => {
    setShowForm(true);
  };

  const handleDeleteRow = (index) => {
    const rowToDelete = rows[index];
    axios.delete(`http://localhost:5000/api/payments/${rowToDelete.id}`) // change the API Endpoint
      .then(response => {
        setRows(rows.filter((_, i) => i !== index));
      })
      .catch(error => {
        console.error("There was an error deleting the row!", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newRow = {
      name: formData.get('name'),
      transactionName: formData.get('transactionName'),
      amount: parseFloat(formData.get('amount')),
      effectiveDate: formData.get('effectiveDate'),
      note: formData.get('note')
    };

    axios.post('http://localhost:5000/api/payments', newRow) // change the API Endpoint
      .then(response => {
        setRows([...rows, response.data]); // Update rows with newly inserted row
        setShowForm(false);
      })
      .catch(error => {
        console.error("There was an error adding the row!", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav/>
      <TableContainer>
        <Table>
          <thead>
            <Tr>
              <Th>Name</Th>
              <Th>Transaction Name</Th>
              <Th>Amount</Th>
              <Th>Effective Date</Th>
              <Th>Note</Th>
              <Th></Th>
            </Tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <Tr key={index}>
                <Td>{row.name}</Td>
                <Td>{row.transactionName}</Td>
                <Td>{row.amount}</Td>
                <Td>{row.effectiveDate}</Td>
                <Td>{row.note}</Td>
                <Td>
                  <Button onClick={() => handleDeleteRow(index)}>Delete</Button>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={handleAddRow} style={{ marginTop: '30px', width: '250px', height:'39px' }}>Add New Off-Cycle Payment</Button>
        <Modal show={showForm}>
          <ModalContent style={{ width: '380px' }}>
            <Form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="name">Name</label>
                <Input style={{ width: '100%', height:'38px'}} type="text" id="name" name="name" placeholder="Enter name" required />
                <label htmlFor="transactionName">Transaction Name</label>
                <Input style={{ width: '100%', height:'38px'}} type="text" id="transactionName" name="transactionName" placeholder="Enter transaction name" required />
                <label htmlFor="amount">Amount</label>
                <Input style={{ width: '100%',height:'38px'}} type="number" id="amount" name="amount" placeholder="Enter amount" required />
                <label htmlFor="effectiveDate">Effective Date</label>
                <Input style={{ width: '100%', height:'38px'}} type="date" id="effectiveDate" name="effectiveDate" placeholder="dd-mm-yyyy" required />
                <label htmlFor="note">Note</label>
                <Input style={{ width: '100%', height:'38px'}} type="text" id="note" name="note" placeholder="Enter note" required />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button type="submit" style={{width:'100px', height:'30px'}}>Insert</Button>
                <Button onClick={() => setShowForm(false)}  style={{width:'100px', height:'30px'}}>Cancel</Button>
              </div>
            </Form>
          </ModalContent>
        </Modal>
      </TableContainer>
      <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
        <Footer/>
      </div>
    </>
  );
};

export default OffcyclePayment;
