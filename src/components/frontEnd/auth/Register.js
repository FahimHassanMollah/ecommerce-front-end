import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export const Register = () => {

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password:''
  });

  const [registerFormValidationErrors, setRegisterFormValidationErrors] = useState({
    name: [],
    email: [],
    password: []
  });

  let navigate = useNavigate();

 const handleInput = (e) => {
   console.log(e);
   setRegisterInput({ ...registerInput, [e.target.name]: e.target.value })
   
  }
  const registerSubmit =async (e) => {
    e.preventDefault();
    console.log(registerInput);
    await axios.get('/sanctum/csrf-cookie');
  
      const response = await axios.post(`/api/register`, registerInput)
    if (response.data.status === 200) {

      setRegisterFormValidationErrors({
        name: [],
        email: [],
        password: []
      });
      localStorage.setItem('auth-token', JSON.stringify(response.data.token))
      localStorage.setItem('user-name', JSON.stringify(response.data.username))
      toast(`${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(`/login`);
    }
    else {
      setRegisterFormValidationErrors(response.data.validation_errors)
    }
   
    
  }

  return <div>
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                  <div className="card-body">
                    <form onSubmit={registerSubmit}>
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="form-floating mb-3 mb-md-0">
                            <input className="form-control" id="inputFirstName" name='name' onChange={handleInput} value={registerInput.name}  type="text" placeholder="Enter your first name" />
                            <label htmlFor="inputFirstName">Name</label>
                          </div>
                          <div>
                            {
                              registerFormValidationErrors.name.length > 0 && registerFormValidationErrors.name.map((errorItem, index) => <p key={index} className='text-danger mb-0'>{ errorItem }</p> )
                            }
        
                          </div>
                        </div>

                      </div>
                      <div className="form-floating mb-3">
                        <input className="form-control" id="inputEmail" type="email" name='email' onChange={handleInput} value={registerInput.email} placeholder="name@example.com" />
                        <label htmlFor="inputEmail">Email address</label>
                        <div>
                          {
                            registerFormValidationErrors.email.length > 0 && registerFormValidationErrors.email.map((errorItem, index) => <p key={index} className='text-danger mb-0'>{errorItem}</p>)
                          }

                        </div>
                      </div>
                     
                      <div className="row mb-3">
                        <div className="col-md-12">
                          <div className="form-floating mb-3 mb-md-0">
                            <input className="form-control" id="inputPassword" type="password" name='password' onChange={handleInput} value={registerInput.password} placeholder="Create a password" />
                            <label htmlFor="inputPassword">Password</label>
                          </div>
                        </div>
                        <div>
                          {
                            registerFormValidationErrors.password.length > 0 && registerFormValidationErrors.password.map((errorItem, index) => <p key={index} className='text-danger mb-0'>{errorItem}</p>)
                          }

                        </div>
                        {/* <div className="col-md-6">
                          <div className="form-floating mb-3 mb-md-0">
                            <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                          </div>
                        </div> */}
                      </div>
                      <div className="mt-4 mb-0">
                        <div className="d-grid"><button className="btn btn-primary btn-block" type='submit'>Create Account</button></div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer text-center py-3">
                    <div className="small"><Link to="login.html">Have an account? Go to login</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
    </div>
  </div>;
};
