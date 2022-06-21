import * as S from "./styles"
import { MdKeyboardArrowUp, MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear()

const OffContainer = () => {
    const [year, setYear] = useState<number>(CURRENT_YEAR)

    return (
        <S.OffContainer>
            <S.Inner>
                <MdKeyboardArrowUp size={50} />
                <S.Text>스위치를 키고 감정을 봐요</S.Text>
            </S.Inner>

            <S.YearContainer>
                <MdOutlineArrowLeft
                    size={35}
                    style={{ cursor: "pointer" }}
                    onClick={() => setYear(year => year - 1)} />
                <S.Text>{year}</S.Text>
                <MdOutlineArrowRight
                    size={35}
                    style={{ cursor: "pointer" }}
                    onClick={() => { year < CURRENT_YEAR && setYear(year => year + 1) }} />
            </S.YearContainer>
        </S.OffContainer>
    )
}

export default OffContainer