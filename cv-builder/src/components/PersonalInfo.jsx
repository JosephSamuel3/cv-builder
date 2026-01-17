import FormInput from "./FormInput";



const PersonalInfoForm = ({ infoData, update, del }) => {
    const handleChange = (e) => {
        const {name, value} = e.target
        update({ ...infoData, [name]: value })
    }
    
    return (
        <div className="personalInfo-div">
            <div className="section-description">
                <h3>Personal Information</h3>
                <button className="del-btn" onClick={del}>Delete</button>
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

const PersonalInfo = ({ infoDatas, update }) => {
  return (
    <div className="personalInfo-section">
      {infoDatas.map((infoData) => (
        <PersonalInfoForm
          key={infoData.id}
          infoData={infoData}
          update={(updatedData) => update(infoData.id, updatedData)}
          del={() => del(infoData.id)}
        />
      ))}
    </div>
  );
};

export default PersonalInfo;