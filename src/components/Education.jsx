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
            
            <input type="text" placeholder="Degree" defaultValue={data.degree.name} name="name"></input>
            <input type="text" placeholder="School" defaultValue={data.degree.school} name="school"></input>
            <input type="date" placeholder="Start year" defaultValue={data.degree.end} name="end"></input>
            <input type="date" placeholder="Graduation year" defaultValue={data.degree.start} name="start"></input>
            <input type="submit"></input>
            </form>
        </section>
    )
    return (
        <button onClick={editHandler}>Edit</button>
    )
}