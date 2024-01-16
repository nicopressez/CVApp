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
            <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Graduation year" defaultValue={data.degree.year} name="year"></input>
            <input type="text" placeholder="Degree" defaultValue={data.degree.name} name="name"></input>
            <input type="text" placeholder="School" defaultValue={data.degree.school} name="school"></input>
            <input type="submit"></input>
            </form>
        </section>
    )
    return (
        <button onClick={editHandler}>Edit</button>
    )
}