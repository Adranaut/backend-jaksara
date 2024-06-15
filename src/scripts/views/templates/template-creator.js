const createAksaraItemTemplate = (aksara, imageUrl) => `
  <article tabindex="0" class="card">
    <div class="card-img">
      <img class="aksara-img lazyload" crossorigin="anonymous" data-src="${imageUrl}" alt="${aksara.label}"/>
    </div>
    <div class="card-content">
      <p class="label-aksara">Nomor Urut :</p>
      <p class="data-aksara">${aksara.number}</p>
      <p class="label-aksara">Label :</p>
      <p class="data-aksara">${aksara.label}</p>
    </div>
    <div class="card-action">
      <button class="editAksaraButton" aria-label="Edit data"></button>
      <button class="deleteAksaraButton" aria-label="Hapus data"></button>
    </div>
  </article>
`;

const createQuizItemTemplate = (quiz, imageUrl) => `
  <article tabindex="0" class="card">
    <div class="quiz-card-container">
      <div class="card-img">
        <img class="quiz-img lazyload" crossorigin="anonymous" data-src="${imageUrl}" alt="${quiz.id}"/>
      </div>
      <div class="quiz-content">
        <p class="label-quiz">Pertanyaan :</p>
        <p class="data-quiz">${quiz.question}</p>
        <p class="label-quiz">Jawaban Benar :</p>
        <p class="data-quiz">${quiz.correctAnswer}</p>
        <p class="label-quiz">Jawaban Salah :</P>
        <p class="data-quiz">- ${quiz.incorrectAnswer1}</p>
        <p class="data-quiz">- ${quiz.incorrectAnswer2}</p>
        <p class="data-quiz">- ${quiz.incorrectAnswer3}</p>
        <div class="card-action">
          <button class="editQuizButton" aria-label="Edit data"></button>
          <button class="deleteQuizButton" aria-label="Hapus data"></button>
        </div>
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
  <label for="aksaraNumber">Nomor Urut</label>
  <input type="number" id="aksaraNumber" placeholder="Masukan Nomor Urut" required>
  <label for="aksaraLabel">Label</label>
  <input type="text" id="aksaraLabel" placeholder="Masukan Label" required>
  <label for="aksaraImgUrl">URL Gambar</label>
  <input type="text" id="aksaraImgUrl" placeholder="Masukan URL Gambar">
  <button id="submitAksaraButton">Tambah</button>
`;

const aksaraEdit = () => `
  <p>Ubah Aksara</p>
  <label for="editAksaraNumber">Nomor Urut</label>
  <input type="number" id="editAksaraNumber" placeholder="Masukan Nomor Urut" required>
  <label for="aksaraLabel">Label</label>
  <input type="text" id="editAksaraLabel" placeholder="Masukan Label" required>
  <label for="aksaraImgUrl">URL Gambar</label>
  <input type="text" id="editAksaraImgUrl" placeholder="Masukan URL Gambar">
  <button id="submitAksaraEditButton">Ubah</button>
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

const quizEdit = () => `
  <p>Ubah Kuis</p>
  <label for="quizQuestion">Pertanyaan</label>
  <input type="text" id="editQuizQuestion" placeholder="Masukan Pertanyaan" required>
  <label for="quizImgUrl">URL Gambar</label>
  <input type="text" id="editQuizImgUrl" placeholder="Masukan URL Gambar">
  <label for="quizCorrect">Jawaban Benar</label>
  <input type="text" id="editQuizCorrect" placeholder="Masukan Jawaban Benar" required>
  <label for="quizIncorrect1">Jawaban Salah ke-1</label>
  <input type="text" id="editQuizIncorrect1" placeholder="Masukan Jawaban Salah ke-1" required>
  <label for="quizIncorrect2">Jawaban Salah ke-2</label>
  <input type="text" id="editQuizIncorrect2" placeholder="Masukan Jawaban Salah ke-2" required>
  <label for="quizIncorrect3">Jawaban Salah ke-3</label>
  <input type="text" id="editQuizIncorrect3" placeholder="Masukan Jawaban Salah ke-3" required>
  <button id="submitQuizEditButton">Ubah</button>
`;

export {
  createAksaraItemTemplate,
  createQuizItemTemplate,
  showLoadingSpinner,
  hideLoadingSpinner,
  aksaraInput,
  aksaraEdit,
  quizInput,
  quizEdit,
};
