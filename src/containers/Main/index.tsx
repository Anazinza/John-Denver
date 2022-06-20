import { useState } from "react";
import Switch from "react-switch";
import * as S from "./styles"

const MainContainer = () => {
    const [onOff, setOnOff] = useState<boolean>(false)

    return (
        <S.MainContainer>
            <S.SwitchContainer>
                <Switch
                    onChange={() => setOnOff(onOff => !onOff)}
                    checked={onOff}
                    width={100}
                    height={63.5}
                    onColor="#ffffff"
                    offColor="#ffffff"
                    onHandleColor="#FBF799"
                    offHandleColor="#6B0AA6" />
                {onOff ?
                    <S.OnContainer>
                    </S.OnContainer>
                    :
                    <S.OffContainer>
                        <S.Inner>
                            <S.Text>스위치를 키고 감정을 봐요</S.Text>
                        </S.Inner>
                    </S.OffContainer>}
            </S.SwitchContainer>
        </S.MainContainer>
    )
}

export default MainContainer