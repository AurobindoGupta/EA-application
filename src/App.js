import "./styles.css";
var colorOne = "#E5E7EB";
var colorTwo = "#9CA3AF";

var setEmo = "😅";
export default function App() {
  function showText(e) {
    return setEmo;
  }
  function hideText(e) {
    return setText;
  }
  return (
    <div className="App">
      <h1 style={{ textDecorationLine: "underline", color: "red" }}>
        I CAN BE A GREAT ADDITION TO YOUR TEAM
      </h1>
      <div className="stuff">
        <ol>
          <li className="hover1">
            <h4>Btech(2018),Mtech(2020) from Amity University.</h4>
            <div>
              M.Tech Dissertation: Melanoma detection using Deep learning.
            </div>
            <ul>
              <li>
                Published research paper on Study of Melanoma Detection and
                Classification Techniques at ICRITO-2020
              </li>
              <li>
                Published research paper on Melanoma Detection amongst various
                Skin lesions at ICBMA- 2020
              </li>
            </ul>
          </li>
          <li style={{ background: colorOne }}>
            {" "}
            Done with level zero of neog camp.
          </li>
          <li>I have no experience of working.</li>
          <li style={{ background: colorOne }}>
            I still don’t have the skills to pull these off, but hope you like
            them.
          </li>
          <ul style={{ background: colorOne }} className="hover1">
            <li>
              Have you heard of we chat , have you heard that it is actually a
              social media hub which includes the Chinese versions of FB,Twitter
              Snapchat,Paytm,Amazon,zomato and an application for odd jobs. I
              think its high time we have one of these for the rest of the
              world(I KNOW ITS NOT A BRILLIANT OUT OF THE BOX THING,BUT.. ).
            </li>
            <li>
              Every thing is getting digitalized these days with amazon taking
              over most of the digital market, WE NEED something for the STREET
              VENDORS and CRAFTSMEN of India(not the big ones who sell their
              stuff for thousands of rupees, but the small ones like the potter
              who, is out there at your local mandi). Instead of creating an
              entire organization around this we are providing the local vendors
              a medium especially during the pandemic.
            </li>
          </ul>
          <li style={{ background: colorOne, fontWeight: "bold" }}>
            To improve your team:
          </li>
          <ul style={{ background: colorOne }} className="hover1">
            <li>
              You have three main parts Team tanay, neog camp, roc8. I fell as
              if you are spreading out, which would make it difficult for you to
              manage as you scale up, which it definitely will.
            </li>
            <li>
              My idea NESTING ,TeamTanay()[neogCamp(){};roc8 extends
              neogCamp();]It would be more complex but more efficient if we
              could condense it all in.
            </li>
            <li>
              We can use your ultimate weapon JavaScript to create a medium
              between companies and students that you and your team vouch for.
              The executives can just come in view the student’s credentials and
              get in touch, the team just prepares the kids and put them up for
              display.
            </li>
            <li>
              A more efficient way of taking in general queries for students
              would be google forms, instead of comments on social media.
            </li>
            <li>
              A todo list for students between level ZERO and ONE. I know its
              already there but an upgraded one.
            </li>
          </ul>
          <li style={{ background: colorOne, fontWeight: "bold" }}>
            WHY should you hire me?
          </li>
          <ul style={{ background: colorOne }} className="hover2">
            <li>
              With the population in india, I am pretty sure there will be
              students applying who are from teir 1 colleges, who have already
              cloned FB,Twitter and much more than what you asked for in rock8(I
              KNOW, I read the posts on your discord server and it scares me), I
              am sure you wont find anyone who work and thinks like me.
            </li>
            <li>
              <div className="joke">
                P.S. – Do not ask me how I am different as I do not know that
                yet. I just know.<span id="joke1" style={{fontSize:35}}>{setEmo}</span>
              </div>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}
