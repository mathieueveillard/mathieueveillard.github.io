import React from "react"

export default function SkillItem({ skill: { category, skills } }) {
  return (
    <div>
      <span className="SkillItem__Category">{category}</span> :{" "}
      {skills.map((skill, index) => (
        <React.Fragment key={skill}>
          {index > 0 && ", "}
          {skill}
        </React.Fragment>
      ))}
    </div>
  )
}
