import type { newHangulat_Interface } from "./newHangulat_interface";
export class Hangulat implements newHangulat_Interface {
    hangulat: string;
    szoveges_leiras: string;
    datum: Date;
    constructor(hangulat:string, szoveges_leiras:string, datum: Date) {
        this.hangulat = hangulat;
        this.szoveges_leiras = szoveges_leiras;
        this.datum = datum;
    }
    toString() {
        return (`Hangulat: ${this.hangulat}, Szoveges leiras: ${this.szoveges_leiras}, Datum: ${this.datum}`);
    };
};