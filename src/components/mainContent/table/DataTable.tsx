import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const DataTable = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
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

  const labels = ["0", "1", "2", "3", "4", "5", "6"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset X",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="engine-x-dataTable">
      <div className="row mx-0">
        <div className="col-12 col-lg-6 px-1 py-1">
          <div className="border rounded h-100 px-2">
            <div className="table-description">
              <div className="description-block">
                <h4 className="blue-text">Project 01</h4>
              </div>

              <div className="description-block">
                <h5>Description:</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  similique deserunt consectetur sed laboriosam dolorum magnam
                  sint dolor. Quas, placeat.
                </p>
              </div>

              <div className="description-block">
                <h5>
                  Client: <span className="fw-normal">Client Name</span>
                </h5>
              </div>

              <div className="description-block">
                <h5>
                  Contractor: <span className="fw-normal">Contractor Name</span>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 px-1 py-1">
          <div className="border rounded h-100 px-2">
            <div className="engine-x-chart">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>

      <div className="row mx-0 table-head sticky-top mt-3">
        <div className="col-3 head-cell">
          <div className="d-flex align-items-center justify-content-center">
            <span>KP</span>
          </div>
        </div>

        <div className="col-3 head-cell">
          <div className="d-flex align-items-center justify-content-center">
            <span>X</span>
          </div>
        </div>

        <div className="col-3 head-cell">
          <div className="d-flex align-items-center justify-content-center">
            <span>Y</span>
          </div>
        </div>

        <div className="col-3 head-cell">
          <div className="d-flex align-items-center justify-content-center">
            <span>Z</span>
          </div>
        </div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">5852812.70</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>

      <div className="row mx-0 table-data">
        <div className="col-3 data-cell">0</div>
        <div className="col-3 data-cell">585281.709</div>
        <div className="col-3 data-cell">2108892.92</div>
        <div className="col-3 data-cell">3.56</div>
      </div>
    </div>
  );
};

export default DataTable;
