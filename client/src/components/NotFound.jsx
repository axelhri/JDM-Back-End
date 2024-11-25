import errorImage from "../images/404.jpg";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", display: "gird", placeItems: "center" }}>
      <img src={errorImage} alt="" style={{ blockSize: "60vh" }} />
      <p style={{ fontSize: "2em" }}>Cette page n&apos;existe pas.</p>
      <a href="/" style={{ textDecoration: "underline", color: "blue" }}>
        Revenir a l&apos;accueil
      </a>
    </div>
  );
};

export default NotFound;
