import "./App.css";
import HeaderBar from "./components/HeaderBar";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <>
      <HeaderBar />
      <NavMenu />
      <h1>Forest Oaks Elementary PTO</h1>
      <div className="card">
        <p>
          Welcome to the FOES PTO website. We are a group of parents and
          teachers who work together to provide educational opportunities for
          our students. We are a 501(c)(3) non-profit organization.
        </p>
      </div>
      <p className="read-the-docs">
        Join us for our next meeting on Feb 25th at 6:30pm.
      </p>
    </>
  );
}

export default App;
