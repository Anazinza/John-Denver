import * as S from "./styles"
import PowerOn from "../../../assets/img/power_on.svg"
import Typical from "react-typical"


const PowerOnContainer = () => {
    return (
        <S.PowerOnContainer>
            <img src={PowerOn} alt="power on" />
            <S.Background />
            <S.TextContainer>
                <S.Text>Are you sure you want to upload?</S.Text>

            </S.TextContainer>
            <S.TypingContainer>
                <S.Text>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            "dddd", 1000,
                            "dndksfnskld", 1000,
                            "dlsndfkl", 1000
                        ]}
                    />
                </S.Text>

            </S.TypingContainer>
        </S.PowerOnContainer>
    )
}

export default PowerOnContainer