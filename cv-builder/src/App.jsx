import { useState } from "react";
import ResumeEditor from "./components/ResumeEditor";
import { sample1_CV,empty1_CV } from "./samples/sample1";

function App() {
  const [cv, setCV] = useState(sample1_CV);

  return <ResumeEditor cvData={cv} setCvData={setCV} />;
}

export default App;
