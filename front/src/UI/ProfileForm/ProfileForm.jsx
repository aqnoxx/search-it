import "./ProfileForm.css";
import { useState } from "react";

export default function ProfileForm(){
    const[tags, setTags] = useState([]);
    const [languages, setLanguages] = useState(["Python", "JavaScript","Java",
        "C#", "C++","Ruby","PHP","Swift","Go","Rust",
        "Kotlin","TypeScript","Scala","Dart","Perl",
        "Haskell","Lua","Elixir","Clojure","Shell",
        "Objective-C","MATLAB"
    ]);


    function deleteTag(e){
        const tag = e.target.innerHTML;
        tags.map((e,i)=>{
            if(e == tag){
                setTags(tags.filter((e)=>e != tag))
                setLanguages([...languages,tag])
            }
        })
    }

    function isLanguageInList(lan){
        for(let i = 0; i < languages.length;i++){
            if(languages[i].toLowerCase() == lan.toLowerCase()) return i;
        }
        return null
    }

    function tagHandleKeyPress(e){
        if(e.key == "Enter"){
            e.preventDefault()
            let index = isLanguageInList(e.target.value)
            if(index != null){
                setTags([...tags,languages[index]]);
                setLanguages(languages.filter((e)=>e!=languages[index]))
                e.target.value = ""
            }else{
                e.target.value = ""
                e.target.placeholder = "Такого языка нет в списке."
            }

        }
        setTagInput(e.target.value)
    }

    return(
        <div class="profile_form_wrapper">
        <div class="container">
            <h1>Редактирование профиля</h1>
            <form action="" method="post">
                <div class="form-group">
                    <label for="username">Имя пользователя</label>
                    <input type="text" id="username" name="username" required></input>
                </div>
                <div class="form-group">
                    <label for="connection">Способы связи</label>
                    <input type="text" id="connection" name="connection" required></input>
                </div>
                <div class="form-group">
                    <label for="bio">О себе</label>
                    <textarea id="bio" name="bio" rows="4" placeholder="Напишите что-то о себе..."></textarea>
                </div>
                <div class="form-group">
                    <ul dir="LTR" name="tags" id="tags-area" readonly>
                        {
                            tags.map((e)=>{
                                return(<li onClick={deleteTag}><a>{e}</a><input type="hidden" value={e} name="tags[]"></input></li>)
                            })
                        }
                    </ul>
                    <label for="language">Выберите языки программирования</label>
                    <input onKeyDown={tagHandleKeyPress} list="languages" type="text" id="language" name="language"></input>
                    <datalist id="languages">
                        {
                            languages.map((e)=>{
                                return(<option value={e}></option>)
                            })
                        }
                    </datalist>
                </div>
                <button type="submit" class="btn">Сохранить изменения</button>
            </form>
        </div>
        </div>
    )
}