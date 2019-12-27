import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import Footer from "../components/footer";
import "../css/home.css";
import getAllPRs from '../timeline/getTimelineData';
import Timeline from '../timeline/Timeline';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prs:[]
    };
  }

  componentWillMount() {
    const data = JSON.parse(localStorage.getItem('prs'));
    // if haven't gotten data before or if data is old, then retrieve the data again (every 10 min)
    if (!data || (data && (new Date() - new Date(data.lastRetrieved) > 10 * 60 * 1000))){
      // get the PR's to add to the timeline
      console.log('retrieving new data...');
      getAllPRs()
      .then(res => {
        // only get the first 16 PRs
        res = res.slice(0, 10);
        const noRepeats = this.combineRepeats(res);
        this.setState({prs:noRepeats})
        console.log(noRepeats);
        // store in local storage
        const dataToStore = {
          data: noRepeats,
          lastRetrieved: new Date(),
        }
        localStorage.setItem('prs', JSON.stringify(dataToStore));
      });
    }
    else{
      // didn't need to call api, so just set state to stored data
      console.log('no new data');
      this.setState({prs: data.data});
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  /*
  When there are multiple PRs in a row by the same person to the same repo,
  combine the PRs into a single element
  */
  combineRepeats(prs){
    let noRepeatPRs = [];
    for (let i = 0; i < prs.length; i++){
      prs[i].allMergedDates = [prs[i].merged_time];
      let j = i + 1;
      while (j < prs.length && prs[j].user === prs[i].user && prs[j].repoName === prs[i].repoName){
        prs[i].allMergedDates.push(prs[j].merged_time);
        j++;
      }
      noRepeatPRs.push(prs[i]);
      // skip the repeats
      i = j - 1;
    }
   /* let yourContribution = noRepeatPRs[noRepeatPRs.length - 1];
    yourContribution.user = "I";
    yourContribution.repoName = "some repository";
    noRepeatPRs.unshift(yourContribution);*/
    return noRepeatPRs;
  }
  
  render() {
    // Menu.
    console.log(this.state.prs);
    return (
      <div>
        <MenuBar />
        <div className="is-preload">

          {/*Banner*/}
          <section id="banner">
            <div className="inner">
              <div className="content">
                <h2>Open Source @ UCSD</h2>
                  <p>Welcome!</p>
              </div>
              <ul className="actions stacked">
                <li>
                  <a href="#" className="button major">
                  <i class="fas fa-users"></i>
              <span> Learn More!</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/os-ucsd" className="button major">
                    <i class="fab fa-github"></i>
              <span> Find Us on Github!</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* timeline */}
          <br/>
          <h2>Our Github Contribution Timeline</h2>
          <Timeline prs={this.state.prs} />

          {/*One*/}
          <section id="one" className="wrapper style1 split">
            <div className="inner">
              <div className="content">
                <h2 className="firstHeader">What is Open Source?</h2>
                <p>
                  Amet lorem vivamus viverra, quis semper consequat, sem nibh
                  mattis arcu, dolore porttitor lorem justo in tellus. Aenean
                  lacinia felis et dui viverra, nec accumsan et quam ultricies.
                  Phasellus sapien lorem, rhoncus ultricies.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      Our Story
                    </a>
                  </li>
                </ul>
              </div>
              <div className="image-circles">
                <div className="images">
                  <span className="image">
                    <img src="images/pic01.jpg" alt="" />
                  </span>
                  <span className="image">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
                <div className="images">
                  <span className="image">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                  <span className="image">
                    <img src="images/pic04.jpg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="two" className="wrapper style2">
            <div className="inner">
              <header className="major">
                <h2>Gravida nunc accumsan</h2>
                <p>
                  Ipsum quis semper consequat, sem nibh mattis arcu, quis
                  porttitor lorem justo in tellus. Aenean lacinia
                  <br />
                  interdum nisl felis et dui viverra, nec accumsan tempus quam
                  ultricies.
                </p>
              </header>
              <div className="features">
                <section>
                  <span className="icon solid major fa-tag"></span>
                  <h3>Quam adipiscing</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-camera-retro"></span>
                  <h3>Semper accumsan</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-cloud"></span>
                  <h3>Ipsum lorem magna</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-cube"></span>
                  <h3>Tempus sed mattis</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-file-alt"></span>
                  <h3>Odio fermentum</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-plane"></span>
                  <h3>Risus et interdum</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
              </div>
              <footer className="major">
                <ul className="actions special">
                  <li>
                    <a href="#" className="button major">
                      More Features
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </section>

          <section id="three" className="wrapper style1">
            <div className="inner">
              <div className="spotlights">
                <section>
                  <span className="image">
                    <img src="images/pic05.jpg" alt="" />
                  </span>
                  <div className="content">
                    <h2>Convallis integer iaculis</h2>
                    <p>
                      Donec elementum odio ut suscipit congue. Fusce magna
                      mattis vel fermentum, ultricies et velit. Suspendisse
                      viverra, ante in eleifend vulputate, lacus lorem pretium
                      ligula, tincidunt posuere sapien neque a augue.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada.
                    </p>
                  </div>
                </section>
                <section>
                  <span className="image">
                    <img src="images/pic06.jpg" alt="" />
                  </span>
                  <div className="content">
                    <h2>Ultrices augue faucibus</h2>
                    <p>
                      Donec elementum odio ut suscipit congue. Fusce magna
                      mattis vel fermentum, ultricies et velit. Suspendisse
                      viverra, ante in eleifend vulputate, lacus lorem pretium
                      ligula, tincidunt posuere sapien neque a augue.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada.
                    </p>
                  </div>
                </section>
                <section>
                  <span className="image">
                    <img src="images/pic07.jpg" alt="" />
                  </span>
                  <div className="content">
                    <h2>Integer sed sodales</h2>
                    <p>
                      Donec elementum odio ut suscipit congue. Fusce magna
                      mattis vel fermentum, ultricies et velit. Suspendisse
                      viverra, ante in eleifend vulputate, lacus lorem pretium
                      ligula, tincidunt posuere sapien neque a augue.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </section>

          <section id="four" className="wrapper style2 special">
            <div className="inner">
              <header>
                <h2>Sed vitae massa curabitur</h2>
                <p>
                  Ipsum quis semper consequat, sem nibh mattis arcu, quis
                  porttitor lorem justo in tellus. Aenean lacinia
                  <br />
                  interdum nisl felis et dui viverra, nec accumsan tempus quam
                  ultricies.
                </p>
              </header>
              <ul className="actions special">
                <li>
                  <a href="#" className="button primary major">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
