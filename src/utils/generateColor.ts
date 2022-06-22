export const generateColor = () => {
    const colors = [
        "#FF%s8C",
        "#FF8C%s",
        "#%sFF8C",
        "#%s8CFF",
        "#8CFF%s",
        "#8C%sFF",
    ]

    const index = Math.floor(Math.random() * (colors.length - 1))
    const color = colors[index]
    const hexCode = Math.floor(Math.random() * 255)
        .toString(16)
        .padStart(2, '0')

    return color.replaceAll("%s", hexCode)
}