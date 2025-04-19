import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { styled } from "styled-components";

const SocialMediaContainer = ({ className, person }) => (
  <div className={className}>
    <h3>Социальные сети:</h3>
    <div className="icons">
      {person.socials?.github && (
        <a
          href={person.socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      )}

      {person.socials?.telegram && (
        <a
          href={person.socials.telegram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={24} />
        </a>
      )}
    </div>
  </div>
);

export const SocialMedia = styled(SocialMediaContainer)`
  display: flex;

  & .icons {
    margin: 20px 10px;
  }

  & .icons a {
    color: inherit;
    margin: 0 10px 0 0;
  }
`;
