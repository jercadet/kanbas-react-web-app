import ModuleList from "../Modules/List";
import ModuleStatus from "./Status";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill pe-4">
        <ModuleList />
      </div>
      <div className="flex-grow-0 d-none d-lg-block">
        <ModuleStatus />
      </div>
    </div>
  );
}

export default Home;