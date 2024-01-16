export default function RenderInfo({data}){
    return (
        <div className="preview">
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
        <h2>{data.phone}</h2>
        <h3>{data.degree.start}</h3>
        <h3>{data.degree.end}</h3>
        <h4>{data.degree.name}</h4>
        <h4>{data.degree.school}</h4>
        <h2>{data.experience.company}</h2>
        <h2>{data.experience.position}</h2>
        <h2>{data.experience.description}</h2>
        <h2>{data.experience.start}</h2>
        <h2>{data.experience.end}</h2>

        </div>
    )
}