import { Create_Hangulat } from "./services/Hangulat_CRUD";
const init = function () {
    Create_Hangulat();
}

document.addEventListener("DOMContentLoaded", init);