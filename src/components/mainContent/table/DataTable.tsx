import { useContext } from "react";
import { Context } from "../../../context/Context";
import { ContextProps } from "../../../context/Context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const DataTable = () => {
  const { projectData, tableData, tableHasData } = useContext(
    Context
  ) as ContextProps;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,

    scales: {
      x: {
        title: {
          display: true,
          text: "KP",
        },
      },
      y: {
        title: {
          display: true,
          text: "Dataset X",
        },
      },
    },

    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Data Chart",
      },
    },
  };

  const labels = tableData.data?.map((item: number[]) => item[0]);

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset X",
        data: tableData.data?.map((item: number[]) => item[1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="engine-x-dataTable">
      <div className="row mx-0">
        <div className="col-12 col-xl-6 px-1 py-1">
          <div className="border rounded h-100 px-2">
            <div className="table-description">
              <div className="description-block">
                <h4 className="blue-text">{projectData[0].projectName}</h4>
              </div>

              <div className="description-block">
                <h5>Description:</h5>
                <p>
                  {projectData[0].projectDescription
                    ? projectData[0].projectDescription
                    : "No description added"}
                </p>
              </div>

              <div className="description-block">
                <h5>
                  Client:{" "}
                  <span className="fw-normal">{projectData[0].clientName}</span>
                </h5>
              </div>

              <div className="description-block">
                <h5>
                  Contractor:{" "}
                  <span className="fw-normal">
                    {projectData[0].contractorName}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 px-1 py-1">
          <div className="border rounded h-100 px-2">
            <div className="engine-x-chart">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </div>

      {tableHasData ? (
        <>
          <div className="row mx-0 table-head sticky-top mt-3">
            {tableData.header.map((tableTitle: string) => {
              return (
                <div key={tableTitle} className="col-3 head-cell">
                  <div className="d-flex align-items-center justify-content-center">
                    <span>{tableTitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {tableData.data.map((item: number[], index: number) => {
            return (
              <div key={item[0] + index} className="row mx-0 table-data">
                {item.map((value: number, index: number) => (
                  <div key={value + index} className="col-3 data-cell">
                    {value}
                  </div>
                ))}
              </div>
            );
          })}
        </>
      ) : (
        <h2 className="text-center mt-2">No data added. Upload a .csv file to see the data here.</h2>
      )}
    </div>
  );
};

export default DataTable;
