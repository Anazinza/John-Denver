import * as S from "./styles"
import { MdKeyboardArrowUp, MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear()

const OffContainer = () => {
    const [year, setYear] = useState<number>(CURRENT_YEAR)

    const onNext = () => {
        year < CURRENT_YEAR && setYear(year => year + 1)
    }

    const onPrev = () => {
        setYear(year => year - 1)
    }

    return (
        <S.OffContainer>
            <S.Inner>
                <MdKeyboardArrowUp size={50} />
                <S.Text fontSize="23px">스위치를 키고 감정을 봐요</S.Text>
            </S.Inner>

            <S.CdContainer>
                <S.YearContainer>
                    <MdOutlineArrowLeft
                        size={55}
                        style={{ cursor: "pointer" }}
                        onClick={onPrev} />
                    <S.Text fontSize="50px">{year}</S.Text>
                    <MdOutlineArrowRight
                        size={55}
                        style={{ cursor: "pointer" }}
                        onClick={onNext} />
                </S.YearContainer>
                <S.Cds>
                    {  }
                </S.Cds>
            </S.CdContainer>
        </S.OffContainer>
    )
}

export default OffContainer