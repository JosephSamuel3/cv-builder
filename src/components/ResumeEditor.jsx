import { useState } from "react";
import NavButtons from "./NavButtons";
import RenderInputs from "./RenderInputs";

const ResumeEditor = ({ cvData, setCVData }) => {
    const [activeNav, setActiveNav] = useState("personalInformation");

  // -------- Shared helpers --------
  const updateSection = (section, data) => {
    setCVData(prev => ({
      ...prev,
      [section]: data,
    }));
  };

  const addItem = (section, newItem) => {
    setCVData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const updateItem = (section, id, updatedItem) => {
    setCVData(prev => ({
      ...prev,
      [section]: prev[section].map(item =>
        item.id === id ? updatedItem : item
      ),
    }));
  };

  const deleteItem = (section, id) => {
    setCVData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id),
    }));
  };

  return (
    <div className="resume-editor">
      <NavButtons
        activeNav={activeNav}
        onChange={setActiveNav}
      />

      <RenderInputs
        activeNav={activeNav}
        cvData={cvData}
        updateSection={updateSection}
        addItem={addItem}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default ResumeEditor;
