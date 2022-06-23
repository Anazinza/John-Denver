import * as S from "./styles"
import PowerOn from "../../../assets/img/power_on.svg"
import Typical from "react-typical"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const PowerOnContainer = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setVisible(true)
        }, 4000)

        const keyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                alert("enter")
                navigate("/")
            }
            else if (e.key === "Backspace") {
                alert("backspace")
                navigate("/")
            }
        }

        window.addEventListener("keydown", keyDown)

        return () => {
            window.removeEventListener('keydown', keyDown);
        };

    }, [navigate])


    return (
        <S.PowerOnContainer>
            <img src={PowerOn} alt="power on" />
            <S.Background />
            {visible &&
                <S.TextContainer>
                    <S.Warning>
                        <S.Text>
                            {/* <Typical
                                wrapper="b"
                                steps={[
                                    "Are you sure you want to upload?", 5000,
                                ]}
                            /> */}
                            Are you sure you want to upload?
                        </S.Text>
                    </S.Warning>
                    <S.TypingContainer>
                        <S.Text>
                            <Typical
                                loop={Infinity}
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