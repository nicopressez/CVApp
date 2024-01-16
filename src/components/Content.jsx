import PersonalInfo from "./PersonalInfo"
import RenderInfo from "./LiveCV"
import { useState } from "react";
import Education from "./Education";

export default function Content(){
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        degree: {year: "", name:"", school:""},
    })

    const submitPersonalInfo = (form) => {
        setData({
            name: form.target.name.value,
            email: form.target.email.value,
            phone: form.target.phone.value,
            degree:{
                year: data.degree.year,
                name: data.degree.name,
                school: data.degree.school
            }
        })
    }

    const submitEducation = (form) => {
        setData({
            name: data.name,
            email: data.email,
            phone: data.phone,
            degree:{
                year: form.target.year.value,
                name: form.target.name.value,
                school: form.target.school.value,
            }
        })
    }

    return (
        <div className="content">
        <PersonalInfo data={data}
                       submitPersonalInfo={submitPersonalInfo}/>
        <Education data={data} submitEducation={submitEducation}/>
        <RenderInfo data={data}/>
        </div>
    )
}