import * as S from "./styles"
import { MdKeyboardArrowUp, MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { useState } from "react";
import { Dates } from "../../../constant";
import Cd from "../../../components/Cd";

const CURRENT_YEAR = new Date().getFullYear()

const generateColor = () => {
    const colors = [
        "#FF%s8C",
        "#FF8C%s",
        "#%sFF8C",
        "#%s8CFF",
        "#8CFF%s",
        "#8C%sFF",
    ]

    const index = Math.floor(Math.random() * (colors.length - 1))
    const color = colors[index]
    const hexCode = Math.floor(Math.random() * 255)
        .toString(16)
        .padStart(2, '0')

    return color.replaceAll("%s", hexCode)
}

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
                        size={100}
                        style={{ cursor: "pointer" }}
                        onClick={onPrev} />
                    <S.Text fontSize="50px">{year}</S.Text>
                    <MdOutlineArrowRight
                        size={100}
                        style={{ cursor: "pointer" }}
                        onClick={onNext} />
                </S.YearContainer>
                <S.Cds>
                    {Dates.map(() => (
                        <Cd backgroundColor={generateColor()} />
                    ))}
                </S.Cds>
            </S.CdContainer>
        </S.OffContainer>
    )
}

export default OffContainer