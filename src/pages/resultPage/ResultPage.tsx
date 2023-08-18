import html2pdf from "html2pdf.js";
import DataTable from "../../components/mainContent/table/DataTable";

const ResultPage = () => {
  const generatePdf = async () => {
    const element = document.getElementById("pdf-section");
    if (!element) {
      console.error("PDF section not found.");
      return;
    }

    const pdfOptions = {
      margin: 10,
      filename: "table-data.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    try {
      const pdf = html2pdf().from(element).set(pdfOptions);
      pdf.save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <section className="engine-x-resultPage">
      <div className="row mx-0">
        <div className="col-12">
          <div className="d-flex align-items-center mt-3">
            <h1 className="page-title">Project Data</h1>
            <button
              onClick={generatePdf}
              className="btn primary-button ms-auto d-flex align-items-center"
            >
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                </svg>
              </span>
              <span className="ps-2">Download PDF</span>
            </button>
          </div>
        </div>

        <div className="col-12">
          <div className="mt-3" id="pdf-section">
            <DataTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
