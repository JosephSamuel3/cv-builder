import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Project from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

const RenderInputs = ({
  activeNav,
  cvData,
  updateSection,
  addItem,
  updateItem,
  deleteItem,
}) => {
  switch (activeNav) {
    case "personalInformation":
      return (
        <PersonalInfo
          infoData={cvData.personalInformation}
          update={data => updateSection("personalInformation", data)}
        />
      );

    case "experience":
      return (
        <Experience
          expDatas={cvData.experience}
          update={(id, item) =>
            updateItem("experience", id, item)
          }
          add={() =>
            addItem("experience", {
              id: crypto.randomUUID(),
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              location: "",
              description: ""
            })
          }
          del={id => deleteItem("experience", id)}
        />
      );

    case "project":
      return (
        <Project
          projectDatas={cvData.project}
          update={(id, item) =>
            updateItem("project", id, item)
          }
          add={() =>
            addItem("project", {
              id: crypto.randomUUID(),
              title: "",
              description: "",
              tech: [],
              link: "",
            })
          }
          del={id => deleteItem("project", id)}
        />
      );

    case "education":
      return (
        <Education
          eduDatas={cvData.education}
          update={(id, item) =>
            updateItem("education", id, item)
          }
          add={() =>
            addItem("education", {
              id: crypto.randomUUID(),
              school: "",
              degree: "",
              startDate: "",
              endDate: "",
              location: ""
            })
          }
          del={id => deleteItem("education", id)}
        />
      );

    case "skills":
      return (
        <Skills
          skillData={cvData.skills}
          update={skills => updateSection("skills", skills)}
        />
      );

    default:
      return <PersonalInfo 
                infoData={cvData.personalInformation}
                update={data => updateSection("personalInformation", data)}
            />;
  }
};

export default RenderInputs;
