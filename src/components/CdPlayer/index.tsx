import * as S from "./styles"
import CdPlayerImg from "../../assets/img/cd_player.svg"
import { useRecoilValue } from "recoil"
import { playedCDState } from "../../utils/recoil"
import Cd from "../Cd"

const CdPlayer = () => {
    const playedCD = useRecoilValue(playedCDState)

    return (
        <S.CdPlayerContainer>
            <S.CdPlayer src={CdPlayerImg} alt="cd player" />
            <S.CdContainer>
                <Cd
                    created_at={playedCD.created_at}
                    backgroundColor={playedCD.backgroundColor}
                    animation={true}
                    hover={false} />
            </S.CdContainer>
        </S.CdPlayerContainer>
    )
}

export default CdPlayer