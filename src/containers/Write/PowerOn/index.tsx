import * as S from "./styles"
import PowerOn from "../../../assets/img/power_on.svg"


const PowerOnContainer = () => {
    return (
        <S.PowerOnContainer>
            <img src={PowerOn} alt="power on" />
            <S.Background />
        </S.PowerOnContainer>
    )
}

export default PowerOnContainer