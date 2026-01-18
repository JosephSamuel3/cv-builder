import FormInput from "./FormInput";



const ExperienceForm = ({ expData, update, del }) => {
  const handleChange = (e) => {
    const {name, value} = e.target
    update({ ...expData, [name]: value })
  }
  
  return (
    <div className="experince-div">
      <div className="section-description">
        <h3>Experience</h3>
        <button className="delete-btn" onClick={del}>Delete</button>
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
          fullWidth={true}
        />

        <FormInput
          label="Description:"
          name="description"
          value={expData.description || ''}
          onChange={handleChange}
          placeholder="Describe your responsiblities"
          isTextarea
          fullWidth={true}
        />
      </div>
    </div>
  );
};

const Experience = ({ expDatas, update, del, add }) => {
  return (
    <div className="experience-section">
      {expDatas.map((expData) => (
        <ExperienceForm
          key={expData.id}
          expData={expData}
          update={(updatedData) => update(expData.id, updatedData)}
          del={() => del(expData.id)}
        />
      ))}
      <button onClick={add}>+ Add Work Experience</button>
    </div>
  );
};

export default Experience;