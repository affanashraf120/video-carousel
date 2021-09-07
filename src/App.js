import CustomCarousel from "./VideoCarousel";

import "./VideoCarousel/carousel.scss";

const urls = [
  {
    url: "https://www.youtube.com/watch?v=BHACKCNDMW8",
  },
  {
    url: "https://www.youtube.com/watch?v=7jUW96CiEKA",
  },
  {
    url: "https://www.youtube.com/watch?v=YTJg8q9Q940",
  },
  {
    url: "https://www.youtube.com/watch?v=SMKPKGW083c",
  },
  {
    url: "https://www.youtube.com/watch?v=87Ohqc9Ttjc",
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
