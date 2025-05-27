const GameCard = ({
    name,
    href,
    image,
    width = 104,
    height = 104
}: {
    name: string,
    href: string,
    image: string,
    width?: number,
    height?: number
}) => {
    return (
        <a
            href={href}
            className="inline-block relative bg-center bg-cover rounded-lg transform transition duration-150 hover:scale-110 group"
            style={{
                backgroundImage: `url(${image})`,
                width: `${width}px`,
                height: `${height}px`
            }}
        >
            <div className="absolute flex justify-center opacity-0 group-hover:opacity-100 items-center w-full bottom-0 bg-gradient-to-t rounded-lg to-transparent">
                <span
                    className="leading-4 w-full text-sm text-center mb-1 text-white font-cartoon font-bold break-words"
                    style={{ textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}
                >
                    {name}
                </span>
            </div>
        </a>
    )
}

export default GameCard;