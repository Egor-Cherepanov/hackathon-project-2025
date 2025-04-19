import { SocialMedia } from "./social-media/social-media";
import { styled } from "styled-components";

const AboutMemberContainer = ({ className, person }) => (
  <div className={className}>
    <div className="profile">
      <img src={person.photo} alt={`${person.firstName} ${person.lastName}`} />
      <div className="info">
        <h2>
          {person.firstName} {person.lastName}
        </h2>
        <div className="info-text">
          <div className="info-age">Возраст: {person.age} лет</div>
          <div className="info-about">О себе: {person.about}</div>
        </div>
        <SocialMedia person={person} />
      </div>
    </div>
  </div>
);

export const AboutMember = styled(AboutMemberContainer)`
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;

  .profile {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    border-bottom: 1px solid #000;
    padding-bottom: 20px;
  }

  .profile img {
    width: 200px;
    height: 250px;
    object-fit: cover;
    border: 2px solid #000;
    border-radius: 8px;
    box-shadow: 4px 4px 0 #000;
  }

  .info {
    flex: 1;
    min-width: 250px;
  }

  .info h2 {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: bold;
  }

  .info-text {
    font-size: 18px;
    color: #333;
  }

  .info-age {
    margin-bottom: 8px;
  }

  .info-about {
    margin-top: 12px;
  }
`;
