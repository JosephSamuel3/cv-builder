import FormInput from "./FormInput";



const ExperienceForm = ({ expData, onUpdate, onDel }) => {
  const handleChange = (e) => {
    const {name, value} = e.target
    onUpdate({ ...expData, [name]: value })
  }
  
  return (
    <div className="experince-div">
      <div className="section-description">
        <h3>Experience</h3>
        <button className="del-btn" onClick={onDel}>Delete</button>
      </div>
      
      <div className="experience-form">
        <FormInput
          label="Company:"
          name="company"
          value={expData.company || ''}
          onChange={handleChange}
          placeholder="company Name"
        />

        <FormInput
          label="Position:"
          name="position"
          value={expData.position || ''}
          onChange={handleChange}
          placeholder="Job title"
        />

        <FormInput
          label="Start Date:"
          name="startDate"
          value={expData.startDate || ''}
          onChange={handleChange}
          placeholder= "MM/YYYY"
        />

        <FormInput
          label="End Date:"
          name="endDate"
          value={expData.endDate || ''}
          onChange={handleChange}
          placeholder="MM/YYYY or present"
        />

        <FormInput
          label="Location:"
          name="location"
          value={expData.location || ''}
          onChange={handleChange}
          placeholder="City, Country"
        />

        <FormInput
          label="Description:"
          name="description"
          value={expData.description || ''}
          onchange={handleChange}
          placeholder="Describe your responsiblities"
        />
      </div>
    </div>
  );
};

const Experience = ({ expDatas, onUpdate, onDel, onAdd }) => {
  return (
    <div className="experience-section">
      {expDatas.map((expData) => (
        <ExperienceForm
          key={expData.id}
          expData={expData}
          onUpdate={(updatedData) => onUpdate(expData.id, updatedData)}
          onDel={() => onDel(expData.id)}
        />
      ))}
      <button onClick={onAdd}>+ Add Work Experience</button>
    </div>
  );
};

export default Experience;