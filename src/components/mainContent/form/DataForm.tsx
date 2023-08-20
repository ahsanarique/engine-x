import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProps } from "../../../context/Context";
import { typeMinMaxData } from "../../../utils/typeDefs";
import { useForm, SubmitHandler } from "react-hook-form";
import { Context } from "../../../context/Context";

type Inputs = {
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
  const { minMax, setMinMax, setTableData } = useContext(
    Context
  ) as ContextProps;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    if (data.file && data.file.length > 0) {
      const file = data.file[0];
      readFileContents(file);
    }

    navigate("/project-data");
  };

  const readFileContents = (file: File) => {
    const reader = new FileReader();
    reader.onload = handleFileUpload;
    reader.readAsText(file);
  };

  const handleFileUpload = (event: ProgressEvent<FileReader>) => {
    const content = event.target?.result as string;
    const lines = content.split("\n");

    const data = lines.map((line) => line.split(","));
    const headers = data[0];
    data.shift();

    const updatedTableData: any = {
      header: [...headers],
      data: data.map((item: string[]) =>
        item.map((value: string) => Number(value))
      ),
    };

    setTableData(updatedTableData);
    sessionStorage.setItem("tableData", JSON.stringify(updatedTableData));
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const data = await getMinMax(file);
      if (data) {
        setMinMax(data);
      }
    }
  };

  const getMinMax = (file: File) => {
    return new Promise<typeMinMaxData[]>((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        const lines = content.split("\n");

        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        let minZ = Infinity;
        let maxZ = -Infinity;

        lines.forEach((line) => {
          const fields = line.split(",");

          if (fields.length >= 4) {
            const x = parseFloat(fields[1]);
            const y = parseFloat(fields[2]);
            const z = parseFloat(fields[3]);

            if (!isNaN(x)) {
              minX = Math.min(minX, x);
              maxX = Math.max(maxX, x);
            }
            if (!isNaN(y)) {
              minY = Math.min(minY, y);
              maxY = Math.max(maxY, y);
            }
            if (!isNaN(z)) {
              minZ = Math.min(minZ, z);
              maxZ = Math.max(maxZ, z);
            }
          }
        });

        const minMaxData: typeMinMaxData[] = [
          {
            title: "X",
            minValue: minX,
            maxValue: maxX,
          },
          {
            title: "Y",
            minValue: minY,
            maxValue: maxY,
          },
          {
            title: "Z",
            minValue: minZ,
            maxValue: maxZ,
          },
        ];

        resolve(minMaxData);
      };
      reader.readAsText(file);
    });
  };

  console.log(
    !Number(minMax.filter((data) => data.title === "X")[0].minValue),
    minMax.filter((data) => data.title === "X")[0].minValue
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mx-0">
          {step === 2 && (
            <div className="col-12">
              <div className="row mx-0">
                <div className="col-12 px-0">
                  <div className="input-field d-flex flex-column">
                    <label htmlFor="file">
                      <span className="red-text pb-2">*</span>Upload File (.csv
                      format){" "}
                      {errors.file && (
                        <span className="red-text">{errors.file.message}</span>
                      )}
                    </label>

                    <input
                      type="file"
                      accept=".csv"
                      {...register("file", {
                        required: false,
                      })}
                      onChange={handleFileChange}
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
                          defaultValue={
                            minMax.filter((data) => data.title === "X")[0]
                              .minValue
                          }
                          {...register("minX", {
                            required: !Number(
                              minMax.filter((data) => data.title === "X")[0]
                                .minValue
                            ),
                          })}
                          onChange={(e) => {
                            const newMinMaxData = [...minMax].map(
                              (item: typeMinMaxData) => {
                                if (item.title === "X") {
                                  item.minValue = Number(e.target.value);
                                }

                                return item;
                              }
                            );
                            setMinMax(newMinMaxData);
                            console.log(minMax);
                          }}
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
                          defaultValue={
                            minMax.filter((data) => data.title === "X")[0]
                              .maxValue
                          }
                          {...register("maxX", {
                            required: !Number(
                              minMax.filter((data) => data.title === "X")[0]
                                .maxValue
                            ),
                          })}
                          onChange={(e) => {
                            const newMinMaxData = [...minMax].map(
                              (item: typeMinMaxData) => {
                                if (item.title === "X") {
                                  item.maxValue = Number(e.target.value);
                                }

                                return item;
                              }
                            );
                            setMinMax(newMinMaxData);
                          }}
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
                          defaultValue={
                            minMax.filter((data) => data.title === "Y")[0]
                              .minValue
                          }
                          {...register("minY", {
                            required: !Number(
                              minMax.filter((data) => data.title === "Y")[0]
                                .minValue
                            ),
                          })}
                          onChange={(e) => {
                            const newMinMaxData = [...minMax].map(
                              (item: typeMinMaxData) => {
                                if (item.title === "Y") {
                                  item.minValue = Number(e.target.value);
                                }

                                return item;
                              }
                            );
                            setMinMax(newMinMaxData);
                          }}
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
                          defaultValue={
                            minMax.filter((data) => data.title === "Y")[0]
                              .maxValue
                          }
                          {...register("maxY", {
                            required: !Number(
                              minMax.filter((data) => data.title === "Y")[0]
                                .maxValue
                            ),
                          })}
                          onChange={(e) => {
                            const newMinMaxData = [...minMax].map(
                              (item: typeMinMaxData) => {
                                if (item.title === "Y") {
                                  item.maxValue = Number(e.target.value);
                                }

                                return item;
                              }
                            );
                            setMinMax(newMinMaxData);
                          }}
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
                          defaultValue={
                            minMax.filter((data) => data.title === "Z")[0]
                              .minValue
                          }
                          {...register("minZ", {
                            required: !Number(
                              minMax.filter((data) => data.title === "Z")[0]
                                .minValue
                            ),
                          })}
                          onChange={(e) => {
                            const newMinMaxData = [...minMax].map(
                              (item: typeMinMaxData) => {
                                if (item.title === "Z") {
                                  item.minValue = Number(e.target.value);
                                }

                                return item;
                              }
                            );
                            setMinMax(newMinMaxData);
                          }}
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
                          defaultValue={
                            minMax.filter((data) => data.title === "Z")[0]
                              .maxValue
                          }
                          {...register("maxZ", {
                            required: !Number(
                              minMax.filter((data) => data.title === "Z")[0]
                                .maxValue
                            ),
                          })}
                          onChange={(e) => {
                            const newMinMaxData = [...minMax].map(
                              (item: typeMinMaxData) => {
                                if (item.title === "Z") {
                                  item.maxValue = Number(e.target.value);
                                }

                                return item;
                              }
                            );
                            setMinMax(newMinMaxData);
                          }}
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
          {step === 2 && (
            <>
              <div className="col-12">
                <div className="input-field d-flex flex-column">
                  <button className="btn primary-button" type="submit">
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
    </>
  );
};

export default DataForm;
