import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import './styles/base/normalize.scss'
import './styles/base/_fonts.scss'
import './styles/base/_typography.scss'
// import './styles/base/globalStyles.scss'
import './styles/base/input.scss'

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
