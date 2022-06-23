import { atom } from "recoil";

interface playedCDType {
    created_at: string;
    backgroundColor: string;
}

export const playedCDState = atom({
    key: "playedCDState",
    default: {
        created_at: "",
        backgroundColor: "#D9D9D9"
    } as playedCDType
})


interface JungType {
    id: number;
    title: string;
    emotion: string;
    content: string;
}

export const jungState = atom({
    key: "jungState",
    default: {} as JungType
})