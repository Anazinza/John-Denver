import * as S from "./styles"
import PowerOff from "../../../assets/img/power_off.svg"

const ConfirmContainer = () => {
    return (
        <S.ConfirmContainer>
            <S.Inner>
                <img src={PowerOff} alt="power off" />
                <S.TextButton>Click to upload</S.TextButton>

            </S.Inner>
        </S.ConfirmContainer>
    )
}

export default ConfirmContainer