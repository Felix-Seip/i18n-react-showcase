import React from "react";
import { useTranslation } from "react-i18next";

export default function Hook() {
  const [translate, i18n] = useTranslation();

  return <p>{translate("helloWorld")}</p>;
}
