import PersonalInfo from "./PersonalInfo"
import RenderInfo from "./LiveCV"
import { useState } from "react";

export default function Content(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const submitPersonalInfo = (form) => {
        setName(form.target.name.value);
        setEmail(form.target.email.value);
        setPhone(form.target.phone.value);
    }

    return (
        <div className="content">
        <PersonalInfo name={name}  email={email} phone={phone}
                       submitPersonalInfo={submitPersonalInfo}/>
        <RenderInfo name={name} email={email} phone={phone}/>
        </div>
    )
}