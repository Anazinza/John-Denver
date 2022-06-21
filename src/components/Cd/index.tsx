import * as S from "./styled"
import { generateColor } from "../../utils/generateColor"

interface PropsType {
    created_at: string;
}

const Cd = ({ created_at }: PropsType) => {
    return (
        <S.CdContainer>
            <S.Cd backgroundColor={generateColor()}>
                {created_at}
            </S.Cd>
        </S.CdContainer>
    )
}

export default Cd;