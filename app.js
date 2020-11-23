const openModal = document.querySelector(".modal-open");
const closeModal = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

openModal.addEventListener("click", () => {
  modalOverlay.classList.add("open-modal");
});
closeModal.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});
