import React from "react";

import { Translation } from "react-i18next";

// any component
export default function RenderProp() {
  return (
    <Translation>
      {(translate) => <h1>{translate("helloWorld")}</h1>}
    </Translation>
  );
}
