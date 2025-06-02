const Location = () => {
  return (
    <div
      className="location_grid gift"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="location_sub">
        <p className="l_title"> Gift Suggestion</p>

        <img
          src="https://i.imgur.com/UVwDt2S.png"
          alt="flightimage"
          className="p_img"
        />
      </div>
      <div className="location_sub">
        <div className="l_line"></div>

        {/* fourth */}
        <div className="location_card">
          <div className="card_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">
                If you feel inclined to give, here’s how.
              </h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p">
                Your presence is the best gift, but if you'd like to contribute
                to our future together, here's our bank account information:
                <br />
                <br />
                <b>BE29 0015 1914 2864</b>
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
