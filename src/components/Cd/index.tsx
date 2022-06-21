import * as S from "./styled"

import { useEffect, useState } from "react";

interface PropsType {
    created_at: string;
    backgroundColor: string;
}

const Cd = ({ created_at, backgroundColor }: PropsType) => {
    const [click, setClick] = useState<boolean>(false)

    useEffect(() => {
        setClick(false)
    }, [])

    return (
        <S.CdContainer>
            <S.Cd
                backgroundColor={backgroundColor}
                onClick={() => setClick(true)}
                click={click}>
                {created_at}
            </S.Cd>
        </S.CdContainer>
    )
}

export default Cd;