import { Hangulat } from "./models/Hangulat_class";
import { Create_Hangulat } from "./services/Hangulat_CRUD";
const readFormInputs = function () {
    const hangulatElement = document.querySelector('input[name="hangulat"]:checked') as HTMLInputElement;
    const leirasElement = document.getElementById("leiras") as HTMLInputElement;
    if (hangulatElement) {
        return {
            hangulat: hangulatElement.id[8],
            leiras: leirasElement.value
        };
    }
    showModa
};

document.getElementById("postHangulatButton")?.addEventListener("click", async () => {
    const inputValues = readFormInputs();
    const hangulat = new Hangulat(Number(inputValues.hangulat), inputValues.leiras, new Date());
    const data = await Create_Hangulat(hangulat.hangulat, hangulat.szoveges_leiras, hangulat.datum);
    console.log(data)
});