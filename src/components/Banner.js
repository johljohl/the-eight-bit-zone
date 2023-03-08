import bannerimg1 from "../image/banner.png";
import bannerimg2 from "../image/banner2.png";
import bannerimg3 from "../image/banner3.png";
import bannerimg4 from "../image/banner4.png";

function Banner() {
  return (
    <div className="banners">
      <div className="banner1">
        <img src={bannerimg1} alt="Banner 1" />
      </div>
      <div className="banner1">
        <img src={bannerimg2} alt="Banner 1" />
      </div>
      <div className="banner1">
        <img src={bannerimg4} alt="Banner 1" />
      </div>
      <div className="banner1">
        <img src={bannerimg3} alt="Banner 1" />
      </div>
    </div>
  );
}

export default Banner;
