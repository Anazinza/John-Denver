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
                    offHandleColor="#B060E0"/>
            </S.SwitchContainer>
            <div>{onOff}</div>
        </S.MainContainer>
    )
}

export default MainContainer