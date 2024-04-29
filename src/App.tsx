import { Fragment } from "react/jsx-runtime";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <AppRoutes />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        draggable={false}
      />
    </Fragment>
  );
};

export default App;