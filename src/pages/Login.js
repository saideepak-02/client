import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const login = (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        axios.post("http://localhost:8000/authentication/login", data).then(function (data) {
            console.log(data)
            if (data.data.success === true) {
                navigate("/userprofile")
              
              
            }
       
        }).catch(function (err) {
            console.log(err)
        })


    }
    return (
        <div className="container ">
            <div className="row main">
                <div className="card col-md-8">
                    <h3>Login </h3>
                    <form onSubmit={(e) => login(e)}>
                        <div className="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => onEmailChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => onPasswordChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                      
                        <div>
                            <p>Dont have account please signup <Link to="/signup">here</Link></p>
                        </div>
                    </form>
                </div>

            </div>
           
        </div>
    )
}

export default Login;