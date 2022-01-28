export const About = (props) => {
    return (
      <div className="about">
        <>
          <h1>{props.me[0]}</h1>
          <p>{props.me[1]}</p>
        </>
      </div>
    );
  };
  
  export default About;
  