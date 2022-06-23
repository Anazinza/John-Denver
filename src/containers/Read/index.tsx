import { useRecoilValue } from "recoil"
import Editor from "../../components/Editor"
import { jungState } from "../../utils/recoil"
import * as S from "./styles"
import Star from "../../components/Star"
import { useEffect, useRef, useState } from "react"

interface scaleType {
    width: number;
    height: number;
}

const ReadContainer = () => {
    const jung = useRecoilValue(jungState)
    const innerRef = useRef<HTMLElement | null>(null)
    const [scale, setScale] = useState<scaleType>({
        width: 0,
        height: 0
    })

    useEffect(() => {
        setScale({
            width: innerRef.current?.offsetWidth || 0,
            height: innerRef.current?.offsetHeight || 0
        })
    }, [])

    const getRandomAxis = () => {
        const left = Math.floor(Math.random() * (scale.width - 50))
        const top = Math.floor(Math.random() * (scale.height - 50))

        return { left, top }
    }

    return (
        <S.ReadContainer ref={innerRef}>
            <S.Inner>
                <S.Title>{jung.title}</S.Title>
                <S.Emotion>{jung.emotion}</S.Emotion>
                <Editor
                    value={jung.content}
                    readOnly={true}
                />
            </S.Inner>
            {Array(100).fill(0).map((_, idx) => (
                <Star key={idx} scale={getRandomAxis()} />
            ))}
        </S.ReadContainer>
    )
}

export default ReadContainer;