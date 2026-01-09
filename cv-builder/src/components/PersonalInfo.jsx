import FormInput from "./FormInput";



const PersonalInfoForm = ({ infoData, onUpdate, onDel }) => {
    const handleChange = (e) => {
        const {name, value} = e.target
        onUpdate({ ...infoData, [name]: value })
    }
    
    return (
        <div className="personalInfo-div">
            <div className="section-description">
                <h3>Personal Detials</h3>
                <button className="del-btn" onClick={onDel}>Delete</button>
            </div>
            
            <div className="personalInfo-form">
                <FormInput
                    label="First Name:"
                    name="firstName"
                    value={infoData.firstName || ''}
                    onChange={handleChange}
                    placeholder="John"
                />

                <FormInput
                    label="Last Name:"
                    name="lastName"
                    value={infoData.lastName || ''}
                    onChange={handleChange}
                    placeholder="Doe"
                />

                <FormInput
                    label="Phone:"
                    type="tel"
                    name="phone"
                    value={infoData.phone || ''}
                    onChange={handleChange}
                    placeholder= "123-456-7890"
                />

                <FormInput
                    label="Email:"
                    type="email"
                    name="email"
                    value={infoData.email || ''}
                    onChange={handleChange}
                    location="johndoe@email.com"
                />

                <h4>Links</h4>

                <FormInput
                    label="Github:"
                    type="url"
                    name="github"
                    value={infoData.github || ''}
                    onChange={handleChange}
                    placeholder="https://github.com/johndoe"
                />

                <FormInput
                    label="LinkedIn:"
                    type="url"
                    name="linkedin"
                    value={infoData.linkedin || ''}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/johndoe"
                />
            </div>
        </div>
  );
};

const PersonalInfo = ({ infoDatas, onUpdate, onDel, onAdd }) => {
  return (
    <div className="personalInfo-section">
      <h2>PersonalInfo</h2>
      {infoDatas.map((infoData) => (
        <PersonalInfoForm
          key={infoData.id}
          infoData={infoData}
          onUpdate={(updatedData) => onUpdate(infoData.id, updatedData)}
          onDel={() => onDel(infoData.id)}
        />
      ))}
      <button onClick={onAdd}>+ Add PersonalInfo</button>
    </div>
  );
};

export default PersonalInfo;