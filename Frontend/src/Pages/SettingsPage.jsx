import React, {useState} from 'react';

const SettingsPage = () => {
    const[formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        skills:'',
        password:'',
        confirmPassword:''
    });

    const [errors,setErrors] = useState({

    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,[name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErros = {};
        if(!formData.name.trim()){
            validationErros.name="name is required"
        }
        if(!formData.email.trim()){
            validationErros.email="email is required"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErros.email="email is not valid"
        }
        if(!formData.password.trim()){
            validationErros.password="password is required"
        } else if(formData.password.length < 10){
            validationErros.password="password should be at least 10 characters"
        }

        if(formData.confirmPassword !== formData.password){
            validationErros.confirmPassword="passwords do not match"
        }

        setErrors(validationErros)

        if(Object.keys(validationErros).length === 0){
            alert("Form Submitted Successfully")
        }
    }
  return (
        <form onSubmit={handleSubmit}>
            <div className="public-info">
                <h2>Public Information</h2>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name' autoComplete='off' onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Email' autoComplete='off' onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Phone</label>
                    <input type='text' name='phone' placeholder='Phone' autoComplete='off' />
                </div>
                <div>
                    <label>Skills</label>
                    <input type='text' name='skills' placeholder='Skills' autoComplete='off' />
                </div>
            </div>
            <div className="password-section">
                <h2>Password Section</h2>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                   <label>Confirm Password</label>
                   <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={handleChange}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
            </div>
            <button type='submit'>Save Changes</button>
        </form>
)
}

export default SettingsPage
