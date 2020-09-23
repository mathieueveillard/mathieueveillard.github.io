import React from "react"
import SkillItem from "./SkillItem"

export default function Skills({ skills }) {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.category}>
          <SkillItem skill={skill} />
        </li>
      ))}
    </ul>
  )
}
