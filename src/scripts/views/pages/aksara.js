import JaksaraSource from "../../data/jaksara-source";
import {
  createAksaraItemTemplate,
  showLoadingSpinner,
  hideLoadingSpinner,
  aksaraInput,
  aksaraEdit,
} from "../templates/template-creator";

const Aksara = {
  async render() {
    return `
      <div class="content">
        <Button id="aksaraOpenButton" aria-label="Buka formulir"></Button>
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
      await this.renderAksaraList();
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
        const aksaraNumber = document.querySelector("#aksaraNumber").value;
        const aksaraLabel = document.querySelector("#aksaraLabel").value;
        const aksaraImgUrl = document.querySelector("#aksaraImgUrl").value;

        const newAksara = {
          number: aksaraNumber,
          label: aksaraLabel,
          imgUrl: aksaraImgUrl,
        };

        try {
          showLoadingSpinner();
          const postAksaraMessage = await JaksaraSource.postAksara(newAksara);
          alert(postAksaraMessage);
          await this.renderAksaraList();
        } catch (error) {
          await this.renderAksaraList();
        } finally {
          await this.renderAksaraList();
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
    let dataImageUrl;
    aksaraList.forEach((aksara) => {
      if (aksara.imgUrl == "") {
        dataImageUrl =
          "https://raw.githubusercontent.com/Adranaut/resource-capstone/main/icon-aksara.png";
      } else {
        dataImageUrl = aksara.imgUrl;
      }
      aksaraContainer.innerHTML += createAksaraItemTemplate(
        aksara,
        dataImageUrl
      );
    });

    const inpuContent = document.querySelector(".input-content");
    const editButtons = document.querySelectorAll(".editAksaraButton");
    editButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        document.querySelector(".input-container").style.display = "flex";
        inpuContent.innerHTML = "";
        inpuContent.innerHTML += aksaraEdit();

        document.querySelector("#editAksaraNumber").value =
          aksaraList[index].number;
        document.querySelector("#editAksaraLabel").value =
          aksaraList[index].label;
        document.querySelector("#editAksaraImgUrl").value =
          aksaraList[index].imgUrl;

        const submitAksaraEdiButton = document.querySelector(
          "#submitAksaraEditButton"
        );
        submitAksaraEdiButton.addEventListener("click", async () => {
          const editAksaraNumber =
            document.querySelector("#editAksaraNumber").value;
          const editAksaraLabel =
            document.querySelector("#editAksaraLabel").value;
          const editAksaraImgUrl =
            document.querySelector("#editAksaraImgUrl").value;

          const editAksara = {
            number: editAksaraNumber,
            label: editAksaraLabel,
            imgUrl: editAksaraImgUrl,
          };

          const confirmation = confirm(
            "Apakah kamu yakin ingin mengubah data ini?"
          );
          if (confirmation) {
            showLoadingSpinner();
            try {
              const putAksaraMessage = await JaksaraSource.putAksara(
                editAksara,
                aksaraList[index].id
              );
              alert(putAksaraMessage);
              await this.renderAksaraList();
            } catch (error) {
              await this.renderAksaraList();
            } finally {
              await this.renderAksaraList();
              document.querySelector(".input-container").style.display = "none"; 
              hideLoadingSpinner();            
            }
          }
        });
      });
    });

    const deleteButtons = document.querySelectorAll(".deleteAksaraButton");
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", async () => {
        const confirmation = confirm(
          "Apakah kamu yakin ingin menghapus data ini?"
        );
        if (confirmation) {
          showLoadingSpinner();
          try {           
            const deleteAksaraMessage = await JaksaraSource.deleteAksara(
              aksaraList[index].id
            );
            alert(deleteAksaraMessage);
            await this.renderAksaraList();           
          } catch (error) {
            await this.renderAksaraList();
          } finally {
            await this.renderAksaraList();
            hideLoadingSpinner();
          }
        }
      });
    });
  },
};

export default Aksara;
