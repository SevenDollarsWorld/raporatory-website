import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zhTW from "./locales/zh-TW.json";
import en from "./locales/en.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "zh-TW": { translation: zhTW },
      en: { translation: en },
    },
    lng: "zh-TW",
    fallbackLng: "zh-TW",
    interpolation: { escapeValue: false },
  });

export default i18n;
