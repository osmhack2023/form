import React from 'react'
import "./style.css"
import schedule from "./img2/schedule.png"
import prize from "./img2/prizes.png"
import osaclogo from "./img2/osac-official-logo.png"
import hotm from "./img2/HOT_OMH_Asia_Pacific_Logo_COLOUR.png"
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <section class="hero-container">
      <h1 class="title">OSMHack-2023</h1>
      <h2 class="motto">OSM FOR A Good cause</h2>
      <div class="hero-details">
        <h3 class="deadline">May 28</h3>
        <h3 class="date">June 6 and 7</h3>
      </div>
    </section>


    <section class="description-section">
      <div class="description wid720">
        <p class="description-text-one">
          OSMHack-2023 is an event for students in tech to unleash your
          creativity to build impactful solutions! This hackathon brings
          together students to harness the potential of OpenStreetMap (OSM) and
          create products that address social and environmental challenges.
        </p>
        <p class="description-text-two">
          Teams will work collaboratively, utilizing tools and geospatial data
          around OpenStreetMap to develop innovative solutions in areas like
          disaster response, community development, accessibility, and
          environmental sustainability. Mentorship from industry experts will
          guide participants throughout the event, providing valuable insights
          and refining their ideas.
        </p>
        <p class="description-text-three">
          At the end of the hackathon, projects will be judged based on their
          impact, creativity, and technical implementation, with prizes awarded
          to the most innovative and impactful solutions. Don't miss this
          opportunity to use OSM for a good cause and make a positive difference
          in the world. Join us and be part of the movement for change!
        </p>
      </div>
      <Link to="/redirect"><p className="bg-btn  text-xl w-max">Register Now</p></Link>
    </section>


    <section class="schedule">
      <img src={schedule} alt="schedule of event" />
    </section>


    <section class="prize">
      <img src={prize} alt="images of prize pool" />
    </section>


    <section class="organizers">
      <h2 class="organizer-text">organizers</h2>
      <img src={osaclogo} alt="logo of OSAC" />
    </section>


    <section class="sponsors">
      <h2 class="sponsor-heading heading">Sponsored by</h2>
      <img
        src={hotm}
        height="250px"
        alt="logo of Open Mapping Hub-AP"
      />
    </section>


    <section class="supporters">
      <h2 class="supporter-heading heading">Supporting organizations</h2>
      <img
        src="https://www.hotosm.org/images/hot-logo.svg"
        height="100px"
        alt="logo of HOTM"
      />
      <img
        src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/279025853_105987332097536_3436583739183021354_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VrpCatJvwsAAX80rdYl&_nc_ht=scontent.fktm10-1.fna&oh=00_AfBrnSlAymGASPfonxfTnGijqlOJUmaEOjdf3rZtup-RnA&oe=646F2BD1"
        alt="logo of OTC"
        height="150px"
      />
    </section>


    <section class="footer">
      <div class="left">
        <h2>OSMHack</h2>
        <p>
          A platform for encouraging tech students in universities and colleges
          to build a product/solutions using OpenStreetMap with a motto "OSM for
          a good cause".
        </p>
      </div>
      <div class="right">
        <h2>Contact Us</h2>
        <a
          href="https://www.facebook.com/profile.php?id=100092362080835"
          target="_blank"
          rel='noreferrer'
          ><p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              /></svg
            >OSAC: It Club of Amrit Science Campus ASCOL
          </p>
        </a>

        <a
          href="https://www.linkedin.com/company/open-source-ascol-circle-osac/"
          target="_blank"
          rel='noreferrer'
          ><p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              /></svg
            >Open Source ASCOL Circle(OSAC)
          </p>
        </a>

        <div class="web-and-yt">
          <a href="osac.org.np" target="_blank">
            <p><span class="icon">🌐 </span>osac.org.np</p>
          </a>
          <a href="https://www.youtube.com/@osacascol" target="_blank" rel='noreferrer'>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                /></svg
              >OSAC ASCOL
            </p>
          </a>
        </div>

        <a href="mailto:osac2gether@gmail.com">
          <p><span class="icon">✉️ </span>osac2gether@gmail.com</p>
        </a>

        <div class="tel">
          <a href="tel:+9779869938356"><p>📞 9869938356</p></a>
          <a href="tel:+9779814285622">9814285622</a>
        </div>
      </div>
    </section>
    </div>
  )
}
