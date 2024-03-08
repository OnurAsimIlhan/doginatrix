import logo from "./logo.svg";
import "./App.css";
import Countdown from "./components/countdown/Countdown";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className="App">
      <div className="grid">
      <div className="bg-img">
        
      </div>
        <div className="logo-grid">
          <img className="logo" src="./logo.png" alt=""></img>
        </div>
        <div className="text-grid">
        </div>

        <div className="timer-grid">
          <Countdown className="countdown" />
        </div>
        <div className="about-grid">
          <h1>It's a Meme but with little bit of edge</h1>
          <p>
            Bow down, crypto world, for the era of playful pups and their
            meaningless barks has come to an end. Enter the realm of Doginatrix,
            where dominance isn't just a trait—it's the rule.
          </p>
        </div>
        <div className="loby-grid">

        </div>
        <div className="socials-grid">
          <ul>
            <li>
              <SocialIcon url="https://twitter.com" />
            </li>
            <li>
              <SocialIcon url="https://discord.com" />
            </li>
            <li>
              <SocialIcon url="https://telegram.com" />
            </li>
            <li>
              <SocialIcon url="https://coingecko.com" />
            </li>
          </ul>
        </div>
        <div className="howtobuy-grid">
          <h1>Join Us When Timer Ends</h1>
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
              className="step-image"
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
        <div className="tokenecon-grid">
          <div className="tokenecon-element">
          <img src="./totalsup.png" alt=""></img>
            <h2>Total Supply</h2>
            <p>Unleash the Powerhouse: Dive into the crypto jungle with 24,7,69,420,000 $DOGIX tokens. Not just any stash, but a billion-strong force ready to dominate. The adventure of a lifetime awaits.</p>
          </div>
          <div className="tokenecon-element">
          <img src="./goodboy.png" alt=""></img>
            <h2>Taxes</h2>
            <p>
            The Good, The Bad, and The Tax-Free: Buy $DOGIX and join the elite with zero tax. Sell and leave a 10% tribute behind. It's simple: loyalty is rewarded, desertion is taxed.            </p>
          </div>
          <div className="tokenecon-element">
          <img src="./liqburn.png" alt=""></img>
            <h2>Liquidity Burn</h2>
            <p>
            Scorched Earth Policy: "We burn 'em all" isn't just talk. Every transaction ignites a liquidity inferno, ensuring $DOGIX's resilience and growth. Fasten your seatbelts for a blazing journey.            </p>
          </div>
          <div className="tokenecon-element">
          <img src="./rewards.png" alt=""></img>
            <h2>Rewards</h2>
            <p>
            Feast of the Faithful: Staking $DOGIX? That's like harvesting golden eggs from the liquidity pool. More than rewards, it's the spoils for those in the fray. Claim your victory.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
