import "./App.css";
// import SocialFollow from "./socialFollow";

function App() {
  return (
    <div className="App">
      <div className="buildingPage">
        <header id="header">
          <h1>Merinque.com</h1>
        </header>

        <div className="content">
          {/* <img
            src="/i'llback.gif"
            alt="Under Construction"
            style={{ width: "230px", marginBottom: "20px" }}
          /> */}
          <h1> Coming soon </h1>
          <p>under construction </p>
             
          {/* <SocialFollow /> */}
        </div>

        <div id="outerCraneContainer">
          <div className="buildings">
            <div />
            <div className="1" />
            <div className="2" />
            <div className="3" />
            <div className="4" />
          </div>

          <div className="crane craneThree">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
          <div className="crane craneTwo">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
          <div className="crane craneOne">
            <div className="line lineOne" />
            <div className="line lineTwo" />
            <div className="line lineThree" />
            <div className="stand" />
            <div className="weight" />
            <div className="cabin" />
            <div className="arm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
