import Text from "@/components/ui/atoms/text/Text";
import Title from "@/components/ui/atoms/title/Title";
import PageHeaderDTO from "@/core/view/DTO/page/header";
import HeaderImage from "./HeaderImage";

export interface HeaderContentProps extends Pick<PageHeaderDTO, "title" | "subtitle" | "content" | "image"> { }

const HeaderContent: React.FC<HeaderContentProps> = ({ title, subtitle, content, image }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      {image && (
        <HeaderImage src={image} />
      )}

      <Title size="xl" className="sm:text-2xl tracking-tight">
        {title}
      </Title>

    </div>
    {subtitle && (
      <Text size="sm" weight="semibold" transform="uppercase" variant="secondary" className="tracking-wider">
        {subtitle}
      </Text>
    )}

    {content && (
      <Text size="sm" variant="secondary">
        {content}
      </Text>
    )}
  </div>
);

export default HeaderContent;