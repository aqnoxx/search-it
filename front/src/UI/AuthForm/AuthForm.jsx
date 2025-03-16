import { NavLink } from "react-router"
import "./AuthForm.css"

export default function AuthForm(){

    function switchToRegister(){
        const auth_wrapper = document.querySelector(".auth_wrapper")   
        auth_wrapper.style.marginLeft = "-100%";
    }

    function switchToLogin(){
        const auth_wrapper = document.querySelector(".auth_wrapper")   
        auth_wrapper.style.marginLeft = "0";
    }

    return(
        <div class="auth_wrapper">
            <div class="login_wrapper">
                <div class="login_container">
                    <h1>Войти</h1>
                    <form action="./php_scripts/login_script.php" method="get">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div class="form-group">
                            <label for="password">Пароль</label>
                            <input type="password" id="password" name="password" required></input>
                        </div>
            
                        <button type="submit" class="btn">Войти</button>
                    </form> 
                </div>
                <div className="switch_container">
                    <p class="login-link">Еще нет аккаунта? <a onClick={switchToRegister}>Зарегистрируйтесь</a></p>
                </div>
            </div>
            <div className="register_wrapper">
                <div className="switch_container">
                    <p class="login-link">Уже есть аккаунт? <a onClick={switchToLogin}>Войдите</a></p>
                </div>
                <div class="reg_container">
                    <h1>Зарегистрироваться</h1>
                    <form action="./php_scripts/login_script.php" method="get">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div class="form-group">
                            <label for="password">Пароль</label>
                            <input type="password" id="password" name="password" required></input>
                        </div>
                        <div className="form-group">
                            <label for="password">Повторите пароль</label>
                            <input type="password" id="password" name="repeated_password" required></input>
                        </div>
                
                        <button type="submit" class="btn">Зарегистрироваться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}