import JaksaraSource from "../../data/jaksara-source";
import {
  createQuizItemTemplate,
  showLoadingSpinner,
  hideLoadingSpinner,
  quizInput,
  quizEdit,
} from "../templates/template-creator";

const Quiz = {
  async render() {
    return `
      <div class="content">
        <Button id="quizOpenButton" aria-label="Buka formulir"></Button>
        <h2 class="heading-content">Daftar Kuis</h2>
        <div id="quizContainer" class="quiz-container"></div>
      </div>
    `;
  },

  async afterRender() {
    showLoadingSpinner();

    try {
      await this.renderQuizList();
    } catch (error) {
      await this.renderQuizList();
    } finally {
      hideLoadingSpinner();
    }

    const inpuContent = document.querySelector(".input-content");
    const openButton = document.querySelector("#quizOpenButton");
    openButton.addEventListener("click", () => {
      document.querySelector(".input-container").style.display = "flex";
      inpuContent.innerHTML = "";
      inpuContent.innerHTML += quizInput();

      const submitQuizButton = document.querySelector("#submitQuizButton");
      submitQuizButton.addEventListener("click", async () => {
        const quizQuestion = document.querySelector("#quizQuestion").value;
        const quizImgUrl = document.querySelector("#quizImgUrl").value;
        const quizCorrect = document.querySelector("#quizCorrect").value;
        const quizIncorrect1 = document.querySelector("#quizIncorrect1").value;
        const quizIncorrect2 = document.querySelector("#quizIncorrect2").value;
        const quizIncorrect3 = document.querySelector("#quizIncorrect3").value;

        const newQuiz = {
          question: quizQuestion,
          imgUrl: quizImgUrl,
          correctAnswer: quizCorrect,
          incorrectAnswer1: quizIncorrect1,
          incorrectAnswer2: quizIncorrect2,
          incorrectAnswer3: quizIncorrect3,
        };

        try {
          showLoadingSpinner();
          const postQuizMessage = await JaksaraSource.postQuiz(newQuiz);         
          alert(postQuizMessage);
          await this.renderQuizList();
        } catch (error) {
          await this.renderQuizList();
        } finally {
          await this.renderQuizList();
          document.querySelector(".input-container").style.display = "none";
          hideLoadingSpinner();
        }
      });
    });
  },

  async renderQuizList() {
    const quizList = await JaksaraSource.getQuiz();
    const quizContainer = document.querySelector("#quizContainer");
    quizContainer.innerHTML = "";
    let imageUrl;
    quizList.forEach((data) => {
      if (data.hasImg === true) {
        imageUrl = data.imgUrl;
      } else {
        imageUrl =
          "https://raw.githubusercontent.com/Adranaut/resource-capstone/main/icon-aksara.png";
      }
      quizContainer.innerHTML += createQuizItemTemplate(data, imageUrl);
    });

    const inpuContent = document.querySelector(".input-content");
    const editButtons = document.querySelectorAll(".editQuizButton");
    editButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        document.querySelector(".input-container").style.display = "flex";
        inpuContent.innerHTML = "";
        inpuContent.innerHTML += quizEdit();

        document.querySelector("#editQuizQuestion").value =
          quizList[index].question;
        document.querySelector("#editQuizImgUrl").value =
          quizList[index].imgUrl;
        document.querySelector("#editQuizCorrect").value =
          quizList[index].correctAnswer;
        document.querySelector("#editQuizIncorrect1").value =
          quizList[index].incorrectAnswer1;
        document.querySelector("#editQuizIncorrect2").value =
          quizList[index].incorrectAnswer2;
        document.querySelector("#editQuizIncorrect3").value =
          quizList[index].incorrectAnswer3;

        const submitAksaraEdiButton = document.querySelector(
          "#submitQuizEditButton"
        );
        submitAksaraEdiButton.addEventListener("click", async () => {
          const editQuizQuestion =
            document.querySelector("#editQuizQuestion").value;
          const editQuizImgUrl =
            document.querySelector("#editQuizImgUrl").value;
          const editQuizCorrect =
            document.querySelector("#editQuizCorrect").value;
          const editQuizIncorrect1 = document.querySelector(
            "#editQuizIncorrect1"
          ).value;
          const editQuizIncorrect2 = document.querySelector(
            "#editQuizIncorrect2"
          ).value;
          const editQuizIncorrect3 = document.querySelector(
            "#editQuizIncorrect3"
          ).value;

          const editQuiz = {
            question: editQuizQuestion,
            imgUrl: editQuizImgUrl,
            correctAnswer: editQuizCorrect,
            incorrectAnswer1: editQuizIncorrect1,
            incorrectAnswer2: editQuizIncorrect2,
            incorrectAnswer3: editQuizIncorrect3,
          };

          const confirmation = confirm(
            "Apakah kamu yakin ingin mengubah data ini?"
          );
          if (confirmation) {
            try {
              showLoadingSpinner();
              const putQuizMessage = await JaksaraSource.putQuiz(
                editQuiz,
                quizList[index].id
              );
              alert(putQuizMessage);
              await this.renderQuizList();            
            } catch (error) {
              await this.renderQuizList();
            } finally {
              await this.renderQuizList();
              document.querySelector(".input-container").style.display = "none";
              hideLoadingSpinner();
            }
          }
        });
      });
    });

    const deleteButtons = document.querySelectorAll(".deleteQuizButton");
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", async () => {
        const confirmation = confirm(
          "Apakah kamu yakin ingin menghapus data ini?"
        );
        if (confirmation) {
          try {
            showLoadingSpinner();
            const deleteAksaraMessage = await JaksaraSource.deleteAQuiz(
              quizList[index].id
            );
            alert(deleteAksaraMessage);   
            await this.renderQuizList();        
          } catch (error) {
            await this.renderQuizList();
          } finally {
            await this.renderQuizList();
            hideLoadingSpinner();
          }
        }
      });
    });
  },
};

export default Quiz;
