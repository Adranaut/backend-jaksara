import CONFIG from "../../globals/config";

const createAksaraItemTemplate = (aksara) => `
  <article tabindex="0" class="card">
    <div class="card-img">
      <img class="aksara-img" crossorigin="anonymous" src="${aksara.imgUrl}" alt="${aksara.label}"/>
    </div>
    <div class="card-content">
      <p class="aksara-label">${aksara.label}</p>
    </div>
  </article>
`;

const createQuizItemTemplate = (quiz, imageUrl) => `
  <article tabindex="0" class="card">
    <div class="quiz-card-container">
      <div class="card-img">
        <img class="quiz-img" crossorigin="anonymous" src="${imageUrl}" alt="${quiz.id}"/>
      </div>
      <div class="quiz-content">
        <p class="label-quiz">Pertanyaan :</p>
        <p class="data-quiz">${quiz.question}</p>
        <p class="label-quiz">Jawaban Benar :</p>
        <p class="data-quiz">${quiz.correctAnswer}</p>
        <p class="label-quiz">Jawaban Salah :</P>
        <p class="data-quiz">- ${quiz.incorrectAnswer.incorrectAnswer1}</p>
        <p class="data-quiz">- ${quiz.incorrectAnswer.incorrectAnswer2}</p>
        <p class="data-quiz">- ${quiz.incorrectAnswer.incorrectAnswer3}</p>
      </div>
    </div>
  </article>
`;

const showLoadingSpinner = () => {
  document.getElementById("loadingSpinner").style.display = "block";
};

const hideLoadingSpinner = () => {
  document.getElementById("loadingSpinner").style.display = "none";
};

const aksaraInput = () => `
  <p>Tambah Aksara</p>
  <label for="aksaraId">ID</label>
  <input type="text" id="aksaraId" placeholder="Masukan ID" required>
  <label for="aksaraLabel">Label</label>
  <input type="text" id="aksaraLabel" placeholder="Masukan Label" required>
  <label for="aksaraImgUrl">URL Gambar</label>
  <input type="text" id="aksaraImgUrl" placeholder="Masukan URL Gambar" required>
  <button id="submitAksaraButton">Tambah</button>
`;

const quizInput = () => `
  <p>Tambah Kuis</p>
  <label for="quizQuestion">Pertanyaan</label>
  <input type="text" id="quizQuestion" placeholder="Masukan Pertanyaan" required>
  <label for="quizImgUrl">URL Gambar</label>
  <input type="text" id="quizImgUrl" placeholder="Masukan URL Gambar">
  <label for="quizCorrect">Jawaban Benar</label>
  <input type="text" id="quizCorrect" placeholder="Masukan Jawaban Benar" required>
  <label for="quizIncorrect1">Jawaban Salah ke-1</label>
  <input type="text" id="quizIncorrect1" placeholder="Masukan Jawaban Salah ke-1" required>
  <label for="quizIncorrect2">Jawaban Salah ke-2</label>
  <input type="text" id="quizIncorrect2" placeholder="Masukan Jawaban Salah ke-2" required>
  <label for="quizIncorrect3">Jawaban Salah ke-3</label>
  <input type="text" id="quizIncorrect3" placeholder="Masukan Jawaban Salah ke-3" required>
  <button id="submitQuizButton">Tambah</button>
`;

export {
  createAksaraItemTemplate,
  createQuizItemTemplate,
  showLoadingSpinner,
  hideLoadingSpinner,
  aksaraInput,
  quizInput,
};
