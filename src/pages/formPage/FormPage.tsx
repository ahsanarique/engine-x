import { useState } from "react";

import ProjectForm from "../../components/mainContent/form/ProjectForm";
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
              <button className={`nav-link ${step === 1 ? "active" : ""}`} disabled>
                Step 1
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${step === 2 ? "active" : ""}`} disabled>
                Step 2
              </button>
            </li>
          </ul>
          <div className="tab-content mt-3" id="myTabContent">
            <div className={`tab-pane fade ${step === 1 ? "show active" : ""}`}>
              <ProjectForm step={1} handleNext={handleNext} disabled={false} />
            </div>

            <div className={`tab-pane fade ${step === 2 ? "show active" : ""}`}>
              <div className="row mx-0">
                <div className="col-12 col-md-6 px-0">
                  <ProjectForm
                    step={2}
                    handleNext={handleNext}
                    disabled={true}
                  />
                </div>
                <div className="col-12 col-md-6 px-0">
                  <DataForm step={2} />

                  <div className="row mx-0">
                    <div className="col-12">
                      <div className="input-field d-flex flex-column">
                        <button
                          onClick={() => handleBack()}
                          className="btn secondary-button"
                        >
                          <span>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                              ></path>
                            </svg>
                          </span>
                          <span className="ps-1">Back</span>{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
