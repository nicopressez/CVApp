import PersonalInfo from "./PersonalInfo"
import RenderInfo from "./LiveCV"
import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

export default function Content(){
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        degree: {name:"", school:"", start:"", end:""},
        experience:{company:"", position:"", description:"", start:"", end:""}
    })

    const submitPersonalInfo = (form) => {
        setData({
            name: form.target.name.value,
            email: form.target.email.value,
            phone: form.target.phone.value,
            degree:{
                name: data.degree.name,
                school: data.degree.school,
                start: data.degree.start,
                end: data.degree.end,
            },
            experience:{
                company: data.experience.company,
                position: data.experience.position,
                description: data.experience.description,
                start: data.experience.start,
                end: data.experience.end, 
            }
        })
    }

    const submitEducation = (form) => {
        setData({
            name: data.name,
            email: data.email,
            phone: data.phone,
            degree:{
                name: form.target.name.value,
                school: form.target.school.value,
                start: form.target.start.value,
                end: form.target.end.value,
            },
            experience:{
                company: data.experience.company,
                position: data.experience.position,
                description: data.experience.description,
                start: data.experience.start,
                end: data.experience.end, 
            }
        })
    }
    const submitExperience = (form) => {
        setData({
            name: data.name,
            email: data.email,
            phone: data.phone,
            degree:{
                name: data.degree.name,
                school: data.degree.school,
                start: data.degree.start,
                end: data.degree.end,
            },
            experience:{
                company: form.target.company.value,
                position: form.target.position.value,
                description: form.target.description.value,
                start: form.target.start.value,
                end: form.target.end.value,
            }

        })
    }

    return (
        <div className="content">
        <PersonalInfo data={data} submitPersonalInfo={submitPersonalInfo}/>
        <Education data={data} submitEducation={submitEducation}/>
        <Experience data={data} submitExperience={submitExperience}/>
        <RenderInfo data={data}/>
        </div>
    )
}