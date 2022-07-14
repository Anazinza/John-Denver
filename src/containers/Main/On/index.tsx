import * as S from "./styles"
import { Jungs } from "../../../constant";
import Jung from "../../../components/Jung";
import { useNavigate } from "react-router-dom";

const OnContainer = () => {
    const navigate = useNavigate()

    return (
        <S.OnContainer>
            <S.JungsContainer>
                {Jungs.map((jung) => (
                    <Jung
                        key={jung.id}
                        id={jung.id}
                        title={jung.title}
                        emotion={jung.emotion}
                        content={jung.content} />
                ))}
            </S.JungsContainer>
            <S.ButtonContainer>
                <S.WriteBtn onClick={() => navigate("/write")}>융 쓰러가기</S.WriteBtn>
            </S.ButtonContainer>
        </S.OnContainer>
    )
}

export default OnContainer