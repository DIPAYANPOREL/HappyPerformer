import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../../Components/Software Components/Footer'
import Nav from '../../../Components/Software Components/Dashboard/Nav'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Card = styled.div`
  width: 80%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  margin: 20px 0;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Form = styled.form`
  margin: 10px 0;
`;

const FormControl = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FileInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Poi = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [declaredAmount, setDeclaredAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([]);

  const getColor = (category) => {
    switch (category) {
      case '80C':
      return 'rgba(0, 123, 255, 0.3)';
      case '80D':
      return 'rgba(255, 193, 7, 0.3)';
      case 'other-income':
      return 'rgba(39, 167, 69, 0.3)';
      case 'other-investments':
      return 'rgba(33, 37, 51, 0.3)';
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Selected Category:', selectedCategory);
    console.log('Declared Amount:', declaredAmount);
    console.log('Actual Amount:', actualAmount);
    console.log('File:', file);

    // Add the submitted data to the table data with color
    setTableData([
      ...tableData,
      {
        category: selectedCategory,
        declaredAmount: declaredAmount,
        actualAmount: actualAmount,
        file: file,
        color: getColor(selectedCategory),
      },
    ]);

    // Clear the form fields
    setSelectedCategory('');
    setDeclaredAmount('');
    setActualAmount('');
    setFile(null);
  };

  const handleDelete = (index) => {
    // Remove the row from the tableData array
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  return (
    <>
    <Nav/>
    <Container>
      <Card>
        <h4>POI Details</h4>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Particulars</TableHeader>
              <TableHeader>Declared Amount</TableHeader>
              <TableHeader>Actual Amount</TableHeader>
              <TableHeader>View File</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <TableRow key={index} style={{ backgroundColor: data.color }}>
                <TableData>{data.category}</TableData>
                <TableData>Rs. {data.declaredAmount}</TableData>
                <TableData>Rs. {data.actualAmount}</TableData>
                <TableData>
                  {data.file ? (
                    <a href={URL.createObjectURL(data.file)} target="_blank" rel="noopener noreferrer">
                      View File
                    </a>
                  ) : (
                    '-'
                  )}
                </TableData>
                <TableData>
                  <DeleteButton onClick={() => handleDelete(index)}>Delete</DeleteButton>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card>
        <h5>Submit POI</h5>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <Label htmlFor="category">Select Category:</Label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="80C">80C Investments</option>
              <option value="80D">80D Investments</option>
              <option value="other-income">Other Sources of Income</option>
              <option value="other-investments">Other Investments and Exemptions</option>
            </select>
          </FormControl>
          <FormControl>
            <Label htmlFor="declared-amount">Declared Amount:</Label>
            <Input
              type="text"
              value={declaredAmount}
              onChange={(e) => setDeclaredAmount(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="actual-amount">Actual Amount:</Label>
            <Input
              type="text"
              value={actualAmount}
              onChange={(e) => setActualAmount(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <Label htmlFor="file">Choose File:</Label>
            <FileInput
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </FormControl>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </Card>
    </Container>
    <div style={{position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
      <Footer/>
    </div>
    </>
  );
};

export default Poi;