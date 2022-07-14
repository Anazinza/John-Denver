import { useState } from "react";
import Switch from "react-switch";
import * as S from "./styles"
import OnContainer from "./On";
import OffContainer from "./Off";


const MainContainer = () => {
    const [isOn, setIsOn] = useState<boolean>(false)

    return (
        <S.MainContainer>
            <S.Outer>
                <Switch
                    onChange={() => setIsOn(isOn => !isOn)}
                    checked={isOn}
                    width={100}
                    height={63.5}
                    onColor="#ffffff"
                    offColor="#ffffff"
                    onHandleColor="#FBF799"
                    offHandleColor="#6B0AA6" />
                {isOn ?
                    <OnContainer />
                    :
                    <OffContainer />}
            </S.Outer>
        </S.MainContainer>
    )
}

export default MainContainer