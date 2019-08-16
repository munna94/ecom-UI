import React, { useState} from "react";
import Layout from "../core/Layout";
import axios from "axios";
import { API } from "../Config";

const Signup = () => {
    const [values, setvalues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });
    const handleChange = (name,event) =>{//imutable b/c first copy and then only changed variable should replaced if not copy then it will replace whole object with chaged field only
        setvalues({ ...values, error: false, [name]: event.target.value });
    
    }
    const { name, email, password ,error,success} = values;
    const headers = {
        'Accept': 'application/json',
        'Content-Type':"application/json"
      }
      

    const signup = (user) => {
        return new Promise((resolve, reject) => {
            axios.post(`${API}/signup`,user, { headers: headers }).then(signupResult => {
                console.log('signup result', signupResult);
                resolve(signupResult)
            }).catch(err => {
                const response = err.response
                reject(response.data.error)
            })
        })
        
    }
    
    const clickSubmit = (event) => {
        event.preventDefault(); // reload browser when form submit. this is default behaviour
        signup({ name, email, password }).then(data => {     //call method for api call
            setvalues({...values,name: '',email: '',password: '',error: '',success:true}) 
        }).catch(err => {
            setvalues({...values,error:err,success:false})
        })
    }
    const signUpForm = () => {
        return <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
               <input type="text" onChange={(event)=>handleChange('name',event)} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="text" onChange={(event)=>handleChange('email',event)} className="form-control" />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" onChange={(event)=>handleChange('password',event)} className="form-control" />
           </div>
           <button  className="btn btn-primary">Submit</button>
        </form>
    }
    
    const showError = () => {     
        console.log('fff', success);
        console.log('fff',error);
        
        return <div className="alert alert-danger" style={{display:error ? " ":"none"}}>
            {error}
        </div>
    }
    const showSuccess = () => {
        return <div className="alert alert-info"  style={{display:success ? " ":"none"}}>
        New account Created .Please sign in.
    </div>
        
    }
    return (<Layout title="Signup Page" description="Node React ecom App" className="container col-md-8 offset-md-2" >
        {showSuccess()}
        {showError()} 
        {signUpForm()}
        
        
    </Layout>)
}

export default Signup;