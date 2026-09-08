import type { newHangulat_Interface } from "./newHangulat_interface";
export class Hangulat implements newHangulat_Interface {
    hangulat: number;
    szoveges_leiras: string;
    datum: Date;
    constructor(hangulat: number, szoveges_leiras: string, datum: Date) {
        if (typeof hangulat != "number" || hangulat < 0 || hangulat > 4 || hangulat == null || Number.isNaN(hangulat)) {
            throw new Error(`A hangulat nincs megfeleloen megadva: ${hangulat}`);
        };
        if (typeof szoveges_leiras != "string") {
            throw new Error(`A leiras nincs megfeleloen megadva: ${szoveges_leiras}`);
        };
        if (!(datum instanceof Date) || datum > (new Date())) {
            throw new Error(`A datum nincs megfeleloen megadva: ${datum}`);
        };

        this.hangulat = hangulat;
        this.szoveges_leiras = szoveges_leiras;
        this.datum = datum;
    };
    toString() {
        return (`Hangulat: ${this.hangulat}, Szoveges leiras: ${this.szoveges_leiras}, Datum: ${this.datum}`);
    };
};