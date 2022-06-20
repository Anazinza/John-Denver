import * as S from "./styles"

interface propsType {
    title: string;
    emotion: string;
    content: string;
}

const Jung = ({ title, emotion, content }: propsType) => {
    return (
        <S.JungContainer>
            {title}
            {emotion}
            {content}
        </S.JungContainer>
    )
}

export default Jung