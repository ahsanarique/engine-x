import { useContext } from "react";
import { ContextProps } from "../../../context/Context";
import { useForm, SubmitHandler } from "react-hook-form";
import { Context } from "../../../context/Context";

type Inputs = {
  projectName: string;
  projectDescription: string;
  clientName: string;
  contractorName: string;
};

type formProps = {
  step: number;
  handleNext: () => void;
  disabled: boolean;
};

const ProjectForm = ({ step, handleNext, disabled }: formProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { projectData, setProjectData } = useContext(Context) as ContextProps;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const newProjectData = [
      {
        projectName: data.projectName,
        projectDescription: data.projectDescription,
        clientName: data.clientName,
        contractorName: data.contractorName,
      },
    ];

    if (newProjectData[0].projectName !== "") {
      setProjectData(newProjectData);
      handleNext();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row mx-0">
        <div className={`col-12 ${step === 1 ? "col-md-6" : ""}`}>
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div className="input-field d-flex flex-column">
                <label htmlFor="projectName">
                  <span className="red-text pb-2">*</span> Project Name{" "}
                  {errors.projectName && (
                    <span className="red-text">required</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="enter project name here"
                  defaultValue={projectData[0].projectName}
                  {...register("projectName", {
                    required: projectData[0].projectName === "",
                  })}
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="col-12 px-0">
              <div className="input-field d-flex flex-column">
                <label htmlFor="projectDescription">
                  Project Description (Optional)
                </label>
                <textarea
                  placeholder="write something about this project"
                  defaultValue={projectData[0].projectDescription}
                  {...register("projectDescription")}
                  disabled={disabled}
                ></textarea>
              </div>
            </div>

            <div className="col-12 px-0">
              <div className="input-field d-flex flex-column">
                <label htmlFor="clientName">
                  <span className="red-text pb-2">*</span> Client Name{" "}
                  {errors.clientName && (
                    <span className="red-text">required</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="enter client name here"
                  defaultValue={projectData[0].clientName}
                  {...register("clientName", {
                    required: projectData[0].clientName === "",
                  })}
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="col-12 px-0">
              <div className="input-field d-flex flex-column">
                <label htmlFor="contractorName">
                  <span className="red-text pb-2">*</span> Contractor Name{" "}
                  {errors.contractorName && (
                    <span className="red-text">required</span>
                  )}
                </label>
                <input
                  type="text"
                  placeholder="enter contractor name here"
                  defaultValue={projectData[0].contractorName}
                  {...register("contractorName", {
                    required: projectData[0].contractorName === "",
                  })}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0">
        {step === 1 && (
          <div className={`col-12 ${step === 1 ? "col-md-6" : ""}`}>
            <div className="input-field d-flex flex-column">
              <button className="btn primary-button" type="submit">
                <span>Next</span>{" "}
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ProjectForm;
