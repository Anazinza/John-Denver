import * as S from "./styled"
import { useSetRecoilState } from "recoil";
import { playedCDState } from "../../utils/recoil";

interface PropsType {
    created_at: string;
    backgroundColor: string;
    animation?: boolean;
    hover?: boolean;
}

const splitDate = (date: string) => {
    if (date) return date.split("-")
}

const Cd = ({ created_at, backgroundColor, animation = false, hover = true }: PropsType) => {
    const setPlayedCD = useSetRecoilState(playedCDState)
    // const dateList: string[] | undefined = splitDate(created_at)

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

                    <S.Char1>
                        {/* {dateList && dateList} */}
                        {created_at}
                    </S.Char1>
                </S.CreatedAt>
            </S.Cd>
        </S.CdContainer>
    )
}

export default Cd;