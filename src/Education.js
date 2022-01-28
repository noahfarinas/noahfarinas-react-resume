export const Education = (props) => {
    const { data } = props;
  
    console.log(props);
  
    return (
      <div className="education">
        {data.map((item) => (
          <>
            <ul>
              <li>
                <b>{item.schoolName}</b>
              </li>
              <li>{item.location}</li>
              <li>{item.time}</li>
            </ul>
          </>
        ))}
      </div>
    );
  };
  export default Education;
  