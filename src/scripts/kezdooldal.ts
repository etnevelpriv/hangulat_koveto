import { Hangulat } from "./models/Hangulat_class";
import { Create_Hangulat } from "./services/Hangulat_CRUD";
import { putModalText, showModal, hideModal } from "./unit/modal";
const readFormInputs = function () {
    const hangulatElement = document.querySelector('input[name="hangulat"]:checked') as HTMLInputElement;
    const leirasElement = document.getElementById("leiras") as HTMLInputElement;
    const leiras = leirasElement.value;
    if (hangulatElement && leiras) {
        return {
            hangulat: hangulatElement.value,
            leiras: leiras
        };
    } else {
        putModalText("Kérlek előbb töltsd ki az összes mezőt");
        showModal();
        return false;
    };
};
document.getElementById("postHangulatButton")?.addEventListener("click", async () => {
    const inputValues = readFormInputs();
    if (inputValues) {
        console.log(inputValues)
        const hangulat = new Hangulat(Number(inputValues.hangulat), inputValues.leiras, new Date());
        const data = await Create_Hangulat(hangulat.hangulat, hangulat.szoveges_leiras, hangulat.datum);
        console.log(data);
        putModalText("Sikeres hangulat feltöltés!")
        showModal();
    };
});
document.getElementById("closeModalButton")?.addEventListener("click", () => {
    hideModal();
    putModalText("");
});