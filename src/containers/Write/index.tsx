import Editor from "../../components/Editor"
import * as S from "./styles"

const WriteContainer = () => {
    return (
        <S.WriteContainer>
            <S.Inner>
                <S.InputContainer>
                    <S.Input placeholder="제목을 입력해주세요"/>
                    <S.Input placeholder="감정을 입력해주세요"/>
                </S.InputContainer>
                <Editor placeholder="내용을 입력해주세요" />
            </S.Inner>
        </S.WriteContainer>
    )
}

export default WriteContainer