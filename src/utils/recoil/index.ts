import { atom } from "recoil";

interface playedCDType {
    created_at: string;
    backgroundColor: string;
}

export const playedCDState = atom({
    key: "playedCDState",
    default: {
        created_at: "0-0-0",
        backgroundColor: "#D9D9D9"
    } as playedCDType
})