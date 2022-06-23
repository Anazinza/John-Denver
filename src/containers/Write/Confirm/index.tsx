import * as S from "./styles"
import PowerOff from "../../../assets/img/power_off.svg"
import { useState } from "react"
import PowerOnContainer from "../PowerOn"

const ConfirmContainer = () => {
    const [power, setPower] = useState<boolean>(false)

    return (
        <div>
            {power ?
                <PowerOnContainer />
                :
                <S.ConfirmContainer>
                    <S.Inner>
                        <S.PowerContainer onClick={() => setPower(true)}>
                            <img src={PowerOff} alt="power off" />
                        </S.PowerContainer>
                        <S.Text>Click power to upload</S.Text>

                    </S.Inner>
                </S.ConfirmContainer>}
        </div>
    )
}

export default ConfirmContainer