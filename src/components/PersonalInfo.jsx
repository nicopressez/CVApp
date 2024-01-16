import { useState } from "react";
import RenderInfo from "./LiveCV";

export default function PersonalInfo({
    data, 
    submitPersonalInfo}){

    const [sent, setSent] = useState(false)

    const handleSubmit = (form) => {
        form.preventDefault();
        setSent(true);
        submitPersonalInfo(form)
    }

    const onEditHandler = () => {
        setSent(false)
    }

    if (!sent) return (
    <section className="personalInfo">
        <form onSubmit={handleSubmit}>
     <input placeholder="Name" type="text" defaultValue={data.name} name="name"></input>
     <input placeholder="Email address" type="email" defaultValue={data.email} name="email" ></input>
     <input placeholder="Phone Number" type="tel" defaultValue={data.phone} name="phone"></input>
     <input type="submit" value="submit"></input>
     </form >
    </section>
    )

    return (
        <section className="personalInfo">
            <button onClick={onEditHandler}>Edit</button>
        </section>
    )
}