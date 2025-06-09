import "./l.css";
import { Modal } from "antd";
import { useState } from "react";
import travelPdf from "../../assets/travel.pdf"; // Make sure the path is correct

const Location = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = travelPdf;
    link.download = "travel-info.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="location_grid">
      <div className="location_sub">
        <p className="l_title">Location & Travel Info</p>

        <img
          src="https://i.imgur.com/Sws8lXR.png"
          alt="flightimage"
          className="p_img"
        />
      </div>
      <div className="location_sub">
        <div className="location_card">
          <div className="l_line"></div>

          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">LOCATION</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Villa Aethra
                <br />
                Petaloudes- Agios Arsenios
                <br />
                Paros 84400
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>

        {/* two */}

        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">HOW TO GET TO PAROS</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Paros doesn't have an international airport, but you have
                several good optionsto reach us. You can take a ferry from
                Athens, fly domestically from Athens, or connect through nearby
                islands. Check
                <a
                  href="#"
                  style={{ margin: "0px 3px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    showModal();
                  }}
                >
                  here
                </a>
                for detailed transportation information.
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>

        {/* third */}

        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">WHERE TO STAY</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                We recommend staying in either Parikia or Aliki. These charming
                areas are both just a 10- minute drive from our wedding venue in
                Pounda. Need accommodation suggestions? Find helpful
                recommendations{" "}
                <a
                  href="#"
                  style={{ margin: "0px 1px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    showModal();
                  }}
                >
                  here.
                </a>
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>

        {/* fourth */}
        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">GETTING AROUND</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                You can easily get around by scooter, car, or taxi during
                yourstay. Let us know your preference 1- 2 months before
                arrival, and we'll help arrange
                <a
                  href="#"
                  style={{ margin: "0px 5px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    showModal();
                  }}
                >
                  rentals through
                </a>
                our trusted local agencies.
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>
      </div>

      <Modal
        title="Travel Information"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <button style={{background:"#000",color:"#fff",padding:"10px 20px",border:"none",cursor:"pointer"}} key="download" onClick={handleDownload} className="ant-btn ant-btn-primary">
            Download PDF
          </button>,
          <button style={{background:"#fff",color:"#000",padding:"10px 20px",border:"1px solid #333",cursor:"pointer"}} key="close" onClick={handleCancel} className="ant-btn">
            Close
          </button>,
        ]}
        width="100%"
        style={{ top: 20 }}
      >
        <div style={{ height: "70vh" }}>
          <iframe
            src={travelPdf}
            width="100%"
            height="100%"
            title="Travel Information PDF"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Location;