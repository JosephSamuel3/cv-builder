import FormInput from "./FormInput";

const Skills = ({ skillData, update }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        update({ ...skillData, [name]: value.split(',').map(item => item.trim()).filter(item => item) });
    };

    return (
        <div className="skills-div">
            <div className="section-description">
                <h3>Skills</h3>
            </div>

            <div className="skills-form">
                <FormInput
                    label="Languages:"
                    name="languages"
                    value={(skillData.languages || []).join(', ')}
                    onChange={handleChange}
                    placeholder="e.g., JavaScript, Python, HTML"
                    fullWidth
                />

                <FormInput
                    label="Frameworks:"
                    name="frameworks"
                    value={(skillData.frameworks || []).join(', ')}
                    onChange={handleChange}
                    placeholder="e.g., React, Node.js, Django"
                    fullWidth
                />
            </div>
        </div>
    );
};


export default Skills;