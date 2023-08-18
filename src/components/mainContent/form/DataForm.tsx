import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  projectName: string;
  projectDescription: string;
  clientName: string;
  contractorName: string;
  file: FileList;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
};

type formProps = {
  step: number;
};

const DataForm = ({ step }: formProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const validateCsvFileType = (file: FileList) => {
    if (!file[0].name.endsWith(".csv")) {
      return "Invalid file type. Please select a .csv file.";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row mx-0">
        <div className="col-12 col-md-6 ">
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
                  defaultValue="test"
                  {...register("projectName", { required: true })}
                  disabled={step !== 1}
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
                  defaultValue="test"
                  {...register("projectDescription")}
                  disabled={step !== 1}
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
                  defaultValue="test"
                  {...register("clientName", { required: true })}
                  disabled={step !== 1}
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
                  defaultValue="test"
                  {...register("contractorName", { required: true })}
                  disabled={step !== 1}
                />
              </div>
            </div>
          </div>
        </div>

        {step === 2 && (
          <div className="col-12 col-md-6">
            <div className="row mx-0">
              <div className="col-12 px-0">
                <div className="input-field d-flex flex-column">
                  <label htmlFor="file">
                    <span className="red-text pb-2">*</span> Contractor Name{" "}
                    {errors.file && (
                      <span className="red-text">{errors.file.message}</span>
                    )}
                  </label>
                  <Controller
                    name="file"
                    control={control}
                    rules={{
                      required: "Please select a file",
                      validate: validateCsvFileType,
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          className="w-100"
                          type="file"
                          accept=".csv"
                          onChange={(e) => field.onChange(e.target.files)}
                        />
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="col-12 px-0">
                <div className="row mx-0">
                  <div className="col-12 col-md-6 px-0">
                    <div className="input-field d-flex flex-column">
                      <label htmlFor="contractorName">
                        <span className="red-text pb-2">*</span> Min X{" "}
                        {errors.minX && (
                          <span className="red-text">required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        defaultValue={0}
                        {...register("minX", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 px-0">
                    <div className="input-field d-flex flex-column">
                      <label htmlFor="contractorName">
                        <span className="red-text pb-2">*</span> Max X{" "}
                        {errors.maxX && (
                          <span className="red-text">required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        defaultValue={0}
                        {...register("maxX", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mx-0">
                  <div className="col-12 col-md-6 px-0">
                    <div className="input-field d-flex flex-column">
                      <label htmlFor="contractorName">
                        <span className="red-text pb-2">*</span> Min Y{" "}
                        {errors.minY && (
                          <span className="red-text">required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        defaultValue={0}
                        {...register("minY", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 px-0">
                    <div className="input-field d-flex flex-column">
                      <label htmlFor="contractorName">
                        <span className="red-text pb-2">*</span> Max Y{" "}
                        {errors.maxY && (
                          <span className="red-text">required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        defaultValue={0}
                        {...register("maxY", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mx-0">
                  <div className="col-12 col-md-6 px-0">
                    <div className="input-field d-flex flex-column">
                      <label htmlFor="contractorName">
                        <span className="red-text pb-2">*</span> Min Z{" "}
                        {errors.minZ && (
                          <span className="red-text">required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        defaultValue={0}
                        {...register("minZ", { required: true })}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6 px-0">
                    <div className="input-field d-flex flex-column">
                      <label htmlFor="contractorName">
                        <span className="red-text pb-2">*</span> Max Z{" "}
                        {errors.maxZ && (
                          <span className="red-text">required</span>
                        )}
                      </label>
                      <input
                        type="number"
                        placeholder="0"
                        defaultValue={0}
                        {...register("maxZ", { required: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="row mx-0">
        {step === 1 && (
          <div className="col-12 col-md-6 px-0">
            <div className="input-field d-flex flex-column">
              <button className="btn primary-button">
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
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <>
            <div className="col-12 col-md-6 px-0">
              <div className="input-field d-flex flex-column">
                <button className="btn secondary-button">
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
                        fill-rule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      ></path>
                    </svg>
                  </span>
                  <span className="ps-1">Back</span>{" "}
                </button>
              </div>
            </div>

            <div className="col-12 col-md-6 px-0">
              <div className="input-field d-flex flex-column">
                <button className="btn primary-button">
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"></path>
                    </svg>
                  </span>
                  <span className="ps-1">Submit</span>{" "}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </form>
  );
};

export default DataForm;
