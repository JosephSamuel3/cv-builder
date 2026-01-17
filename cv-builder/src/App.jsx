import { useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";


function App() {
    const  [workExperience, setWorkExperience] = useState ([
    {
      id: 'work-1',
      company: 'Dunder Mifflin Paper Company',
      position: 'Junior Salesman',
      startDate: 'December 2021',
      endDate: 'Present',
      location: 'Scranton, PA',
      description: `Identify and cultivate new sales clients through multiple mediums (phone, email, inbound website leads, and more)
Responsible for achieving weekly targets such as 100 call quantity, activities/tasks, call quality, and sales skills
Maintain a high level of detail managing all aspects of sales activities within Salesforce`,
    },
    {
      id: 'work-2',
      company: 'Michael Scott Paper Company (Acquired)',
      position: 'Founder and President',
      startDate: 'August 2021',
      endDate: 'December 2021',
      location: 'Scranton, PA',
      description: `Acqui-hired by Dunder Mifflin
Founded a paper supplier serving the greater Scranton area
Managed and mentored team of two sales representatives to grow customer base to over 10 medium-sized businesses`,
    },
    {
      id: 'work-3',
      company: 'ShoeLaLa',
      position: 'Marketing Intern',
      startDate: 'June 2019',
      endDate: 'September 2019',
      location: 'Scranton, PA',
      description: `Assisted in development of creative ad campaigns for 12 summer shoe styles
Maintained tracking report of all public relations activity
Performed monthly analysis of marketing and sales data using Excel
Analyzed competitor marketing deals for reporting to marketing team`,
    },
  ],)

    const [skills, setSkills] = useState([
        {
            id: 'skill-1',
            language: 'JavaScript',
            framework: 'React'
        },
        {
            id: 'skill-2',
            language: 'Python',
            framework: 'Django'
        }
    ]);

    const updateItem = (id, updatedItem) => {
        setWorkExperience((prev) =>
            prev.map((item) =>
                item.id === id ? updatedItem : item
            )
        );
    };

    const deleteItem = (id) => {
        setWorkExperience((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const addItem = () => {
        setWorkExperience((prev) => [...prev, 
            {
                id: crypto.randomUUID(),
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                description: ""
            },
        ]);
    };

    const updateSkill = (id, updatedSkill) => {
        setSkills((prev) =>
            prev.map((item) =>
                item.id === id ? updatedSkill : item
            )
        );
    };

    const deleteSkill = (id) => {
        setSkills((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const addSkill = () => {
        setSkills((prev) => [...prev, 
            {
                id: crypto.randomUUID(),
                language: "",
                framework: ""
            },
        ]);
    };

    return (
        <>
            <Experience
                expDatas = {workExperience}
                onUpdate={updateItem}
                onDel={deleteItem}
                onAdd={addItem}
            />
            <Skills
                skillDatas={skills}
                update={updateSkill}
                del={deleteSkill}
                add={addSkill}
            />
        
        </>
    )

}

export default App