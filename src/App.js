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
    url: "https://www.youtube.com/watch?v=IaPi9igUngM",
    thumbnail: getDumyImageUrl("Text tunmbnail"),
  },
  {
    url: "https://www.youtube.com/watch?v=8X3zspEbuKM",
  },
  {
    url: "https://www.youtube.com/watch?v=1ztxeu4uH7o",
  },
  {
    url: "https://www.youtube.com/watch?v=mvnPBzlhdiw",
  },
  {
    url: "https://www.youtube.com/watch?v=VWwq3ZfVYd8",
  },
  {
    url: "https://www.youtube.com/watch?v=6-PJi9B74C4",
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
