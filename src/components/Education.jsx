import { useState } from "react";
export default function Education({data, submitEducation}){

    const [sent, setSent] = useState(false);



    const handleSubmit = (form) => {
        form.preventDefault();
        submitEducation(form);
        setSent(true);}

    const editHandler = () => setSent(false);

    if (!sent) return (
        <section className="educationForm">
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="degreeName">Degree</label>
            <input type="text" defaultValue={data.degree.name} name="name" id="degreeName"></input>
            <label htmlFor="school">School Name</label>
            <input type="text" defaultValue={data.degree.school} name="school" id="school"></input>
            <label htmlFor="startSchool">Start date</label>
            <input type="date" defaultValue={data.degree.end} name="end" id="startSchool"></input>
            <label htmlFor="endSchool">Graduation Year</label>
            <input type="date" defaultValue={data.degree.start} name="start" id="endSchool"></input>
            <input type="submit" value="Submit"></input>
            </form>
        </section>
    )
    return (
        <section className="educationForm">
        <h2>Education</h2>
        <button onClick={editHandler}>Edit</button>
        </section>
    )
}