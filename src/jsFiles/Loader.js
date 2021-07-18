import Loader from "react-loader-spinner";
const LoaderComp = () => {

    return (
        <Loader
            type="ThreeDots"
            color="rgb(45, 236, 34)"
            height={70}
            width={70}
            timeout={4000}
        />
    );
}
export default LoaderComp;