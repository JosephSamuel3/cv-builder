import FormInput from "./FormInput";


const ProjectForm = ({ projectData, update, del }) => {
  const handleChange = (e) => {
    const {name, value} = e.target
    update({ ...projectData, [name]: value })
  }
  
  return (
    <div className="project-div">
      <div className="section-description">
        <h3>Project</h3>
        <button className="del-btn" onClick={del}>Delete</button>
      </div>
      
      <div className="project-form">
        <FormInput
          label="Project title:"
          name="title"
          value={projectData.title || ''}
          onChange={handleChange}
          placeholder="company Name"
          fullWidth
        />

        <FormInput
          label="Description:"
          name="description"
          value={projectData.description || ''}
          onChange={handleChange}
          placeholder="Describe your responsiblities"
          isTextarea
          fullWidth
        />

        <FormInput
          label="Technologies:"
          name="technologies"
          value={(projectData.technologies || []).join(", ")}
          onChange={handleChange}
          placeholder="list the technologies used"
          fullWidth
        />

        <FormInput
          label="Link:"
          type="url"
          name="link"
          value={projectData.link || ''}
          onChange={handleChange}
          placeholder="link to your project"
          fullWidth
        />
      </div>
    </div>
  );
};

const Project = ({ projectDatas, update, del, add }) => {
  return (
    <div className="project-section">
      {projectDatas.map((projectData) => (
        <ProjectForm
          key={projectData.id}
          projectData={projectData}
          update={(updatedData) => update(projectData.id, updatedData)}
          del={() => del(projectData.id)}
        />
      ))}
      <button onClick={add}>+ Add Projects</button>
    </div>
  );
};

export default Project;