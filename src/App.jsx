import { AllRoutes } from "./routes/AllRoutes";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App(){
  return(
    <>
      <Header />
      <AllRoutes/>
      <Footer />
    </>
  );
}

export default App;