import sample1_CV from "../samples/sample1";
import sample2_CV from "../samples/sample2";
import emptyCV from "../samples/emptyCV"
import { useState } from "react";
import ResumeEditor from "./ResumeEditor";
import ResumePreview from "./ResumePreview";
import "../styles/App.css";


const Main = () => {
    const [cvData, setCVData] = useState(emptyCV)
    const loadSample = (cv) => setCVData(cv)
    const reset = () => setCVData(emptyCV)

    return(
        <>
            <div className="header">
                <h3>CV builder</h3>
                <div className="sample-btns">
                    <button className="sample-btn" onClick={() => loadSample(sample1_CV)}>Sample 1</button>
                    <button className="sample-btn" onClick={() => loadSample(sample2_CV)}>Sample 2</button>
                    <button className="reset-btn" onClick={reset}>Reset</button>
                </div>
            </div>
            <div className="app-container">
                <div className="editor-section">
                    <ResumeEditor cvData={cvData} setCVData={setCVData} />
                </div>
                <div className="preview-section">
                    <ResumePreview cvData={cvData} />
                </div>
            </div>
        </>
    )
}

export default Main