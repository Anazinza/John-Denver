import * as S from "./styles"
import PowerOn from "../../../assets/img/power_on.svg"
import Typical from "react-typical"
import { useEffect, useState } from "react"


const PowerOnContainer = () => {
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 4000)

    })

    return (
        <S.PowerOnContainer>
            <img src={PowerOn} alt="power on" />
            <S.Background />
            {visible &&
                <S.TextContainer>
                    <S.Warning>
                        <S.Text>
                            <Typical
                                wrapper="b"
                                steps={[
                                    "Are you sure you want to upload?", 5000,
                                ]}
                            />
                        </S.Text>
                    </S.Warning>
                    <S.TypingContainer>
                        <S.Text>
                            <Typical
                                loop={Infinity}
                                wrapper="p"
                                steps={[
                                    "Press Enter to save", 3000,
                                    "Press Backspace to remove", 3000,
                                ]}
                            />
                        </S.Text>
                    </S.TypingContainer>
                </S.TextContainer>
            }
        </S.PowerOnContainer>
    )
}

export default PowerOnContainer