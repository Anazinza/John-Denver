import * as S from "./styled"
import { useSetRecoilState } from "recoil";
import { playedCDState } from "../../utils/recoil";

import { useState } from "react";

interface PropsType {
    created_at: string;
    backgroundColor: string;
}

const Cd = ({ created_at, backgroundColor }: PropsType) => {
    const [click, setClick] = useState<boolean>(false)
    const setPlayedCD = useSetRecoilState(playedCDState)

    const onPlayCD = () => {
        setClick(true)

        setPlayedCD({
            created_at: created_at,
            backgroundColor: backgroundColor
        })
    }

    return (
        <S.CdContainer>
            <S.Cd
                backgroundColor={backgroundColor}
                onClick={onPlayCD}
                click={click}>
                <legend>
                    {created_at}
                </legend>
            </S.Cd>
        </S.CdContainer>
    )
}

export default Cd;