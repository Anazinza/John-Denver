import * as S from "./styled"

interface PropsType {
    backgroundColor: string;
}

const Cd = ({ backgroundColor }: PropsType) => {
    return (
        <S.CdContainer>
            <S.Cd backgroundColor={backgroundColor} />
        </S.CdContainer>
    )
}

export default Cd;