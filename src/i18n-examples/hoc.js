import React from "react";
import { withTranslation } from "react-i18next";

// any component
function Hoc({ t, i18n }) {
  return <p>{t("helloWorld")}</p>;
}

export default withTranslation()(Hoc);
