Promise.all([import("@/Root"), import("@/App")]).then(
  ([{ default: render }, { default: App }]) => {
    render(App);
  }
);

import "./index.css";
import './styles/base/normalize.scss'
import './styles/base/_fonts.scss'
import './styles/base/_typography.scss'
// import './styles/base/globalStyles.scss'
import './styles/base/input.scss'