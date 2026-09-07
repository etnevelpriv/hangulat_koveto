import type { Hangulat } from "../models/Hangulat_class";

export const Create_Hangulat = async function (hangulat: number, szoveges_leiras: string, datum: Date) {
    const url = import.meta.env.VITE_RETOOL_API_URL;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hangulat: hangulat,
                szoveges_leiras: szoveges_leiras,
                datum: datum
            })
        })
        const data = response.json();
        return data;
    } catch (err: any) {
        throw new Error(err);
    };
};
export const Read_Hangulat_Osszes = async function () {
    const url = import.meta.env.VITE_RETOOL_API_URL;
    try {
        const response = await fetch(url, {
            method: "GET",
        });
        const data = response.json();
        return data;
    } catch (err: any) {
        throw new Error(err);
    };
};
export const Read_Hangulat = async function (id: number) {
    const url = import.meta.env.VITE_RETOOL_API_URL;
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "GET",
        });
        const data = response.json();
        return data;
    } catch (err: any) {
        throw new Error(err);
    };
};
export const Update_Hangulat = async function (id: number, hangulat_obj: Hangulat) {
    const url = import.meta.env.VITE_RETOOL_API_URL;
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(hangulat_obj)
        });
        const data = response.json();
        return data;
    } catch (err: any) {
        throw new Error(err);
    };
};
export const Delete_Hangulat = async function (id: number) {
    const url = import.meta.env.VITE_RETOOL_API_URL;
    try {
        const response = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        const data = response.json();
        return data;
    } catch (err: any) {
        throw new Error(err);
    };
};