import * as S from "./styles"
import { useSetRecoilState } from "recoil"
import { jungState } from "../../utils/recoil"

interface propsType {
    id: number;
    title: string;
    emotion: string;
    content: string;
}

const Jung = ({ id, title, emotion, content }: propsType) => {
    const setJung = useSetRecoilState(jungState)

    const onOpenJung = () => {
        setJung({
            id: id,
            title: title,
            emotion: emotion,
            content: content
        })
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