import React from "react";
import "./About.css";

function About({ featured = false, children = null }) {
  return (
    <>
      <div class="Apage">
        <div id="parallax-world-of-ugg">
          <section>
            <div class="title">
              <h1>Settle Out</h1>
              <h3>Settle in with ease and spread your wings!</h3>
            </div>
          </section>

          <section>
            <div class="parallax-one">
              <h2>Newcomers to Canada</h2>
            </div>
          </section>

          <section>
            <div class="block">
              <p>
                <span class="first-character sc">C</span>anada is a country in
                North America. Its ten provinces and three territories extend
                from the Atlantic Ocean to the Pacific Ocean and northward into
                the Arctic Ocean, covering over 9.98 million square kilometres,
                making it the world's second-largest country by total area.{" "}
              </p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">
                There are currently 388,782 international students enrolled in
                higher education in Canada. Of the total 388,782 international
                students in Canada, 39.4% (153,360) are enrolled in colleges,
                and 60.5% (235,419) in universities. In the last five years, the
                number of international students had a significant increase of
                69.8%, from 228,924 to 388,782.{" "}
              </p>
            </div>
          </section>

          <section>
            <div class="parallax-two">
              <h2>Saskatchewan</h2>
            </div>
          </section>

          <section>
            <div class="block">
              <p>
                <span class="first-character ny">S</span>askatchewan is a
                Canadian province that borders with the United States of America in the south.
                Grassland covers its southern plains, and to the north are the
                rugged rocks of the Canadian Shield plateau, coniferous forests,
                rivers and lakes. Regina, the provincial capital, is home to the
                Royal Saskatchewan Museum, with exhibits on natural history and
                the people of Canada’s First Nations.
              </p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">
                The most important division of the land in Saskatchewan is
                between the northern one-third of the province, which is part of
                the Canadian Shield, and the plains, which cover the southern
                two-thirds. The Canadian Shield is an area of mostly igneous and
                metamorphic rocks of Precambrian age (about 540 million to 4
                billion years old); hence, it is often referred to as the
                Precambrian Shield. The plains comprise a wedge-shaped
                succession of sedimentary rocks, the oldest of which abut the
                shield margin while the youngest occur in the Cypress Hills in
                the southwestern portion of the province. The highest elevations
                in Saskatchewan are also found in the Cypress Hills, peaking at
                4,567 feet (1,392 metres) above sea level. These hills—the only
                part of Saskatchewan that escaped glaciation—contain unique
                plant and animal life. The lowest point in the province, 699
                feet (213 metres), is in the extreme northwest.
              </p>
            </div>
          </section>

          <section>
            <div class="parallax-three">
              <h2>SettleOut helps you everywhere</h2>
            </div>
          </section>

          <section>
            <div class="block">
              <p>
                <span class="first-character atw">T</span>he problem of
                adjustment and integration for international students moving to
                a new city or country is a significant concern. The process of
                settling into a new environment can be challenging as they must
                navigate unfamiliar cultural norms, language barriers, and
                bureaucratic procedures. Furthermore, students may face
                difficulties in finding appropriate housing, employment, and
                other essential resources, which can negatively impact their
                ability to establish a sense of security and stability. These
                challenges can lead to feelings of isolation and anxiety, which
                can negatively impact academic performance and overall
                well-being. Our project, ”SettleOut: Settle in with ease, spread
                your wings” aims to address these issues by providing support
                and resources to international students as they navigate the
                challenges of settling into a new environment. Our platform
                allows students to search for and connect with alumni and
                current students who serve as agents to provide guidance and
                support in navigating the challenges of adjusting to a new
                culture, finding housing, transportation, and other practical
                needs. Additionally, the website will provide resources and
                information to help students prepare for their move, such as
                information on visa requirements, cost of living, and cultural
                customs.
              </p>
              <p class="line-break margin-top-10"></p>
              <p class="margin-top-10">
                SettleOut is a unique and innovative platform that addresses a
                significant need for international students. With the
                development of a user-friendly website, a database of agents,
                and resources and information to assist students in their
                transition, SettleOut is poised to make a significant impact on
                the international student community.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

//   About.propTypes = {
//     featured: PropTypes.bool,
//   };

export default About;
