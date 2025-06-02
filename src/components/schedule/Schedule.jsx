import "./c.css";

const Schedule = () => {
  return (
    <div className="schedule_container">
      <h2 className="schedule_title">Schedule</h2>

      <div className="schedule_flex">
        <div className="schedule_sm cd"></div>
        {/* <div className="schedule_sm line"></div> */}
        <div className="schedule_sm ">
          <div className="circle"></div>
          <div className="schedule_card">
            <div className="s_sm">
              <h2 className="sm_title">DAY BEFORE THE WEDDING</h2>
              <p className="sm_main_tile">
                WELCOME DRINKS @
                <a
                  style={{ color: "#fff" }}
                  target="_blank"
                  href="https://www.google.com/maps/place/Sunset/@37.0436135,25.0763161,610m/data=!3m2!1e3!4b1!4m11!3m10!1s0x1498659fb9e32c55:0x5330f2516d9b435!5m4!1s2025-06-15!2i3!4m1!1i2!8m2!3d37.0436135!4d25.0763161!16s%2Fg%2F11fmz059ys!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
                >
                  SUNSET BAR, ANTIPAROS
                </a>
                , 6:30PM
              </p>
              {/* <h3 className="sm_s_title">Getting There</h3> */}
              <p className="other_p">
                Take the ferry from the port of Pounda (not Parikia). No need to
                book in advance - just arrive about 5 minutes early. The ride
                takes just 5 minutes. Once you arrive, enjoy a 10-minute walk
                through Antiparos’ charming main street to reach Sunset Bar.
                <br />
                <a
                  style={{ color: "#fff" }}
                  target="_blank"
                  href="https://antiparos-ferries.com/en/timetable/"
                >
                  Ferry Schedule
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ttwo */}
      <div className="schedule_flex two">
        <div className="schedule_sm bh">
          <div className="circle2"></div>

          <div className="schedule_card bhh">
            {/* <div className="circle"></div> */}
            <div className="s_sm">
              <h2 className="sm_title fcc">DAY OF THE WEDDING</h2>
              <p className=" fcc">WEDDING DAY, 4:00 PM</p>
              <p className=" gh_p">
                The celebration begins at 4:00 PM at
                <a
                  href="https://www.google.com/maps/place/data=!4m2!3m1!1s0x1498704bd873f0c5:0xb7647df1ff5b915c?sa=X&ved=1t:8290&ictx=111"
                  style={{ color: "#fff", margin: "0px 3px" }}
                  target="_blank"
                >
                  <b>Villa Aethra,</b>
                </a>
                where everything will take place. We’ll start with the ceremony,
                followed by a reception, dinner and of course, we’ll end with a
                party
              </p>
            </div>
          </div>
        </div>
        {/* <div className="schedule_sm line"></div> */}

           <div className="schedule_sm cd"></div>

      </div>

      {/* three */}

      <div className="schedule_flex">
         <div className="schedule_sm cd"></div>

        {/* <div className="schedule_sm line"></div> */}
        <div className="schedule_sm">
          <div className="circle"></div>

          <div className="schedule_card">
            <div className="s_sm">
              <h2 className="sm_title">THE DAY AFTER</h2>
              <p className="sm_main_tile">POOLSIDE APERO PARTY, 3:00 PM</p>
              <p className="other_p">
                We’re not done just yet.
                <br />
                Join us back at Villa Aethra for a relaxed Poolside Apero Party
                starting from 3 PM, with drinks, dips, and good vibes.
                Sunglasses, swimsuits, and stories from the night before
                encouraged!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
