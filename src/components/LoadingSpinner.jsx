import "./loading-spinner.css";

function LoadingSpinner(props) {
  const {
    size = "5rem",
    borderWidth = "0.5em",
    spinnerColor = "#3B487E",
    backgroundColor = "rgba(86, 86, 86, 0.1)",
    screenReaderMessage = "Loading...",
    style = {},
  } = props;

  const loaderStyle = {
    width: size,
    height: size,
    borderColor: backgroundColor,
    borderWidth,
    borderLeftColor: spinnerColor,
    ...style,
  };

  return (
    <div className="loading-spinner">
      <div
        className="loading-spinner__spinner"
        style={loaderStyle}
        aria-label={screenReaderMessage}
      />
    </div>
  );
}

export default LoadingSpinner;