import CONFIG from "./config";

const API_ENDPOINT = {
  AKSARA: `${CONFIG.BASE_URL}/aksara`,
  QUIZ: `${CONFIG.BASE_URL}/quiz`,
  PUTAKSARA: (id) => `${CONFIG.BASE_URL}/aksara/${id}`,
  PUTQUIZ: (id) => `${CONFIG.BASE_URL}/quiz/${id}`,
};

export default API_ENDPOINT;
