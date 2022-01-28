import Subtitle from "./Subtitle";

export const Header = (props) => {
  return (
    <div className="head">
      <>
        <h1>{props.headline}</h1>
        <Subtitle SUB={props.newprop} />
      </>
    </div>
  );
};

export default Header;
