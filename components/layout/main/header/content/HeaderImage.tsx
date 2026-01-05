interface HeaderImageProps {
    src?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ src }) => (
    <img className="w-8 h-8" src={src || "https://api.dicebear.com/9.x/bottts/svg?seed=undefined"} alt={"Header Image"} />
);

export default HeaderImage;