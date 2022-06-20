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
            <S.Id>{id}.</S.Id>
            <S.Title>{title}</S.Title>
            <S.Emotion>{emotion}</S.Emotion>
        </S.JungContainer>
    )
}

export default Jung