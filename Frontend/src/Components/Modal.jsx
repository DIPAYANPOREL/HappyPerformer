import React, {useState} from 'react'

const Modal = ({ closeModal, onSubmit, defaultValue }) => {

    const [formState, setFormState] = useState(
        defaultValue ||{
        coursetitle: "",
        email: ""
    });

    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if(formState.coursetitle && formState.email) {
            setErrors("")
            return true;
        }
        else{
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)) {
                if(!value){
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "))
            return false;
        }
    }
  
    const handleChange =(e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        onSubmit(formState)
        closeModal();
    };

  return (
    <div className='modal-container' 
    onClick={(e) => {
        if(e.target.className === "modal.container") closeModal();
        }}
    >
      <div className='modal'>
        <form>
            <div className='form-groups'>
                <label htmlFor='course-title'>Course Title</label>
                <input name='course-title' value={formState.coursetitle} onChange={handleChange}/>
            </div>
            <div className='form-groups'>
                <label htmlFor='email'>Email</label>
                <input name='email' value={formState.email} onChange={handleChange}/>
            </div>
            {errors && <div className='error'>{`Plase fill in: ${errors}`}</div> }
            <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
        </form> 
      </div>
    </div>
  )
}

export default Modal;
