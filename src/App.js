import ReactPlayer from "react-player";
import CustomCarousel from "./VideoCarousel";
import "./VideoCarousel/carousel.scss";

const getDumyImageUrl = (txt) => {
  const url = "https://via.placeholder.com";
  const format = ".png";
  const bg_color = "10283F";
  const txt_color = "FFFFFF";
  const size = "500";
  const character = txt.toLocaleUpperCase().charAt(0);
  return `${url}/${size}${format}/${bg_color}/${txt_color}?text=${character}`;
};

const urls = [
  {
    url: "https://www.youtube.com/watch?v=SMKPKGW083c",
  },
  {
    url: "https://www.youtube.com/watch?v=YTJg8q9Q940",
  },
  {
    url: "https://www.youtube.com/watch?v=_m4MHlQHESo",
  },
  {
    url: "https://www.youtube.com/watch?v=7jUW96CiEKA",
  },
  {
    url: "https://www.youtube.com/watch?v=JkaxUblCGz0",
  },
];

function App() {
  return (
    <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
      <div className="w-100 h-75">
        <CustomCarousel urls={urls} />
      </div>
    </div>
  );
}

export default App;
