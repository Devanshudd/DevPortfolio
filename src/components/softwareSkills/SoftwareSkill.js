// import React from "react";
// import "./SoftwareSkill.scss";
// import {skillsSection} from "../../portfolio";

// export default function SoftwareSkill() {
//   return (
//     <div>
//       <div className="software-skills-main-div">
//         <ul className="dev-icons">
//           {skillsSection.softwareSkills.map((skills, i) => {
//             return (
//               <li
//                 key={i}
//                 className="software-skill-inline"
//                 name={skills.skillName}
//               >
//                 <i className={skills.fontAwesomeClassname}></i>
//                 <p>{skills.skillName}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {skillsSection.softwareSkills.map((skill, index) => {
          return (
            <li
              key={index}
              className="software-skill-inline"
              name={skill.skillName}
            >
              <img
                src={skill.icon}
                alt={skill.skillName}
                className="skill-icon"
              />
              <p>{skill.skillName}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
