import React from 'react'

const CreateCase = () => {
  return (
    <div className='casecontainer'>
    <form>
      <div className='ui-divider' style={{marginTop:'15px'}}></div>
      <div className='ui-form'>
        <h1 className='text-center'style={{marginBottom:'30px'}}>Create Case</h1>
        <div className='casefield'>
            <label>Create Case For <span className='Mandatory'>*</span></label>
            <input type='text' name='createcase' placeholder='Create Case For' required></input>
            <span className='Error'>This field is mandatory</span>
        </div>
        <div className='casefield' style={{ width: "25rem", borderRadius: "4px"}}>
            <label>Case Type</label>
            <select name='casetype' style={{ width: "41rem", height:"2.6rem", borderRadius: "4px"}} >
                <option value='case-dropdown' selected disabled>Select</option>
                <option value='Benefits'>Benefits</option>
                <option value='CompensationPayroll'>Compensation and Payroll</option>
                <option value='TravelExpense'>Travel and Expense </option>
          </select>
        </div>
        <div className='casefield'>
            <label>Case Title</label>
            <input type='text' name='casetitle' placeholder='Case Title'></input>
        </div>
        <div className='casefield'>
            <label>Detailed Description</label>
            <input type='text' name='description' placeholder='Description'></input>
        </div>
        <button className='casebtn'>Submit</button>
      </div>
      </form>
    </div>
  );
}

export default CreateCase
