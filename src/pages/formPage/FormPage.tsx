import { useEffect } from "react";
import DataForm from "../../components/mainContent/form/DataForm";

const FormPage = () => {
  useEffect(() => {
    const triggerTabList = document.querySelectorAll("#myTab button");
    triggerTabList.forEach((triggerEl) => {
      const tabTrigger = new bootstrap.Tab(triggerEl);

      triggerEl.addEventListener("click", (event) => {
        event.preventDefault();
        tabTrigger.show();
      });
    });

    return () => {
      triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new bootstrap.Tab(triggerEl);

        triggerEl.removeEventListener("click", (event) => {
          event.preventDefault();
          tabTrigger.show();
        });
      });
    };
  }, []);

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
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Step 1
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Step 2
              </button>
            </li>
          </ul>
          <div className="tab-content mt-3" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <DataForm step={1} />
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <DataForm step={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
