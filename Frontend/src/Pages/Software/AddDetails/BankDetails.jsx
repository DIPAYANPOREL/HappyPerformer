import React from 'react'

const BankDetails = () => {
  return (
    <div>
      <div className='bankcontainer'>
    <form>
      <div className='ui-divider' style={{marginTop:'10px'}}></div>
      <div className='ui-form'>
        <h1 className='text-center'style={{marginBottom:'20px'}}>Bank Details</h1>
        <div className='casefield' style={{marginBottom:'20px'}}>
            <label>Account Holder's Name</label>
            <input type='text' name='accountname' ></input>
        </div>
        <div className='casefield' style={{marginBottom:'20px'}}>
            <label>Name Of Bank</label>
            <input type='text' name='bankname'></input>
        </div>
        <div className='casefield' style={{marginBottom:'20px'}}>
            <label>Account Number</label>
            <input type='number' name='accountnumber' ></input>
        </div>

        <div className='casefield' style={{marginBottom:'20px'}}>
            <label>Branch(City)</label>
            <input type='text' name='branch' ></input>
        </div>
        <div className='casefield' style={{ width: "25rem", borderRadius: "4px", marginBottom:'20px'}}>
            <label>Bank Account Type</label>
            <select name='casetype' style={{ width: "41rem", height:"2.6rem", borderRadius: "4px", marginBottom:'20px'}} >
                <option value='case-dropdown' selected disabled>Select</option>
                <option value=''>Savings Account</option>
                <option value=''>Current Account</option>
                <option value=''>Fixed Deposit Account</option>
                <option value=''>Recurring Deposit Account</option>
          </select>
        </div>
        <div className='casefield' style={{ marginBottom:'20px'}}>
            <label>Branch Code(IFSC)No </label>
            <input type='text' name='branchcode'></input>
        </div>
        <div className='casefield' style={{ marginBottom:'30px'}}>
            <label>PAN Number</label>
            <input type='text' name='pannumber'></input>
        </div>
        <button className='casebtn' onClick={() => alert("Details Updated Successfully ")}>Save Details</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default BankDetails
