import JaksaraSource from "../../data/jaksara-source";
import {
  createAksaraItemTemplate,
  showLoadingSpinner,
  hideLoadingSpinner,
  aksaraInput,
} from "../templates/template-creator";

const Aksara = {
  async render() {
    return `
      <div class="content">
        <Button id="aksaraOpenButton" aria-label="Open input"></Button>
        <h2 class="heading-content">Daftar Aksara</h2>
        <div id="aksaraContainer" class="aksara-container"></div>
      </div>
    `;
  },

  async afterRender() {
    showLoadingSpinner();

    try {
      await this.renderAksaraList();
    } catch (error) {
      alert(error);
    } finally {
      hideLoadingSpinner();
    }

    const inpuContent = document.querySelector(".input-content");
    const openButton = document.querySelector("#aksaraOpenButton");
    openButton.addEventListener("click", () => {
      document.querySelector(".input-container").style.display = "flex";
      inpuContent.innerHTML = "";
      inpuContent.innerHTML += aksaraInput();

      const submitAksaraButton = document.querySelector("#submitAksaraButton");
      submitAksaraButton.addEventListener("click", async () => {
        const aksaraId = document.querySelector("#aksaraId").value;
        const aksaraLabel = document.querySelector("#aksaraLabel").value;
        const aksaraImgUrl = document.querySelector("#aksaraImgUrl").value;

        const newAksara = {
          id: aksaraId,
          label: aksaraLabel,
          imgUrl: aksaraImgUrl,
        };

        try {
          showLoadingSpinner();
          const postAksaraMessage = await JaksaraSource.postAksara(newAksara);
          await this.renderAksaraList();
          alert(postAksaraMessage);
        } catch (error) {
          alert(error);
        } finally {
          document.querySelector(".input-container").style.display = "none";
          hideLoadingSpinner();
        }
      });
    });
  },

  async renderAksaraList() {
    const aksaraContainer = document.querySelector("#aksaraContainer");
    aksaraContainer.innerHTML = "";
    const aksaraList = await JaksaraSource.getAksara();
    aksaraList.forEach((aksara) => {
      aksaraContainer.innerHTML += createAksaraItemTemplate(aksara);
    });
  },
};

export default Aksara;
