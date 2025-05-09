import "./App.css";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />
      <div
      // className="max-w-[1444px] flex flex-col mx-auto min-h-screen bg-white items-center justify-center"
      >
        <Gallery />;
        <About />
      </div>
    </>
  );
}

export default App;
