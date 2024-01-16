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
     <label htmlFor="name">Name</label>
     <input type="text" defaultValue={data.name} name="name" required id="name"></input>
     <label htmlFor="email">Email address</label>
     <input type="email" defaultValue={data.email} name="email" required id="email"></input>
     <label htmlFor="phone">Phone Number</label>
     <input type="tel" defaultValue={data.phone} name="phone" required id="phone"></input>
     <input type="submit" value="Submit"></input>
     </form >
    </section>
    )

    return (
        <section className="personalInfo">
            <h2>Personal info</h2>
            <button onClick={onEditHandler}>Edit</button>
        </section>
    )
}