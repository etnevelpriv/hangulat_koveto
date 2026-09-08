export const showModal = function () {
    const modalElement = document.getElementById("modal");
    if (modalElement?.classList.contains("hide")) {
        modalElement?.classList.remove("hide");
    };
};
export const hideModal = function () {
    const modalElement = document.getElementById("modal");
    if (modalElement?.classList.contains("hide")) {
        modalElement?.classList.add("hide");
    };

    modalElement?.classList.toggle("hide");
};
export const putModalText = function (text: string) {
    const textElement = document.getElementById("modalText") as HTMLElement;
    textElement.textContent = text;
};