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
                <label htmlFor="company">Company</label>
                <input type="text" name="company" defaultValue={data.experience.company} id="company"></input>
                <label htmlFor="position">Position</label>
                <input type="text" name="position" defaultValue={data.experience.position} id="position"></input>
                <label htmlFor="jobDesc">Responsibilities</label>
                <input type="text" name="description" defaultValue={data.experience.description} id="jobDesc"></input>
                <label htmlFor="jobStart">Start Date</label>
                <input type="date" name="start" defaultValue={data.experience.start} id="jobStart"></input>
                <label htmlFor="jobEnd">End Date</label>
                <input type="date" name="end" defaultValue={data.experience.end} id="jobEnd"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </section>
    )

    return(
        <section className="experienceForm">
            <h2>Experience</h2>
        <button onClick={editHandler}>Edit</button>
        </section>
    )
}