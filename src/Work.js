export const Work = (props) => {
    const { trabajo } = props;
  
    console.log(props);
  
    return (
      <div className="work">
        {trabajo.map((item) => (
          <>
            <ul>
              <li>
                <b>{item.time}</b>
              </li>
              <li>{item.title}</li>
              <li>{item.company}</li>
            </ul>
          </>
        ))}
      </div>
    );
  };
  export default Work;
  