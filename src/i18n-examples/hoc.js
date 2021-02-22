import React from "react";
import { withTranslation } from "react-i18next";

function Hoc({ t, i18n }) {
  return <p>{t("helloWorld")}</p>;
}

export default withTranslation()(Hoc);
