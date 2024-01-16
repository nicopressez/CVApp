export default function RenderInfo({data}){
    return (
        <div className="preview">
            <section className="personalInfo">
            <h2 className="CVname">{data.name || "Name"}</h2>
        <p className="CVemail">{data.email || "Email"}</p>
        <p className="CVphone">{data.phone || "Phone Number"}</p>
            </section>
            <section className="educationInfo">
                <h2>Education</h2>
                <h3 className="CVschool">{data.degree.school || "School"}</h3>
                <p>{data.degree.name ||"Degree"}</p>
                <p>{"Start date: " + data.degree.start}{"End date: " + data.degree.end}</p>
            </section>
            <section className="experienceInfo">
                <h2>Experience</h2>
                <h3>{data.experience.company ||"Company"}</h3>
                <h4>{data.experience.position || "Position"}</h4>
                <p>{data.experience.description || "Job description"}</p>
                <p>{"Start date: " + data.experience.start}{"End date: " + data.experience.end}</p>
            </section>
        </div>
    )
}