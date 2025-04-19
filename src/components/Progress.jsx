import { styled } from "styled-components";

const Fill = styled.div`
  height: 100%;
  width: ${({ level }) => level}%;
  background-color: ${({ color }) => color};
  box-shadow: 2px 2px 0 #000;
`;

const CircleProgress = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(
    ${({ color, level }) => `${color} 0% ${level}%, #eee ${level}% 100%`}
  );
  border: 2px solid #000;
  position: relative;
  margin: 0 auto;

  &::after {
    content: "${({ level }) => level}%";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 14px;
    color: #000;
  }
`;

const ProgressContainer = ({ className, person, type = "bar" }) => (
  <div className={className}>
    <h3>Навыки участника</h3>
    <div className="skills">
      {person.skills.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="label">
            <span className="name">{skill.name}</span>
            <span className="percent">{skill.level}%</span>
          </div>

          {type === "bar" ? (
            <div className="bar">
              <Fill level={skill.level} color={skill.color} />
            </div>
          ) : (
            <CircleProgress level={skill.level} color={skill.color} />
          )}
        </div>
      ))}
    </div>
  </div>
);

export const Progress = styled(ProgressContainer)`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fdfdfd;
  border: 2px solid #000;
  border-radius: 12px;
  font-family: "Arial", sans-serif;

  h3 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
    border-bottom: 1px solid #000;
    padding-bottom: 8px;
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .skill {
    .label {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 6px;
      color: #000;
    }

    .bar {
      width: 100%;
      height: 20px;
      background-color: #eee;
      border: 1px solid #000;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;
