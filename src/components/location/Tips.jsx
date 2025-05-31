import "./l.css";
import "./tips.css";
import flight from "../../assets/flight.png";
const Location = () => {
  return (
    <div className="location_grid tip">
      <div className="location_sub">
        <div className="location_card">
          <div className="l_line bvc"></div>

          <div className="card_grid tip_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">DINNER RECOMMENDATIONS TIPS</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p ggc">
                <b>Magaya</b> – Asian fusion, relaxed vibe (Parasporos)
                <br />
                <b>Tsachpinis</b> – Traditional Greek, best spot in Naoussa
                (Naoussa –
                <br />
                reservation needed)
                <br />
                <b>Arodo</b> – Quiet, traditional fish restaurant (Parikia)
                <br />
                <b>Le Amis</b> – Modern cuisine (Port of Pounda)
                <br />
                <b>Sunset Restaurant</b> – Italian fusion (Antiparos)
                <br />
                <b>Yam</b> – Belgian-owned, laid-back (Antiparos)
                <br />
                <b>To Balcony</b> – Traditional Greek, group reservations
                recommended
                <br />
                (ask for waterside table) (Aliki)
                <br />
                <b>Taverna Klimataria</b> – Cozy and classic (Antiparos)
                <br />
                <b>Cuere Rosso</b> – Pizza lovers, this one’s for you (Parikia)
                <br />
                <b>Burger Street</b> – Small burger spot (Parikia)
                <br />
                <b>Souvlaki cravings?</b> – Try Masete (takeaway) or Pepe
                Souvlaki
                <br />
                (Parikia port)
              </p>
            </div>
          </div>
          <div className="l_line bvc"></div>
        </div>

        {/* two */}

        <div className="location_card">
          <div className="card_grid tip_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">BEACH BARS (PARIKIA - POUNDA AREA)</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p ggc">
                <b>Zazala</b> – Our favorite! Relaxed vibe, food & poofs, sunset
                parties
                <br />
                on Wed/Sun
                <br />
                <b>Cabana</b> – Stylish beach bar with music & events
                <br />
                <b>Crios Beach</b> – Newer spot with lunch & events
                <br />
                <b>Marcello Beach</b> – Peaceful beach with rentable beds
                <br />
                <b>Laris Beach Bar</b> – Cheap, traditional vibe
                <br />
              </p>
            </div>
          </div>
          <div className="l_line bvc"></div>
        </div>

        {/* third */}

        <div className="location_card">
          <div className="card_grid tip_grid">
            <div className="card_sub_l">
              <h2 className="ll_title">BARS & NIGHTLIFE</h2>
            </div>
            <div className="card_sub_l">
              <p className="ll_p ggc">
                Antiparos(quieter in off-season, butstill charming)
                <ul className="lic">
                  <li>
                    <b>Boogaloo</b> – Great for drinks on the main square
                  </li>
                  <li>
                    <b>Tabula Rasa</b> – Cocktails
                  </li>
                  <li>
                    <b>Timemarine</b> – Party spot (check Instagram!)
                  </li>
                  <li>
                    <b>Sunset</b> – As the name says…
                  </li>
                  <li>
                    <b>Smile</b> – Rooftop vibes
                  </li>
                  <li>
                    <b>Lime Bar</b> – Dance floor with commercial music
                  </li>
                </ul>
              </p>
              <br />

              <p className="ll_p ggc">
                Naoussa (still lively in September)
                <ul className="lic">
                  <li>
                    <b>Agosta</b> – Beautiful setting, dancing from 11 PM
                  </li>
                  <li>
                    <b>Sousouro</b> – Intimate & affordable cocktails
                  </li>
                  <li>
                    <b>Kosmos</b> – Dance bar
                  </li>
                  <li>
                    <b>Linardo</b> – Late-night club from 2 AM
                  </li>
                </ul>
              </p>

              <br />

              <p className="ll_p ggc">
                Parikia
                <ul className="lic">
                  <li>
                    <b>Zazala</b> – Sunset drinks
                  </li>
                  <li>
                    La Diablita, Pirate Bar, Bebop (rooftop), Dubliner (young
                    crowd/club vibe)
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="l_line bvc"></div>
        </div>

        {/* fourth */}
      </div>

      <div className="location_sub ">
        <p className="l_title hh">TIPS</p>
      </div>
    </div>
  );
};

export default Location;
