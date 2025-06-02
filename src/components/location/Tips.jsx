import { FaUtensils, FaCocktail, FaUmbrellaBeach, FaLightbulb } from "react-icons/fa";
import "./tips.css";

const Tips = () => {
  return (
    <div className="tips-container">
      <div className="tips-header">
        <FaLightbulb className="tips-icon" />
        <h2 className="hh">TIPS</h2>
      </div>

      <div className="tips-grid">
        {/* Dinner Recommendations */}
        <div className="tip-card">
          <div className="tip-card-header">
            <FaUtensils className="category-icon" />
            <h3 className="ll_title">DINNER RECOMMENDATIONS</h3>
          </div>
          <div className="tip-card-content">
            <ul className="recommendation-list">
              <li className="ll_p"><strong>Magaya</strong> – Asian fusion, relaxed vibe (Parasporos)</li>
              <li className="ll_p"><strong>Tsachpinis</strong> – Traditional Greek, best spot in Naoussa (reservation needed)</li>
              <li className="ll_p"><strong>Arodo</strong> – Quiet, traditional fish restaurant (Parikia)</li>
              <li className="ll_p"><strong>Le Amis</strong> – Modern cuisine (Port of Pounda)</li>
              <li className="ll_p"><strong>Sunset Restaurant</strong> – Italian fusion (Antiparos)</li>
              <li className="ll_p"><strong>Yam</strong> – Belgian-owned, laid-back (Antiparos)</li>
              <li className="ll_p"><strong>To Balcony</strong> – Traditional Greek, group reservations recommended (Aliki)</li>
              <li className="ll_p"><strong>Taverna Klimataria</strong> – Cozy and classic (Antiparos)</li>
              <li className="ll_p"><strong>Cuere Rosso</strong> – Pizza lovers (Parikia)</li>
              <li className="ll_p"><strong>Burger Street</strong> – Small burger spot (Parikia)</li>
              <li className="ll_p"><strong>Souvlaki cravings?</strong> – Try Masete or Pepe Souvlaki (Parikia port)</li>
            </ul>
          </div>
        </div>

        {/* Beach Bars */}
        <div className="tip-card">
          <div className="tip-card-header">
            <FaUmbrellaBeach className="category-icon" />
            <h3 className="ll_title">BEACH BARS</h3>
            <div className="subtitle">(PARIKIA - POUNDA AREA)</div>
          </div>
          <div className="tip-card-content">
            <ul className="recommendation-list">
              <li className="ll_p"><strong>Zazala</strong> – Our favorite! Relaxed vibe, sunset parties Wed/Sun</li>
              <li className="ll_p"><strong>Cabana</strong> – Stylish beach bar with music & events</li>
              <li className="ll_p"><strong>Crios Beach</strong> – Newer spot with lunch & events</li>
              <li className="ll_p"><strong>Marcello Beach</strong> – Peaceful beach with rentable beds</li>
              <li className="ll_p"><strong>Laris Beach Bar</strong> – Cheap, traditional vibe</li>
            </ul>
          </div>
        </div>

        {/* Bars & Nightlife */}
        <div className="tip-card">
          <div className="tip-card-header">
            <FaCocktail className="category-icon" />
            <h3 className="ll_title">BARS & NIGHTLIFE</h3>
          </div>
          <div className="tip-card-content">
            <div className="location-section">
              <h4 className="ll_p">Antiparos</h4>
              <div className="location-subtitle ll_title">(quieter in off-season, but still charming)</div>
              <ul className="recommendation-list">
                <li className="ll_p"><strong>Boogaloo</strong> – Great for drinks on the main square</li>
                <li className="ll_p"><strong>Tabula Rasa</strong> – Cocktails</li>
                <li className="ll_p"><strong>Timemarine</strong> – Party spot (check Instagram!)</li>
                <li className="ll_p"><strong>Sunset</strong> – As the name says…</li>
                <li className="ll_p"><strong>Smile</strong> – Rooftop vibes</li>
                <li className="ll_p"><strong>Lime Bar</strong> – Dance floor with commercial music</li>
              </ul>
            </div>

            <div className="location-section">
              <h4 className="ll_p">Naoussa</h4>
              <div className="location-subtitle">(still lively in September)</div>
              <ul className="recommendation-list">
                <li className="ll_p"><strong>Agosta</strong> – Beautiful setting, dancing from 11 PM</li>
                <li className="ll_p"><strong>Sousouro</strong> – Intimate & affordable cocktails</li>
                <li className="ll_p"><strong>Kosmos</strong> – Dance bar</li>
                <li className="ll_p"><strong>Linardo</strong> – Late-night club from 2 AM</li>
              </ul>
            </div>

            <div className="location-section">
              <h4 className="ll_p">Parikia</h4>
              <ul className="recommendation-list">
                <li className="ll_p"><strong>Zazala</strong> – Sunset drinks</li>
                <li className="ll_p"><strong>La Diablita, Pirate Bar, Bebop, Dubliner</strong> – Young crowd/club vibe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;