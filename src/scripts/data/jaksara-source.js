import API_ENDPOINT from "../globals/api-endpoint";

class JaksaraSource {
  static async getAksara() {
    const response = await fetch(API_ENDPOINT.AKSARA);
    const responseJson = await response.json();
    return responseJson.data.aksara;
  }

  static async postAksara(aksara) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aksara),
    };
    const response = await fetch(API_ENDPOINT.AKSARA, options);
    const responseJson = await response.json();
    return responseJson.message;
  }

  static async putAksara(aksara, id) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aksara),
    };
    const response = await fetch(API_ENDPOINT.PUTAKSARA(id), options);
    const responseJson = await response.json();
    return responseJson.message;
  }

  static async deleteAksara(id) {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(API_ENDPOINT.DELETEAKSARA(id), options);
    const responseJson = await response.json();
    return responseJson.message;
  }

  static async getQuiz() {
    const response = await fetch(API_ENDPOINT.QUIZ);
    const responseJson = await response.json();
    return responseJson.data.quiz;
  }

  static async postQuiz(quiz) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quiz),
    };
    const response = await fetch(API_ENDPOINT.QUIZ, options);
    const responseJson = await response.json();
    return responseJson.message;
  }

  static async putQuiz(quiz, id) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quiz),
    };
    const response = await fetch(API_ENDPOINT.PUTQUIZ(id), options);
    const responseJson = await response.json();
    return responseJson.message;
  }

  static async deleteAQuiz(id) {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(API_ENDPOINT.DELETEQUIZ(id), options);
    const responseJson = await response.json();
    return responseJson.message;
  }
}

export default JaksaraSource;
