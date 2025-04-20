import { styled } from "styled-components";

const MembersRoleContainer = ({ className, person }) => (
  <div className={className}>
    <div className="info">
      <h3>Чем занимался в проекте:</h3>
      <p className="did">{person.did}</p>
    </div>

    <div className="roles">
      {person.roles?.map((role, index) => (
        <div className="role" key={index}>
          {role}
        </div>
      ))}
    </div>
  </div>
);

export const MembersRole = styled(MembersRoleContainer)`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;

  .info {
    text-align: center;
    margin-bottom: 20px;

    h3 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #000;
      padding-bottom: 8px;
    }

    .did {
      margin-top: 12px;
      font-size: 18px;
      color: #333;
    }
  }

  .roles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .role {
    padding: 8px 16px;
    border: 1px solid #000;
    border-radius: 8px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 2px 2px 0 #000;
    transition: all 0.2s ease;

    &:hover {
      background-color: #000;
      color: #fff;
      box-shadow: none;
      cursor: default;
    }
  }
`;
