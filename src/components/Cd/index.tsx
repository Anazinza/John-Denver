import * as S from "./styled"
import { useSetRecoilState } from "recoil";
import { playedCDState } from "../../utils/recoil";

interface PropsType {
    created_at: string;
    backgroundColor: string;
    animation?: boolean;
    hover?: boolean;
    date?: boolean;
}

const Cd = ({ created_at, backgroundColor, animation = false, hover = true, date = true }: PropsType) => {
    const setPlayedCD = useSetRecoilState(playedCDState)
    const dateList: string[] = created_at.split("")

    const onPlayCD = () => {
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
                animation={animation}
                hover={hover}>
                <S.CreatedAt>
                    {date && dateList}
                </S.CreatedAt>
            </S.Cd>
        </S.CdContainer>
    )
}

export default Cd;