import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import LoadingScreen from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
      {loading === false ? (
        <>
          <Navbar />
          <Main />
          <About />
          <Projects />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
