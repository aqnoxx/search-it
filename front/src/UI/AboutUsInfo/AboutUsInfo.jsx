import "./AboutUsInfo.module.css";
import DeveloperPhoto from "./../../IMG/photo_2023-04-01_15-13-00.jpg"

export default function AboutUsInfo(){
    return(
        <div class="aboutus_wrapper">
            <section class="about">
                <h2>Наша миссия</h2>
                <p>Мы создаем платформу, где программисты могут находить единомышленников, обмениваться опытом и совместно работать над проектами. Наша цель — сделать программирование более доступным и увлекательным.</p>
            </section>

            <section class="team">
                <h2>Наша команда</h2>
                <div class="team-member">
                    <img src={DeveloperPhoto} alt="Член команды 1"></img>
                    <h3>Гришин Антон</h3>
                    <p>Основатель, разработчик</p>
                </div>
            </section>  
        </div>
    )
}