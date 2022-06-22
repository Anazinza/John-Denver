import styled from "@emotion/styled";

export const EditorContainer = styled.div`
    .ql-editor {
        min-height: 200px;
        font-size: 21px;

        &::placeholder {
            color: white;
        }
    }

    .ql-container {
        background-color: #333333;
        border: none;
        border-bottom: 1px solid black;
    }

    .ql-toolbar {
        background: #333333;
        border: none;
        border-bottom: 1px solid black;
  /* border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em; */
}

`