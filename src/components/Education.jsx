import FormInput from "./FormInput";



const EducationForm = ({ eduData, update, del }) => {
    const handleChange = (e) => {
        const unpdateItem = { ...eduData, [e.target.name]: e.target.value }
        update(eduData.id, unpdateItem)
    }
    
    return (
        <div className="Education-div">
            <div className="section-description">
                <h3>Education</h3>
                <button className="del-btn" onClick={del}>Delete</button>
            </div>
            
            <div className="education-form">
                <FormInput
                    label="School:"
                    name="school"
                    value={eduData.school || ''}
                    onChange={handleChange}
                    placeholder="School Name"
                />

                <FormInput
                    label="Degree:"
                    name="degree"
                    value={eduData.degree || ''}
                    onChange={handleChange}
                    placeholder="Degree"
                />

                <FormInput
                    label="Start Date:"
                    name="startDate"
                    value={eduData.startDate || ''}
                    onChange={handleChange}
                    placeholder= "MM/YYYY"
                />

                <FormInput
                    label="End Date:"
                    name="endDate"
                    value={eduData.endDate || ''}
                    onChange={handleChange}
                    placeholder="MM/YYYY or present"
                />

                <FormInput
                    label="Location:"
                    name="location"
                    value={eduData.location || ''}
                    onChange={handleChange}
                    placeholder="Location"
                    fullWidth={true}
                />
            </div>
        </div>
    );
};

const Education = ({ eduDatas, update, del, add }) => {
  return (
    <div className="education-section">
      {eduDatas.map((eduData) => (
        <EducationForm
          key={eduData.id}
          eduData={eduData}
          update={update}
          del={() => del(eduData.id)}
        />
      ))}
      <button onClick={add}>+ Add Education</button>
    </div>
  );
};

export default Education;