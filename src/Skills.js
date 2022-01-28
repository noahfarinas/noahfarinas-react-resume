export const Skill = (props) => {
  const { attribute } = props;

let currentSkill = null;

let SKILLS = attribute.map((item) => {
let types = [];
if (currentSkill !== item.type)  {
  currentSkill = item.type;
  types.push(<h2>{item.type}</h2>)
}


  types.push (
        <>
          <ul>
            <li>{item.data}</li>
          </ul>
        </>
  );
  return types;
      });
  return SKILLS;
    };
export default Skill 