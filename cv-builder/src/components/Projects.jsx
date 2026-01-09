import FormInput from "./FormInput";



const ProjectForm = ({ projectData, onUpdate, onDel }) => {
  const handleChange = (e) => {
        const {name, value} = e.target
        onUpdate({ ...projectData, [name]: value })
  }
  
  return (
        <div className="project-div">
            <div className="section-description">
                <h3>Project</h3>
                <button className="del-btn" onClick={onDel}>Delete</button>
            </div>
            
            <div className="project-form">
                <FormInput
                    label="Project title:"
                    name="company"
                    value={projectData.company || ''}
                    onChange={handleChange}
                    placeholder="company Name"
                />

                <FormInput
                    label="Description:"
                    name="description"
                    value={projectData.description || ''}
                    onchange={handleChange}
                    placeholder="Describe your responsiblities"
                />
            </div>
        </div>
  );
};

const Project = ({ projectDatas, onUpdate, onDel, onAdd }) => {
  return (
    <div className="project-section">
      {projectDatas.map((projectData) => (
        <ProjectForm
          key={projectData.id}
          projectData={projectData}
          onUpdate={(updatedData) => onUpdate(projectData.id, updatedData)}
          onDel={() => onDel(projectData.id)}
        />
      ))}
      <button onClick={onAdd}>+ Add Projects</button>
    </div>
  );
};

export default Project;