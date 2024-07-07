// import React, { useState } from 'react';
// import styled from 'styled-components';
// import Footer from '../../../Components/Software Components/Footer';
// import Nav from '../../../Components/Software Components/Dashboard/Nav';

// const DependentDetailsStyled = styled.div`
//   background-color: #fff;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 75%;
//   max-width: 98%;
//   border-radius: 10px;
//   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
// `;

// const Table = styled.table`
//   width: 95%;
//   overflow: auto;
//   border-collapse: collapse;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   margin-left: auto;
//   margin-right: auto;
//   border: 1px solid #ddd;

//   th,
//   td {
//     padding: 10px 12px;
//     text-align: left;
//     border-bottom: 1px solid #ddd;
//     height: 15px;
//     border-right: 1px solid #ccc;
//   }

//   th {
//     background-color: #0b2447;
//     color: #fff;
//     border-right: 1px solid #ccc;
//   }

//   tr:nth-child(even) td {
//     background-color: #f2f2f2;
//   }

//   tr td:last-child {
//     border-right: none;
//   }

//   tr:last-child td {
//     border-bottom: none;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   margin-left: 27px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const Form = styled.form`
//   width: 45%;
//   margin-top: 40px;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 20px;
//   background-color: #fff;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
// `;

// const FormSection = styled.div`
//   margin-bottom: 10px;
// `;

// const FormLabel = styled.label`
//   font-weight: bold;
//   margin-bottom: 8px;
// `;

// const FormInput = styled.input`
//   width: 100%;
//   height: 36px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   margin-top: 10px;
// `;

// const FormSelect = styled.select`
//   width: 100%;
//   height: 30px;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// const DependentDetails = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [DependentDetails, setDependentDetails] = useState([]);

//   const toggleForm = () => {
//     setShowForm((prevState) => !prevState);
//   };

//   const saveDetails = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     const newDetails = {
//       name: formData.get('depname'),
//       dependentgender: formData.get('depgender'),
//       date: formData.get('depdob'),
//       relation: formData.get('deprelation'),
//       description: formData.get('depdescription'),
//     };

//     setDependentDetails((prevState) => [...prevState, newDetails]);
//     alert('Details Updated Successfully');

//     event.target.reset();
//   };

//   const deleteItem = (index) => {
//     const newList = [...DependentDetails];
//     newList.splice(index, 1);
//     setDependentDetails(newList);
//   };

//   return (
//     <>
//       <Nav />
//       {!showForm && (
//         <DependentDetailsStyled>
//           <div className="workcontainer">
//             <Table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Gender</th>
//                   <th>DOB</th>
//                   <th>Relation</th>
//                   <th>Description</th>
//                   <th>Edit</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {DependentDetails.map((detail, index) => (
//                   <tr key={index}>
//                     <td>{detail.name}</td>
//                     <td>{detail.dependentgender}</td>
//                     <td>{detail.date}</td>
//                     <td>{detail.relation}</td>
//                     <td>{detail.description}</td>
//                     <td>
//                       <Button
//                         onClick={() => {
//                           const newDetails = { ...detail };
//                           alert(JSON.stringify(newDetails));
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </td>
//                     <td>
//                       <Button onClick={() => deleteItem(index)}>Delete</Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//             <Button onClick={toggleForm}>
//               Add Details
//             </Button>
//           </div>
//         </DependentDetailsStyled>
//       )}
//       {showForm && (
//         <Form onSubmit={saveDetails}>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <h1 style={{ marginBottom: '20px' }}>Dependent Details</h1>
//           </div>
//           <FormSection style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
//             <div style={{ width: '100%' }}>
//               <FormLabel>Name<span style={{ color: 'red' }}>*</span></FormLabel>
//               <FormInput type='text' name='depname' placeholder='Enter Name Of Dependent' required />
//             </div>
//           </FormSection>
//           <FormSection style={{ height: '40px', marginBottom: '28px', marginTop:'10px' }}>
//             <FormLabel>Gender</FormLabel>
//             <FormSelect name="depgender" style={{ height: '100%' }}>
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </FormSelect>
//           </FormSection>
//           <FormSection>
//             <FormLabel>Dependent Date Of Birth</FormLabel>
//             <FormInput type="date" name="depdob" placeholder="dd-mm-yyyy" />
//           </FormSection>
//           <FormSection>
//             <FormLabel>Relation</FormLabel>
//             <FormInput type="text" name="deprelation" placeholder="Relation With Dependent" />
//           </FormSection>
//           <FormSection>
//             <FormLabel>Description</FormLabel>
//             <FormInput type="text" name="depdescription" placeholder="Description" />
//           </FormSection>
//           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Button style={{ marginLeft: '1px', }} type="submit">
//               Save Details
//             </Button>
//             <Button onClick={toggleForm} style={{ marginLeft: '10px' }}>
//               Close
//             </Button>
//           </div>
//         </Form>
//       )}
//       <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default DependentDetails;


