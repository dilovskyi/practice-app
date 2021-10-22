import React from "react";
import { Trans, useTranslation } from "react-i18next";

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const changeLaguage = (languale) => {
    i18n.changeLanguage(languale);
  };
  return (
    <>
      <button
        onClick={() => {
          changeLaguage("en");
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          changeLaguage("ru");
        }}
      >
        RU
      </button>
    </>
  );
}

export default ChangeLanguage;
