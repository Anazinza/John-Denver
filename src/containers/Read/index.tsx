import { useRecoilValue } from "recoil"
import Editor from "../../components/Editor"
import { jungState } from "../../utils/recoil"
import * as S from "./styles"

const ReadContainer = () => {
    const jung = useRecoilValue(jungState)

    return (
        <S.ReadContainer>
            <S.Inner>
                <S.Title>{jung.title}</S.Title>
                <S.Emotion>{jung.emotion}</S.Emotion>
                <Editor
                    value={jung.content}
                    readOnly={true}
                />
            </S.Inner>
        </S.ReadContainer>
    )
}

export default ReadContainer;