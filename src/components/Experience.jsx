import { useState } from "react";
export default function Experience({data, submitExperience}){

    const [sent, setSent] = useState(false);

    const handleSubmit = (form) => {
        form.preventDefault();
        submitExperience(form);
        setSent(true);
    }

    const editHandler = () => setSent(false);

    if (!sent) return (
        <section className="experienceForm">
            <h2>Experience</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="company" defaultValue={data.experience.company}></input>
                <input type="text" name="position" defaultValue={data.experience.position}></input>
                <input type="text" name="description" defaultValue={data.experience.description}></input>
                <input type="date" name="start" defaultValue={data.experience.start}></input>
                <input type="date" name="end" defaultValue={data.experience.end}></input>
                <input type="submit"></input>
            </form>
        </section>
    )

    return(
        <button onClick={editHandler}>Edit</button>
    )
}