import Avatar from "@/atoms/avatar/Avatar";
import Text from "@/atoms/text/Text";
import Title from "@/atoms/title/Title";
import PageHeaderDTO from "@/presentation/view/dto/main/header";

export interface HeaderContentProps extends Pick<PageHeaderDTO, "title" | "subtitle" | "content" | "image"> { }

const HeaderContent: React.FC<HeaderContentProps> = ({ title, subtitle, content, image }) => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      {image && (
        <Avatar src={image} size="xl" rounded="none" />
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