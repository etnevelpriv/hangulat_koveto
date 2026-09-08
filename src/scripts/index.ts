const init = async function () {
    const scriptElement = document.createElement("script");
    if (document.getElementById("kezdooldalContainer")) {
        scriptElement.src = "/src/scripts/kezdooldal.ts";
        scriptElement.type = "module";
    } else if (document.getElementById("hangulataimContainer")) {
        scriptElement.src = "/src/scripts/hangulataim.ts";
        scriptElement.type = "module";
    } else if (document.getElementById("statisztikaContainer")) {
        scriptElement.src = "/src/scripts/statisztika.ts";
        scriptElement.type = "module";
    }
    document.body.appendChild(scriptElement);
};
document.addEventListener("DOMContentLoaded", init);