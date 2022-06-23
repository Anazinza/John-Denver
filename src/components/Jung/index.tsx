import * as S from "./styles"
import { useSetRecoilState } from "recoil"
import { jungState } from "../../utils/recoil"
import { useNavigate } from "react-router-dom"

interface propsType {
    id: number;
    title: string;
    emotion: string;
    content: string;
}

const Jung = ({ id, title, emotion, content }: propsType) => {
    const setJung = useSetRecoilState(jungState)
    const navigate = useNavigate()

    const onOpenJung = () => {
        setJung({
            id: id,
            title: title,
            emotion: emotion,
            content: content
        })

        navigate("/read")
    }

    return (
        <S.JungContainer onClick={onOpenJung}>
            <S.Id className="id">{id}.</S.Id>
            <S.Title className="name">{title}</S.Title>
            <S.Emotion className="emo">{emotion}</S.Emotion>
        </S.JungContainer>
    )
}

export default Jung