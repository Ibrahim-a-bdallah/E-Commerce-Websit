import axios from "axios";

// استخدام متغير بيئة مع قيمة احتياطية
const baseURL = import.meta.env.VITE_API_URL || "/api";
axios.defaults.baseURL = baseURL;

export default axios; // اختياري: تصدير Axios لاستخدامه في ملفات أخرى
