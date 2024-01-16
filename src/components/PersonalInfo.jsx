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
        <h2>Personal info</h2>
        <form onSubmit={handleSubmit}>
     <label>Name</label>
     <input type="text" defaultValue={data.name} name="name" required></input>
     <label>Email address</label>
     <input type="email" defaultValue={data.email} name="email" required></input>
     <label>Phone Number</label>
     <input type="tel" defaultValue={data.phone} name="phone" required></input>
     <input type="submit" value="Submit"></input>
     </form >
    </section>
    )

    return (
        <section className="personalInfo">
            <button onClick={onEditHandler}>Edit</button>
        </section>
    )
}