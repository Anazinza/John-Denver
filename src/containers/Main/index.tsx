import { useState } from "react";
import Switch from "react-switch";
import * as S from "./styles"
import { MdKeyboardArrowUp } from "react-icons/md";

import { Jungs } from "../../constant";
import Jung from "../../components/Jung";

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
                    <S.OnContainer>
                        <S.JungsContainer>
                            {Jungs.map((jung) => (
                                <Jung
                                    key={jung.id}
                                    id={jung.id}
                                    title={jung.title}
                                    emotion={jung.emotion}
                                    content={jung.content} />
                            ))}
                        </S.JungsContainer>
                    </S.OnContainer>
                    :
                    <S.OffContainer>
                        <S.Inner>
                            <MdKeyboardArrowUp
                                size={50} />
                            <S.Text>스위치를 키고 감정을 봐요</S.Text>
                        </S.Inner>
                    </S.OffContainer>}
            </S.Outer>
            <S.RangeContainer>
                <S.Range type="range" />
            </S.RangeContainer>
        </S.MainContainer>
    )
}

export default MainContainer