import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconDefinition,
  url: string,
  label: string,
}

const IconLink: FC<Props> =({ icon, url, label }) => {

  return (
    <a
      href={url}
      title={label}
      target="_blank"
      style={{display: 'inline'}}
      className="mx-4"
    >
      <FontAwesomeIcon icon={icon} className="fa-2xl" />
    </a>
  );
}

export default IconLink;
