import CustomCarousel from "./VideoCarousel";

import "./VideoCarousel/carousel.scss";

const urls = [
  {
    url: "https://www.youtube.com/watch?v=mvnPBzlhdiw",
    thumbnail: "https://via.placeholder.com/350x150",
  },
  {
    url: "https://www.youtube.com/watch?v=1ztxeu4uH7o",
    thumbnail: "https://via.placeholder.com/350x150",
  },
  {
    url: "https://www.youtube.com/watch?v=6-PJi9B74C4",
    thumbnail: "https://via.placeholder.com/350x150",
  },
  {
    url: "https://www.youtube.com/watch?v=IaPi9igUngM",
    thumbnail: "https://via.placeholder.com/350x150",
  },
  {
    url: "https://www.youtube.com/watch?v=VWwq3ZfVYd8",
    thumbnail: "https://via.placeholder.com/350x150",
  },
];

function App() {
  return (
    <div className="d-flex vw-100 vh-100 justify-content-center align-items-center">
      <div className="w-100 h-75 ">
        <CustomCarousel urls={urls} />
      </div>
    </div>
  );
}

export default App;
