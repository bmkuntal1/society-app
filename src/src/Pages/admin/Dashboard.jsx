import MenuCard from "../../components/MenuCard"

function Dashboard() {
  
  return (
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <MenuCard to="events" icon="bell" title="Events" description="Manage Events" className="bg-info text-light" />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Dashboard