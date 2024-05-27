import { assets } from "../../assets/assets";
import "./AppDownload.css";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Foodi Express App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="plat-store" />
        <img src={assets.app_store} alt="app-store" />
      </div>
    </div>
  );
}

export default AppDownload;
