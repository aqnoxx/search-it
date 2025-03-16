import { NavLink } from 'react-router'
import './Header.css'
import { useState } from 'react'

export default function Header(){
    const[jwt, setJwt] = useState(false)
    //console.log(styles.btn)
    return(
        <header class="header">
        <div class="header-container">
            <div class="logo">
                <h1 class="header-h1">SearchIT</h1>
            </div>
            <nav class="nav-menu">
                <ul>
                    <li><NavLink to="/about_us">О нас</NavLink></li>
                    <li><NavLink to="/">О нас</NavLink></li>
                    <li><NavLink to="/">О нас</NavLink></li>
                    <li><NavLink to="/">О нас</NavLink></li>
                </ul>
            </nav>

            {
            
            }

            <div class="auth-buttons">
                    <a href="/login" class="btn">Вход</a>
                    <a href="/register" class="btn btn-primary">Регистрация</a>
                    <a href="./php_scripts/exite_script.php" class="btn btn-primary">Выход</a>
            </div>
        </div>
        </header>
    )
        
    
}