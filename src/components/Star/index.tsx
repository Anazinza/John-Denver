import * as S from "./styles"
import StarImg from "../../assets/img/star.svg"

interface StarPropsType {
    scale: { left: number, top: number }
}

const Star = ({ scale }: StarPropsType) => {
    console.log(scale);


    return (
        <S.StarContainer top={scale.top} left={scale.left}>
            <S.StarImg src={StarImg} alt="star image" />
        </S.StarContainer>
    )
}

export default Star;