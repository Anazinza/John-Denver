import { useRecoilValue } from "recoil"
import { jungState } from "../../utils/recoil"

const ReadContainer = () => {
    const jung = useRecoilValue(jungState)

    return (
        <div>
            <div>{jung.title}</div>
            <div>{jung.emotion}</div>
            <div>{jung.content}</div>
        </div>
    )
}

export default ReadContainer;