const GameCard = ({
    name,
    href,
    image,
    className = ''
}: {
    name: string,
    href: string,
    image: string,
    className?: string
}) => {
    return (
        <a
            href={href}
            className={`inline-block relative bg-center bg-cover rounded-lg transform transition duration-150 hover:scale-110 group ${className}`}
            style={{
                backgroundImage: `url(${image})`
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