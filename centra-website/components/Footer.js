import React, { useState } from "react";
import styles from "./Footer.module.scss";

//Cookie Policy Pop up
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export default function Footer(props) {
  const runMarketoScript = () => {
    if (getCookieConsentValue()) {
      var didInit = false;
      function initMunchkin() {
        if (didInit === false) {
          didInit = true;
          Munchkin.init("748-KKO-677");
        }
      }
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "//munchkin.marketo.net/munchkin.js";
      s.onreadystatechange = function () {
        if (this.readyState == "complete" || this.readyState == "loaded") {
          initMunchkin();
        }
      };
      s.onload = initMunchkin;
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };

  //footer expansion on click for mobile
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);
  const [faq9, setFaq9] = useState(false);
  const [faq10, setFaq10] = useState(false);
  const [faq11, setFaq11] = useState(false);
  const [faq12, setFaq12] = useState(false);
  const [faq13, setFaq13] = useState(false);
  const [faq14, setFaq14] = useState(false);
  const [faq15, setFaq15] = useState(false);
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        style={{
          background: "rgb(14 58 103)",
          borderTop: "3px solid #F2FF56",
          padding: "20px",
        }}
        buttonStyle={{
          background: `rgb(193 42 42 / 0%)`,
          border: `2px solid #F2FF56!important`,
          borderRadius: `0px`,
          boxShadow: `none`,
          color: `#F2FF56`,
        }}
        buttonClasses="acceptButton"
        declineButtonClasses="declineButton"
        expires={150}
        onAccept={() => runMarketoScript()}
      >
        We use cookies to improve your experience on our website and to show you
        relevant products and advertising. To find out more please refer to our
        <a
          href="/privacy-policy"
          style={{
            color: "#F2FF56",
            textDecoration: "underline",
            padding: "0px 5px 0px 5px",
          }}
        >
          Privacy Policy.
        </a>
      </CookieConsent>
      <div>
        <footer className={styles.footerContainer}>
          <div className={styles.footerTitleContainer}>
            <h2 className={styles.footerTitle}>FAQ</h2>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq1((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Why is Centra so excited about the purchase of Supreme Windows &
              Doors?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq1
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq1
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                At Centra we are in the people business, and for the last 20
                years we have known and respected Supreme Windows for having
                fantastic people that are dedicated to excellent products and
                services. Centra and Supreme have a similar business model and
                we both know windows and installations very well. Our purpose is
                to expand the Employee Ownership group and make more communities
                a better place by giving back. Alberta & Supreme Windows
                represent an entirely new province for Centra, with a new
                opportunity to have more Employee Owners’ families supported and
                to expand the Giving programs of our charitable foundation.
                <br />
                <br />
                Centra exists for the purpose of bringing opportunity for
                ownership to construction and manufacturing-related employees.
                We believe you should be given a chance to invest in yourself
                and each other through Employee Ownership. This is a very rare
                opportunity as the majority of companies are owned by either a
                single family or a large private equity group. Our role is to
                provide the opportunity of Employee Ownership, and then it is up
                to each family to decide if they wish to participate in this
                voluntary program. We currently have an 85% participation rate
                with 375 employees, and those that are Employee Owners have
                benefited greatly. The program has helped families retire with a
                great nest egg, it has helped them buy homes, it has helped put
                kids through university, it has helped support families when
                they encounter the life’s curveballs, and so much more. There
                are many examples we will share. The future of your family is
                important to you, and therefore it is important to us. As a
                general philosophy, if a company takes care of its people, its
                people will take care of the customers, and the customers will
                ensure that the company achieves great results. We will work
                very hard for each of you, we will be transparent, and we will
                frequently communicate to ensure that all Supreme and Centra
                teams are aligned with a common purpose.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq2((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              What does the combined business look like?{" "}
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq2
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq2
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                The team at Centra has a very unique culture and one of the
                primary reasons that we were interested in Supreme was because
                of the alignment and synergies that already exist. Centra
                currently has 4 locations and we are excited to add the Supreme
                team as our 5th location and 2nd manufacturing facility. All
                teams can help each other and each group will now have more
                peers to work with and learn from. Check out the{" "}
                <a href="https://www.centra.ca/careers">
                  careers page on our website
                </a>{" "}
                to get a feel for what it is like to be a part of the Centra
                team. We have invested a lot into our support departments such
                as People & Culture, Marketing, Customer Care, Engineering and
                IT. We hope to use these teams to continue to build on the
                strong foundation and legacy that is Supreme Windows. We welcome
                you into our family, and over the next couple of months as we
                align and get to know each other we hope we can show you the
                value we will bring to your team.
                <br /> <br /> Centra is currently the leading window
                installation company across BC and Supreme has a very strong
                position in Alberta. Combined, the Centra Group will now be the
                largest window installation company in Western Canada and one of
                the largest in Canada. Together we will look to have controlled
                and continual growth in Calgary and the wider province to become
                the leading installation company in Alberta as well.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq3((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              What do I need to do differently starting today?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq3
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq3
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                Today we hope that you continue to carry on your work with
                pride, be curious, and ask questions while getting to know us.
                We’re certainly very excited to get to know you! We understand
                that change can be hard and that it will take some time to
                implement the resources and support necessary to follow the new
                programs and systems. We will provide you with a different
                ownership structure, but your day-to-day duties will remain the
                same. When any change does happen, we will ensure you have the
                support and resources you need to make it as smooth as possible.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq4((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Who’s in charge? What does leadership look like now?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq4
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq4
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                The Centra and Supreme management teams will be coming together.
                As the primary ownership group Centra leadership will be in
                charge, and we will all be led by our CEO Garett Wall. Garett
                and many other leaders of Centra will be working very closely
                with the Supreme leaders to support and grow together.
                Leadership at Centra is collaborative and supportive. We believe
                in transparency and welcome the Supreme team with open arms.{" "}
              </p>
            </div>
          </div>
          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq5((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Will Supreme’s culture change?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq5
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq5
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                Supreme has a unique culture which we have a great appreciation
                for. You care strongly about your work environment and peers.
                This is something Centra also highly values. We don’t want to
                change your culture, we want to hear your stories about what
                makes it so unique. Please feel free to submit your Supreme
                story for our first 10 minute listening session and be in with
                the chance of winning a prize! <br /> <br />
                At Centra we pride ourselves on our FERST values: Family,
                Entrepreneurial Spirit, Respect, Safety, and Teamwork. You’re
                part of that family now. Our goal is not to detract from the
                things that make you and Supreme so special, it’s to add to
                them. We’ve been awarded as{" "}
                <strong>Canada’s Most Admired Corporate Culture </strong>as well
                as one of <strong>Canada’s Best Managed Companies</strong>, and
                you can now reap the benefits of that.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq6((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Will we still be Supreme or will our name change to Centra?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq6
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq6
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                We see so much value in the Supreme brand and the strong
                reputation that has been built over the last 50 years. The brand
                is not the name; it is the people. That is the most critical
                element we will be focussing on. We will all be working together
                to become the #1 installation and manufacturing company in
                Western Canada!
                <br />
                <br /> There are also companies called Supreme Windows in
                Edmonton and Ontario, so as we grow and expand into new regions,
                this creates trademark and intellectual property challenges. We
                will invest significant marketing and advertising across the
                entire province, and do not want to help build a competitor’s
                brand. As a result, we will remain Supreme Windows for the
                coming months as we evolve the brand into Centra’s own, with a
                target changeover date of 2023. We will not lose the 50 years in
                business, the made in Alberta, the reviews, or any of the core
                elements that make Supreme what it is today during the
                transition. They will always remain a key part of the brand. We
                have a communications and PR strategy to ensure this will all be
                made clear to customers. We welcome you all to the Centra family
                and bring with us all the benefits of Employee Ownership which
                we can now share with you.
              </p>
            </div>
          </div>
          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq7((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              What’s going to happen to my job and my department?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq7
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq7
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                We value all of the unique gifts that you bring to work every
                day. We are here to support you while we go through this
                transition. We will be aligning departments and adjusting our
                organizational design to incorporate the Supreme and Centra
                teams effectively. Depending on the department you work in and
                your position at Supreme, the reporting structure could look a
                little different in the upcoming weeks and months. We will make
                sure that all changes are clearly communicated and will provide
                resources for any questions and concerns.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq8((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              What is Centra’s commitment to jobs in Alberta?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq8
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq8
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                We believe the future is very bright in Alberta. While change
                can be scary when it comes to work and how you support yourself
                and your family, this is a great opportunity for Supreme team
                members. We are Employee Owned because we care about our people
                and their families having a great place to work for generations
                to come. Our goal is to grow Alberta operations and bring more
                jobs to the organization throughout the province, with new
                opportunities for promotions and increased job security. <br />{" "}
                <br />
                Wherever Centra goes, we make a long-term commitment and that is
                shown by owning our real estate in every location we can. In
                Alberta, as part of the acquisition, the Employee Ownership
                group has not only purchased the business operations but also
                purchased the land and buildings. If you choose to join the
                Centra Employee Ownership group, you also become part owners of
                ALL the real estate that Centra owns including land and
                buildings in Victoria, Nanaimo, 2 facilities in Langley, and now
                in Calgary too, as well as anything we acquire in future
                expansion.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq9((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>Will I have to relocate? </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq9
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq9
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                No, with our plans for growth there will be many opportunities
                to advance your career within your current region. Family is
                incredibly important to Centra, and we don’t want to cause any
                unwanted disruption to your own. If relocating is something you
                want to do, however, we will support you in achieving that goal.
                We have so many stories of employees’ families who had changes
                in their lives and were able to relocate within Centra. This is
                so much better than losing great people. Having Alberta as a new
                destination also extends this opportunity and is a wonderful
                option for our BC Employee Owners to stay with Centra if they
                find themselves looking to relocate.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq10((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Will there be changes to my compensation?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq10
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq10
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                Our biggest drivers are the people and families behind every
                single employee and shareholder. We will ensure that you receive
                the same value of compensation, with the next annual review
                taking place across Centra in February 2023. Plus, there will be
                additional add-ons that can greatly improve your retirement
                savings. We invite you to become an Employee Owner and share in
                the fantastic benefits this entails. Every employee will receive
                a Welcome to the Centra Family gift for shares of Centra. Your
                leaders will be communicating with each of you personally. This
                opportunity is not mandatory, but we hope you’ll ask Centra
                Employee Owners about what it has done for them. A philosophy of
                ours is to invest in our people and promote within—so there are
                also a lot of opportunities for us to support you in courses
                relevant to your position and growth.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq11((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Will there be changes to our products?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq11
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq11
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                One of Centra’s greatest assets is that we’re constantly
                pursuing new innovations and testing to meet the highest
                performance standards possible. We will be reviewing all Supreme
                products and all Centra products to try and achieve as much
                synergy as possible. This allows for increased purchasing power
                in a time where supply chains are tight and increases value to
                consumers and to Employee Owners’ investments. In addition, by
                having two manufacturing facilities, the goal will be for each
                to be able to help each other out. The more synergy there is,
                the easier that will be. These reviews will take place in the
                first few months with any transitions following over time.
                Reviews will be done with best interests of both companies and
                consumer demand in mind and allow us to make thoughtful, smart
                decisions moving forward to benefit all our people. As available
                technology evolves, there will naturally be changes to our
                product offerings. You’re going to be a part of that growth and
                testing period, and we’re excited for the opportunities this
                will create for you to help your industry move forward.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq12((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Sales Team- How are our customers being notified of the deal?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq12
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq12
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                One of Centra’s strongest assets is having dedicated departments
                such as our customer care and marketing & communications teams.
                They have developed a thorough communication plan so that all
                external stakeholders will be notified of the good news. If your
                customers have any questions and you’re unsure of the answer,
                all you need to do is reach out to{" "}
                <a
                  className={styles.footerLinkTag}
                  href="mailto:Letstalk@centra.ca"
                >
                  Letstalk@centra.ca{" "}
                </a>{" "}
                and we’ll be here to help. You can also provide the email{" "}
                <a
                  className={styles.footerLinkTag}
                  href="mailto:supreme@centra.ca"
                >
                  supreme@centra.ca{" "}
                </a>{" "}
                to your customers. This email goes to our Sales and
                Communications team who can respond directly to any concerns.
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq13((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              Sales Team- How will the deal impact my customers? What
              differences will they see?
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq13
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq13
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                Your existing contracts will remain unchanged, but changes to
                future contracts are to be expected as we synchronize our
                businesses and processes. Though there will be change, this is
                an exciting time for your customers as they will get to
                experience some of the great resources Centra has at our
                disposal. We have an engineering team, research and development,
                and we even have our own Centra Cares foundation where we give
                back to the community.
              </p>
            </div>
          </div>
          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq14((prevState) => !prevState)}
          >
            <p className={styles.footerLinkTitle}>
              This is really big news! Who do I go to if I have more questions?{" "}
            </p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq14
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq14
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                Change can be difficult, and you might be feeling a little
                shocked. We get it, and we want to support you all through this
                transformational time. You have built something really special
                and we’re excited about being a part of these next chapters in
                the Supreme Windows legacy. Your direct manager or leaders are
                still the people to go to with your daily work-related
                questions, and we encourage you to email{" "}
                <a
                  className={styles.footerLinkTag}
                  href="mailto:Letstalk@centra.ca "
                >
                  Letstalk@centra.ca{" "}
                </a>{" "}
                with any questions or concerns over the upcoming months. Emails
                will be responded to within 24 hours by our People & Culture
                team. You can also refer to the welcome package for helpful
                contacts in your specific department. Your thoughts and voices
                matter, and we will always want to hear from you!
              </p>
            </div>
          </div>

          <div
            className={styles.footerLinkTitleContainer}
            onClick={() => setFaq15((prevState) => !prevState)}
          >
            <p  className={styles.footerLinkTitle}>Contact Information</p>
            <p className={styles.footerPlus}>
              <img
                alt="down arrow"
                src="/images/downArrow.png"
                className={
                  faq15
                    ? styles.rotateDownArrow + " " + styles.downArrow
                    : styles.downArrow
                }
              />
            </p>
          </div>
          <div className={styles.innerLinkContainer}>
            <div
              className={
                faq15
                  ? styles.answerContainer
                  : styles.answerContainer + " " + styles.hideDiv
              }
            >
              <p className={styles.footerLinkText}>
                General Questions Email:{" "}
                <a
                  className={styles.footerLinkTag}
                  href="mailto:supreme@centra.ca"
                >
                  supreme@centra.ca{" "}
                </a>{" "}
                <br />
                <br />
                You're just getting to know us, and you may be reluctant to ask
                your questions openly. That’s totally understandable. We've
                created a confidential line where you can have your questions
                answered anonymously and in private by our People & Culture
                department.
                <br /> <br />
                <a
                  className={styles.footerLinkTag}
                  href="mailto:Letstalk@centra.ca"
                >
                  {" "}
                  Letstalk@centra.ca
                </a>
              </p>
            </div>
          </div>
          <div className={styles.footerBottomLinksContainer}>
            <div className={styles.footerImagesContainer}>
              <a href="https://www.facebook.com/centrawindows/">
                <img
                  target="_blank"
                  alt="facebook logo"
                  src="/images/facebookIcon.webp"
                  width="36"
                  height="36"
                  className={styles.socialMediaLogos}
                />
              </a>
              <a target="_blank" href="https://www.pinterest.ca/centrawindows/">
                <img
                  alt="pinterest logo"
                  src="/images/Pinterest_white.webp"
                  width="36"
                  height="36"
                  className={styles.socialMediaLogos}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/centrawindows/"
              >
                <img
                  alt="instagram logo"
                  src="/images/instagramIcon.webp"
                  width="36"
                  height="36"
                  className={styles.socialMediaLogos}
                />
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/centra">
                <img
                  alt="linkedIn logo"
                  src="/images/linkedinIcon.webp"
                  width="36"
                  height="36"
                  className={styles.socialMediaLogos}
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCcPXN5wQgJC7T8gQSYAuUew"
              >
                <img
                  alt="youtube logo"
                  src="/images/youtubeIcon.webp"
                  width="36"
                  height="36"
                  className={styles.socialMediaLogos}
                />
              </a>
              <a target="_blank" href="https://twitter.com/CentraWindows">
                <img
                  alt="twitter logo"
                  src="/images/twitterIcon.webp"
                  width="36"
                  height="36"
                  className={styles.socialMediaLogos}
                />
              </a>
            </div>
            <div className={styles.spacer}></div>
            <p className={styles.footerText}>©2022 Centra</p>
            <div className={styles.spacer}></div>
            {/* <p className={styles.footerText}>Terms & Conditions</p> */}
            <a href="/privacy-policy" className={styles.footerText}>
              Privacy
            </a>
            {/* <p className={styles.footerText}>Legal</p> */}
          </div>
        </footer>
      </div>
    </>
  );
}
