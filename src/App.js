import { Redirect, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Row, Col, Button } from "reactstrap";

import Hook from "./i18n-examples/hook";
import Hoc from "./i18n-examples/hoc";

import "./scss/theme.default.scss";

import "./i18n";
import TransComponent from "./i18n-examples/trans-component";
import RenderProp from "./i18n-examples/render-prop";

function App() {
  const [t, i18n] = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.id);
  };

  return (
    <div className="py-5 px-5">
      <Row className="justify-content-center">
        <Switch>
          <Route path="/hook">
            <Hook />
          </Route>
          <Route path="/hoc">
            <Hoc />
          </Route>
          <Route path="/render-prop">
            <RenderProp />
          </Route>
          <Route path="/trans-component">
            <TransComponent />
          </Route>
        </Switch>
      </Row>
      <Row className="justify-content-center py-2">
        <Button id="en" onClick={changeLanguage}>
          Translate to English
        </Button>
      </Row>
      <Row className="justify-content-center">
        <Button id="de" onClick={changeLanguage}>
          Translate to German
        </Button>
      </Row>
    </div>
  );
}

export default App;
