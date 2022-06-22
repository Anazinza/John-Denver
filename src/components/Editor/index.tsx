import QuillWrapper from "react-quill"
import "react-quill/dist/quill.snow.css";
import * as S from "./styles"

interface PropsType {
    value?: string;
    placeholder?: string;
    readOnly?: boolean;
}

const Editor = ({ value, placeholder, readOnly }: PropsType) => {
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ["clean"],
        ],
    }

    return (
        <S.EditorContainer>
            <QuillWrapper
                readOnly={readOnly}
                modules={readOnly ? { toolbar: false } : modules}
                placeholder={placeholder}
                value={value || ""}
                theme="snow" />
        </S.EditorContainer>
    )
}

export default Editor