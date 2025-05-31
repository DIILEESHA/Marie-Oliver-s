import "./l.css";
const Location = () => {
  return (
    <div className="location_grid">
      <div className="location_sub">
        <p className="l_title">Location & Travel Info</p>

        <img src="https://i.imgur.com/Sws8lXR.png" alt="flightimage" className="p_img" />
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
                islands. Check here for detailed transportation information.
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
                recommendations here.
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
                arrival, and we'll help arrange rentalsthrough our trusted local
                agencies.
              </p>
            </div>
          </div>
          <div className="l_line"></div>
        </div>
      </div>
    </div>
  );
};

export default Location;
