import { useState } from "react";
import Switch from "react-switch";
import * as S from "./styles"
import OnContainer from "./On";
import OffContainer from "./Off";


const MainContainer = () => {
    const [onOff, setOnOff] = useState<boolean>(false)

    return (
        <S.MainContainer>
            <S.Outer>
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
                    <OnContainer />
                    :
                    <OffContainer />}
            </S.Outer>
        </S.MainContainer>
    )
}

export default MainContainer