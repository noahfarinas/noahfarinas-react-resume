export const Contact = (props) => {
    const { reach } = props;
  
    return (
      <>
        {reach.map((item) => (
            <ul>
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            </ul>
        ))}
      </>
    );
  };
  export default Contact;
  