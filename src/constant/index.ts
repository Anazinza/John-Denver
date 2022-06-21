export const Jungs = [
    {
        id: 1,
        title: "title1",
        emotion: "emotion1",
        content: "content1"
    },
    {
        id: 2,
        title: "title2",
        emotion: "emotion2",
        content: "content2"
    },
    {
        id: 3,
        title: "title3",
        emotion: "emotion3",
        content: "content3"
    },
    {
        id: 4,
        title: "title4",
        emotion: "emotion4",
        content: "content4"
    },
    {
        id: 5,
        title: "title5",
        emotion: "emotion5",
        content: "content5"
    },
    {
        id: 6,
        title: "title6",
        emotion: "emotion6",
        content: "content6"
    },
]

export const Dates = Array.from(new Array(5).keys()).map(value => (
        {
            id: value,
            created_at: `2022-02-${value < 9 ? `0${value+1}` : value+1}`
        }
    )
) 