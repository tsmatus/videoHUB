import React, {useState} from 'react'
import '../assets/styles/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { loginRequest } from "../actions"


const Login = props => {
    const [form, setValues] = useState({
        email: '',
    }
    )
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/')
    }
    
    return(
        <section className="login">
            <section className="login__container">
                <h2>Inicia Sesion</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        name = 'email'
                        className = "input" 
                        type="text" 
                        placeholder = "Correo" 
                        onChange = {handleInput}
                        />
                    <input 
                        name = 'password'	
                        className ="input" 
                        type="password" 
                        placeholder = "Contraseña" 
                        onChange = {handleInput}
                        />
                    <button className="button">Iniciar Sesion</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox"/>Recuerdame
                        </label>
                        <a href="/">Olvide Mi Contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                <div><img src = {googleIcon} alt=""/>Inicia Sesion Con Google</div>
                <div><img src = {twitterIcon} alt=""/>Inicia Sesion Con Twitter</div>
                </section>
                <p className="login__container--register">
                    No Tienes Ninguna Cuenta 
                    <Link to = "/register">
                        Registrate
                    </Link>
                </p>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    loginRequest,

}

export default connect(null, mapDispatchToProps)(Login)