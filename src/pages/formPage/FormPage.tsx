import { useState } from "react";
import DataForm from "../../components/mainContent/form/DataForm";

const FormPage = () => {
  const [step, setStep] = useState<number>(1);

  const handleNext = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <section className="engine-x-formPage">
      <div className="row mx-0">
        <div className="col-12">
          <div className="d-flex align-items-center mt-3">
            <h1 className="page-title">Data Form</h1>
          </div>
        </div>

        <div className="col-12 mt-3">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button onClick={() => handleBack()} className={`nav-link ${step === 1 ? "active" : ""}`}>Step 1</button>
            </li>
            <li className="nav-item" role="presentation">
              <button onClick={() => handleNext()} className={`nav-link ${step === 2 ? "active" : ""}`}>Step 2</button>
            </li>
          </ul>
          <div className="tab-content mt-3" id="myTabContent">
            <div className={`tab-pane fade ${step === 1 ? "show active" : ""}`}>
              <DataForm step={1} handleNext={handleNext} handleBack={handleBack} />
            </div>

            <div className={`tab-pane fade ${step === 2 ? "show active" : ""}`}>
              <DataForm step={2} handleNext={handleNext} handleBack={handleBack} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
