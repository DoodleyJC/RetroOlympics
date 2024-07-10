import "./home.css";
export default function Home() {
  return (       <div>
        <header>
              <img src="img/logo.png" width="500" height="500" alt="Retro Olympics"/>
        </header>

        <section className="hero">
            <div className="hero-text">
                <h3>The 2023-2024 season is coming!</h3>
                <h2>Gather your team and prepare for the...</h2>
                <h1>RETRO OLYMPICS!</h1>
                <div>
                  <p>This year, teams of 3 will battle it out for the famous retro-olympic medals and a community-sponsored prize pool! Who will emerge victorious?</p>
                  <p>Scroll down for more information!</p>
                  <p>Matches to take place every Saturday starting at 5PM UTC.</p>
                  <a href="https://www.twitch.tv/RetroOlympics"><i className="bx bxl-twitch"></i>Watch Live</a>
                  <a href="https://www.youtube.com/@retroolympics"><i className="bx bxl-youtube"></i>VODs</a>
                </div>
              </div>
                <div className="hero-img">
                <img src="img/mascot.png"/>
            </div>

        </section>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<div className="container"><div className="faq-container">
  <p id="faq"></p>
    <h1 className="section__headline">FAQ</h1>
    <h2 className="c-faqs__headline">General</h2>
    <ul className="c-faqs">
      <li className="c-faq c-faq--active">
        <span className="c-faq__title">What are the RetroOlympics?</span>
        <div className="c-faq__answer">The RetroOlympics are a competitive retro gaming tournament originating from RetroAchievements that is being streamed on Twitch. Initially created by VoiceOfAutumn with the help of Searo, it is now hosted by a large team of volunteers. The competition mostly takes place within RetroAchievements supporting emulators. Starting in 2023, we are looking into the support of other emulation such as Fightcade and other potential platforms.</div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">How do I join the RetroOlympics?</span>
        <div className="c-faq__answer">Anyone that has a RetroAchievements account can participate in the tournament. It does not matter how long you have been a member. The RetroOlympics currently take place once per year and once you can sign up, this will be communicated on the both the RetroOlympics and RetroAchievements website.</div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">What does the tournament look like?</span>
        <div className="c-faq__answer">In general the RetroOlympics are divided into a group stage and a knock-out stage. Each week players will battle against other players in a wide variety of retro games. The format changes each year. Previous editions were individual matches or nationality based. In the 2023-2024 season, players can sign up as a team of 3 players and compete within the usual group stage & knock-out format. </div>
      </li>
      <li className="c-faq">
          <span className="c-faq__title">What's different this year?</span>
          <div className="c-faq__answer">The format of a group and knock-out stage will remain in the 2023-2024 season. However, this year the competition will be 3 on 3 battles. You can sign up with 2 other players and create your own team once signups are opened. If you don't have a team and can't find one, you can also register as a flex player. We will then put you into contact with other flex players so you can register. Apart from that, instead of having 3 players all play the same game, each week will have 3 different games. Each player can only play one game, so find a team with a wide skillset! Finally, starting in 2023, we will be increasing the usage as FightCade and (very occasionally) other external platforms.</div>
        </li>
        <li className="c-faq">
        <span className="c-faq__title">What can I win?</span>
        <div className="c-faq__answer">Apart from the honour of being among the greatest retro gamers on this planet, winners will obtain a site badge on RetroAchievements. Additionally, each year we are looking into the possibilities of additional prizes. This year this includes an community-sponsored prize pool.</div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">What does the community-sponsored prize pool look like?</span>
        <div className="c-faq__answer">This year, we are starting experimenting with the impact of a monetary prize pool and its effect on the competition. We have received an generous amount of donations which we narrowed down to a prize pool of $100, divided as following:
          <br />
          • 1st place team: $45 (15x3)
                  <br />
                  • 2nd place team: $30 (10x3) 
                  <br />
                  • 3rd place team: $15 (5x3)
                  <br />
                  • Groups MVP: $5
                  <br />
                  • Knock out MVP: $5
        </div>
      </li>

    </ul> 
    
      <h2 className="c-faqs__headline">Rules & Responsibilities</h2>
    <ul className="c-faqs">
      <li className="c-faq">
        <span className="c-faq__title">What are the general rules for the RetroOlympics?</span>
        <div className="c-faq__answer">• Be in Discord streaming your screen so the referees can ensure the rules are being enforced.
  <br />
  • All challenges must be performed in Hardcore Mode unless specified otherwise
          <br />
          • When not played on an external platform, all challenges must be performed in an emulator that support achievements/leaderboards 
          <br />
          • When not played on an external platform, all challenges must be performed in an emulator that can display the RAhash of the loaded game (You might need to update your RetroArch if you’re using an older version).
          <br />
          • Fast Forward & Turbo Input are not allowed
          <br />
          • Glitches and cheat codes are not allowed unless specified
          <br />
          <br />
          In case you are in doubt if something that is not listed here, but might give you an unfair advantage, is allowed, contact a referee, but abstain from using it.
  </div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">What are my responsibilities?</span>
        <div className="c-faq__answer">• Make sure you arrive on time on the day the matches are being played. Matches will not be delayed. 
          <br />
          • Make sure you are able to stream your gameplay to the referee's in the RetroAchievements discord.
        <br />
        • Do not abandon your team during the competition and always play to your best ability
        <br />
        • Have fun!
      </div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">How do you referee the results of the competition?</span>
        <div className="c-faq__answer">A referee will be watching the screens of all participants for any forms of an unfair advantage. We will be recording/streaming all gameplay. In the event that the results are unclear, a referee will specify that he/she needs to use the recording to determine the results and will let those be known at a later time.</div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">I don’t agree with the decision of a referee, what can I do?</span>
        <div className="c-faq__answer">In case you don’t agree with the decision of a referee, you are free to let your dispute be known to one of them. They will further review the results with your considerations in mind, and will announce any new results if applicable.</div>
      </li>
      <li className="c-faq c-faq">
        <span className="c-faq__title">Can I play with a substitute?</span>
        <div className="c-faq__answer">As a team, you are allowed to sign up one extra substitute. You are not allowed to use any additional substitutes. Please bear in mind all players are required to play an appropriate amount of games to qualify for the site badge. Additionally, the prize pool is split based on teams of 3. In rare cases where one of your players is unable to make it due to unforeseen circumstances, contact a referee for the possibilities.</div>
      </li>
    </ul> 
    
      <h2 className="c-faqs__headline">Other questions</h2>
    <ul className="c-faqs">
      <li className="c-faq">
        <span className="c-faq__title">Can I help out with making the RetroOlympics happen?</span>
        <div className="c-faq__answer">We are always looking for volunteers to strengthen our team. If you are interested in helping out as a volunteer, please contact VoiceOfAutumn on the RetroAchievements website.
  </div>
      </li>
      <li className="c-faq">
        <span className="c-faq__title">Are there any other ways to contribute?</span>
        <div className="c-faq__answer">If you want to enrichen the prize pool for the competition, please contact VoiceOfAutumn through the RetroAchievements website. If you have any other forms of contribution in mind, feel free to contact them as well.</div>
      </li>
    </ul> 
    
  </div></div></div>




  );
}
