import FormInput from "./FormInput";

const SkillsForm = ({ skillData, update, del }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        update({ ...skillData, [name]: value });
    };

    return (
        <div className="skills-div">
            <div className="section-description">
                <h3>Skills</h3>
                <button className="del-btn" onClick={del}>Delete</button>
            </div>

            <div className="skills-form">
                <FormInput
                    label="Language:"
                    name="language"
                    value={skillData.language || ''}
                    onChange={handleChange}
                    placeholder="e.g., JavaScript, Python"
                />

                <FormInput
                    label="Framework:"
                    name="framework"
                    value={skillData.framework || ''}
                    onChange={handleChange}
                    placeholder="e.g., React, Django"
                />
            </div>
        </div>
    );
};

const Skills = ({ skillDatas, update, del, add }) => {
    return (
        <div className="skills-section">
            {skillDatas.map((skillData) => (
                <SkillsForm
                    key={skillData.id}
                    skillData={skillData}
                    update={(updatedData) => update(skillData.id, updatedData)}
                    del={() => del(skillData.id)}
                />
            ))}
            <button onClick={add}>+ Add Skill</button>
        </div>
    );
};

export default Skills;