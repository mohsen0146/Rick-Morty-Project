import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return <h3 className="loader">
    <span>Loading Data...   </span>
  <RotatingLines
  visible={true}
  height="30"
  width="30"
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></h3>;
}

export default Loader;
