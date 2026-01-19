import FormInput from "./FormInput";



const PersonalInfo = ({ infoData, update }) => {
    const handleChange = (e) => {
        const {name, value} = e.target
        update({ ...infoData, [name]: value })
    }
    
    return (
        <div className="personalInfo-div">
            <div className="section-description">
                <h3>Personal Information</h3>
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
                    fullWidth={true}
                />

                <FormInput
                    label="LinkedIn:"
                    type="url"
                    name="linkedin"
                    value={infoData.linkedin || ''}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/johndoe"
                    fullWidth={true}
                />
            </div>
        </div>
  );
};



export default PersonalInfo;