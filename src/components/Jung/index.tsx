import * as S from "./styles"

interface propsType {
    id: number;
    title: string;
    emotion: string;
    content: string;
}

const Jung = ({ id, title, emotion, content }: propsType) => {
    return (
        <S.JungContainer>
            <S.Id className="id">{id}.</S.Id>
            <S.Title className="name">{title}</S.Title>
            <S.Emotion className="emo">{emotion}</S.Emotion>
        </S.JungContainer>
    )
}

export default Jung