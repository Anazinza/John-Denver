import * as S from "./styles"

interface StarPropsType {
    scale: { left: number, top: number }
}

const Star = ({ scale }: StarPropsType) => {
    console.log(scale);


    return (
        <S.StarContainer top={scale.top} left={scale.left}>
            dnklsfnsdlfkn
        </S.StarContainer>
    )
}

export default Star;