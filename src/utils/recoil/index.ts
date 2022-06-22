import { atom } from "recoil";

interface playedCDType {
    created_at: string;
    backgroundColor: string;
}

export const playedCDState = atom({
    key: "playedCDState",
    default: {} as playedCDType
})