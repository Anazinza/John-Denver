import { useState } from "react"
import Editor from "../../components/Editor"
import ConfirmContainer from "./Confirm"
import * as S from "./styles"

const WriteContainer = () => {
    const [click, setClick] = useState<boolean>(false)

    return (
        <S.WriteContainer>
            {click ?
                <div>
                    <S.ButtonContainer>
                        <S.TextButton onClick={() => setClick(false)}>Back to write Jung</S.TextButton>
                    </S.ButtonContainer>
                    <ConfirmContainer />
                </div>
                :
                <S.Inner click={click}>
                    <S.InputContainer>
                        <S.Input placeholder="제목을 입력해주세요" />
                        <S.Input placeholder="감정을 입력해주세요" />
                    </S.InputContainer>
                    <Editor placeholder="내용을 입력해주세요" />
                    <S.ButtonContainer>
                        <S.TextButton onClick={() => setClick(true)}>클릭해서 다음단계로</S.TextButton>
                    </S.ButtonContainer>
                </S.Inner>}
        </S.WriteContainer>
    )
}

export default WriteContainer