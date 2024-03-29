import "./App.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <div className="top-wrapper">
          <div class="main-content">
            <img className="logo" src="./logo.png" alt=""></img>
          </div>
          <div class="side-content-1">
            <div className="card-1">
              <h1>It's a meme but with little bit of edge</h1>
              <p>
                <strong>Bow down</strong>, crypto world, for the era of playful pups and their
                meaningless barks has come to an end. Enter the realm of
                Doginatrix, <strong>where dominance isn't just a trait—it's the rule.</strong>
              </p>

              <h2>Contact Adress: Inc Soon</h2>
            </div>
          </div>
          <div class="side-content-2">
            <FlipClockCountdown
              to={new Date('2024-03-16T23:59:59').getTime()}
              labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            />
          </div>
          <div class="side-content-3">
            <ul>
              <li>
                <SocialIcon url="https://x.com/doginatrix" />
              </li>
              <li>
                <SocialIcon url="https://t.me/doginatrix" />
              </li>
              <li>
                <SocialIcon url="https://discord.com" />
              </li>
            </ul>
          </div>
        </div>
        <div class="content content-5">
          <div>
          <img src="./totalsup.png" alt=""></img>
            <h2>Total Supply</h2>
            <p><strong>Unleash the Powerhouse:</strong> Dive into the crypto dungeon <strong> 24,7,69,420,000 $DOGIX</strong> tokens. Non-mintable contract. Buy now or loose a life time opportunity! Be a good boy</p>
          </div>
        </div>
        <div class="content content-6">
          <div>
          <img src="./goodboy.png" alt=""></img>
            <h2>Taxes</h2>
            <p>
            The Good, The Bad, and The Tax-Free: <strong>Buy $DOGIX and join the elite with zero tax</strong>.
             Sell and leave a tribute behind, money goes back to good boys.
              <strong>It's simple: loyalty is rewarded, desertion is taxed.</strong>            </p>
          
          </div>
        </div>
        <div class="content content-7">
          <div>
          <img src="./liqburn.png" alt=""></img>
            <h2>Liquidity Burn</h2>
            <p>
            Scorched Earth Policy: <strong>"We burn 'em all"</strong> isn't just talk. Every transaction ignites a liquidity inferno, ensuring $DOGIX's resilience and growth. Fasten your seatbelts for a blazing journey.            </p>
          
          </div>
        </div>
        <div class="content content-8">
          <div>
            <img src="./rewards.png" alt=""></img>
            <h2>Rewards</h2>
            <p>
              Feast of the Faithful: Staking $DOGIX? That's like harvesting
              golden eggs from the liquidity pool. More than rewards, it's the
              spoils for those in the fray. Claim your victory.
            </p>
          </div>
        </div>
        <div class="content-9">
        <h1>Join Us On Launch</h1>
          <div className="buy-step">
            <img
              src="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_152,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
              alt="Create a Wallet"
              className="step-image"
            />
            <div className="text-content">
              <h2>Create a Wallet</h2>
              <p>
                <span>Seize Control:</span> Install MetaMask or the wallet of
                your choosing...
              </p>
            </div>
          </div>
          <div className="buy-step">
            <img
              src="https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_152,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T213620_680.png"
              alt="Get Some ETH"
              className="step-image"
            />
            <div className="text-content">
              <h2>Get Some ETH</h2>
              <p>
                <span>Gather Your Tools:</span> Ensure you have ETH in your
                wallet...
              </p>
            </div>
          </div>
          <div className="buy-step">
            <img
              src="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_152,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/uniswap%20(2).png"
              alt="Go to Uniswap"
              className="step-image"
            />
            <div className="text-content">
              <h2>Go to Uniswap</h2>
              <p>
                <span>Enter the Dungeon:</span> Connect with Uniswap...
              </p>
            </div>
          </div>
          <div className="buy-step">
            <img
              src="./logo.png"
              alt="Switch ETH for $DOGIX"
              className="laststep"
            />
            <div className="text-content">
              <h2>Switch ETH for $DOGIX</h2>
              <p>
                <span>Dominate the Exchange:</span> Convert your ETH to
                $DOGIX...
              </p>
            </div>
          </div>
        </div>
        <div class="content-10">
          <img src="./loby.png" alt=""/>
        </div>
        <div class="roadmap content-11">
        <div>
          <h1>Phase 1</h1>
          <ul>
            <li>Building Community</li>
            <li>Socials and Website</li>
            <li>Liquidity Lock</li>
            <li>Ownership Renounce</li>
          </ul>
          </div>
        </div>
        <div class="roadmap content-12">
          <div>
          <h1>Phase 2</h1>
          <ul>
            <li>Airdrops</li>
            <li>Meme Contests</li>
            <li>First Partners Reveal</li>
            <li>Big Announcement</li>
          </ul>
          </div>
        </div>
        <div class="roadmap content-13">
        <div>
          <h1>Phase 3</h1>
          <ul>
            <li>Launch</li>
            <li>1000 Followers on Twitter</li>
            <li>1000 Subs on Telegram</li>
            <li>Community Discord</li>
          </ul>
          </div>
        </div>
        <div class="roadmap content-14">
        <div>
          <h1>Phase 4</h1>
          <ul>
            <li>Complete Takeover</li>
            <li>10m $ market cap</li>
            <li>Partner Reveals</li>
            <li>Trending on Twitter #dogix $dogix</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
