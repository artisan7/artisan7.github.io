import { FC } from "react";
import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition | string,
  url: string,
  label: string,
  custom?: boolean,
}

const IconLink: FC<Props> =({ icon, url, label, custom }) => {

  return (
    <a
      href={url}
      title={label}
      target="_blank"
      style={{display: 'inline'}}
      className="mx-4"
    >
      {
        custom ?
        <img src={icon as unknown as string} alt={label} className="h-8" style={{ verticalAlign: "-0.3125em", lineHeight: "0.03125em", display: "inline" }} />
        : <FontAwesomeIcon icon={icon as unknown as IconDefinition} className="fa-2xl" />
      }
    </a>
  );
}

IconLink.defaultProps = {
  custom: false,
}

export default IconLink;
