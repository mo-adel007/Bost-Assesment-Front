import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from './locale/en.json'
import arJson from './locale/ar.json'

// 5- Data returned in the API is strings in English, please map it to Arabic in any way you think will be better (Make sure your app supports both languages).
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJson },
    ar: { ...arJson },
  },
  lng: "ar",
});