import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Footer from '../../../Components/Software Components/Footer';
import Nav from '../../../Components/Software Components/Dashboard/Nav';

const DependentDetailsStyled = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 98%;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const Table = styled.table`
  width: 95%;
  overflow: auto;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;

  th,
  td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    height: 15px;
    border-right: 1px solid #ccc;
  }

  th {
    background-color: #0b2447;
    color: #fff;
    border-right: 1px solid #ccc;
  }

  tr:nth-child(even) td {
    background-color: #f2f2f2;
  }

  tr td:last-child {
    border-right: none;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 27px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Form = styled.form`
  width: 45%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;

const FormSection = styled.div`
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
`;

const FormSelect = styled.select`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DependentDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [DependentDetails, setDependentDetails] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  const saveDetails = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newDetails = {
      name: formData.get('depname'),
      dependentgender: formData.get('depgender'),
      date: formData.get('depdob'),
      relation: formData.get('deprelation'),
      description: formData.get('depdescription'),
    };

    try {
      if (editingIndex !== null) {
        const response = await axios.put(`http://127.0.0.1:8000/UpdateDependent/${editingIndex}`, newDetails);
        setDependentDetails((prevState) => prevState.map((item, index) => (index === editingIndex ? response.data : item)));
        setEditingIndex(null);
      } else {
        const response = await axios.post('http://127.0.0.1:8000/UpdateDependent/', newDetails);
        setDependentDetails((prevState) => [...prevState, response.data]);
      }
      alert('Details Updated Successfully');
      event.target.reset();
      setShowForm(false);
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  const deleteItem = async (index) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/UpdateDependent/${index}`);
      setDependentDetails((prevState) => prevState.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  return (
    <>
      <Nav />
      {!showForm && (
        <DependentDetailsStyled>
          <div className="workcontainer">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Relation</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {DependentDetails.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.name}</td>
                    <td>{detail.dependentgender}</td>
                    <td>{detail.date}</td>
                    <td>{detail.relation}</td>
                    <td>{detail.description}</td>
                    <td>
                      <Button onClick={() => startEditing(index)}>
                        Edit
                      </Button>
                    </td>
                    <td>
                      <Button onClick={() => deleteItem(index)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button onClick={toggleForm}>
              Add Details
            </Button>
          </div>
        </DependentDetailsStyled>
      )}
      {showForm && (
        <Form onSubmit={saveDetails}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 style={{ marginBottom: '20px' }}>Dependent Details</h1>
          </div>
          <FormSection style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ width: '100%' }}>
              <FormLabel>Name<span style={{ color: 'red' }}>*</span></FormLabel>
              <FormInput type='text' name='depname' placeholder='Enter Name Of Dependent' required />
            </div>
          </FormSection>
          <FormSection style={{ height: '40px', marginBottom: '28px', marginTop: '10px' }}>
            <FormLabel>Gender</FormLabel>
            <FormSelect name="depgender" style={{ height: '100%' }}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </FormSelect>
          </FormSection>
          <FormSection>
            <FormLabel>Dependent Date Of Birth</FormLabel>
            <FormInput type="date" name="depdob" placeholder="dd-mm-yyyy" />
          </FormSection>
          <FormSection>
            <FormLabel>Relation</FormLabel>
            <FormInput type="text" name="deprelation" placeholder="Relation With Dependent" />
          </FormSection>
          <FormSection>
            <FormLabel>Description</FormLabel>
            <FormInput type="text" name="depdescription" placeholder="Description" />
          </FormSection>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button style={{ marginLeft: '1px', }} type="submit">
              Save Details
            </Button>
            <Button onClick={toggleForm} style={{ marginLeft: '10px' }}>
              Close
            </Button>
          </div>
        </Form>
      )}
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </>
  );
};

export default DependentDetails;
