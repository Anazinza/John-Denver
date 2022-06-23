import * as S from "./styles"
import PowerOff from "../../../assets/img/power_off.svg"
import { useEffect, useState } from "react"

const ConfirmContainer = () => {
    const [animation, setAnimation] = useState<boolean>(false)

    useEffect(() => {
        setAnimation(true)
    }, [])

    return (
        <S.ConfirmContainer>
            <S.Inner>
                <S.PowerContainer>
                    <img src={PowerOff} alt="power off" />
                </S.PowerContainer>
                <S.Text>Click power to upload</S.Text>

            </S.Inner>
        </S.ConfirmContainer>
    )
}

export default ConfirmContainer