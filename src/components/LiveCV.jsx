export default function RenderInfo({name,email,phone}){
    return (
        <div className="preview">
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{phone}</h2>
        </div>
    )
}