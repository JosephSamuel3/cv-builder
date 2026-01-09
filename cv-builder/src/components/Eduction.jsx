import FormInput from "./FormInput";



const EducationForm = ({ eduData, onUpdate, onDel }) => {
    const handleChange = (e) => {
        const {name, value} = e.target
        onUpdate({ ...eduData, [name]: value })
    }
    
    return (
        <div className="Education-div">
            <div className="section-description">
                <h3>Education</h3>
                <button className="del-btn" onClick={onDel}>Delete</button>
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
                    placeholder= "start date"
                />

                <FormInput
                    label="End Date:"
                    name="endDate"
                    value={eduData.endDate || ''}
                    onChange={handleChange}
                    placeholder="end date"
                />

                <FormInput
                    label="Location:"
                    name="location"
                    value={eduData.location || ''}
                    onChange={handleChange}
                    placeholder="Location"
                />
            </div>
        </div>
    );
};

const Education = ({ eduDatas, onUpdate, onDel, onAdd }) => {
  return (
    <div className="education-section">
      {eduDatas.map((eduData) => (
        <EducationForm
          key={eduData.id}
          eduData={eduData}
          onUpdate={(updatedData) => onUpdate(eduData.id, updatedData)}
          onDel={() => onDel(eduData.id)}
        />
      ))}
      <button onClick={onAdd}>Add Education</button>
    </div>
  );
};

export default Education;