"use client"

import { ScorecardPolitical, ScoringSystem } from "@/components";
import Image from "next/image";
import { useState } from "react";
import "../styles/index.scss";

export default function Home() {
    const [tweetText, setTweetText] = useState(
        "Congress is considering whether to renew the government's mass surveillance powers, including Section 702 of FISA, by April 2026. This power has been abused for years to violate our privacy rights. Please vote for bills to rein in government surveillance!"
    );
    return (
        <>
            {/* Navigation */}
            <nav>
                <ul>
                    <li>
                        <a href="#scoreboard">Scoreboard</a>
                    </li>
                    <li>
                        <a href="#video">Video</a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            <section className="copy"></section>
            <div id="candidates" className="candidates"></div>

            {/* Placeholder for Scoreboard React Component */}
            <div id="scoreboard">
                <ScorecardPolitical google_sheets_api_key="AIzaSyBGuGESLGgBsWAb_TUAkE0weCji4sCa_bU" />
            </div>

            {/* Tweet Congress Section */}
            <div className="action">
                <h3>Tweet Congress</h3>
                <div id="tweet_text_container">
                    <textarea
                        id="tweet_text"
                        maxLength={105}
                        value={tweetText}
                        onChange={(e) => setTweetText(e.target.value)}
                    />
                    <div id="remaining">0</div>
                </div>
                <a
                    className="tweet"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`}
                >
                    <Image src="/images/share/tw_white.png" alt="Tweet your Senators" width={38} height={38} />
                    Tweet your Senators
                </a>
            </div>

            {/* Articles Section */}
            <section className="copy">
                <hr />
                <article id="video" className="expanded">
                    <h1>
                        <a href="#video" className="expand-me">
                            Watch the Video
                        </a>
                    </h1>
                    <p className="just">
                        The US Government has turned the Internet into something it was
                        never intended to be: a system for spying on us in our most private
                        moments. By tapping Internet cables, undermining security
                        standards, and getting our data from companies in secret, the
                        National Security Agency has built the largest surveillance
                        apparatus in history and is collecting information on most Internet
                        users.
                    </p>
                    <div className="video-wrapper">
                        <div className="video-container">
                            <iframe
                                src="//www.youtube.com/embed/2YsZoqwRnKE"
                                frameBorder="0"
                                width="560"
                                height="315"
                                title="Informational Video"
                            ></iframe>
                        </div>
                    </div>
                    <p>
                        {/* <a href="#top" class="btn">Contact Congress now!</a> */}
                    </p>
                </article>

                <hr />
                <article id="big-surveillance-makes-more-vulnerable" className="expanded">
                    <h1>
                        <a href="#big-surveillance-makes-more-vulnerable" className="expand-me">
                            Big surveillance makes us more vulnerable than ever.
                        </a>
                    </h1>
                    <p className="just">
                        Ad agencies mine info on our individual vulnerabilities to coerce
                        consumer and political decisions, without our knowledge. Companies
                        leak out our financial information, violate their own privacy
                        agreements, and still are offered immunity for sharing our customer
                        data with the NSA. The government and police use counterterrorism
                        resources to spy on our peaceful political protests.
                        People get longer jail time depending on the zip code they live in, even for the same offense. And just imagine what else is happening without our knowledge.

                    </p>
                    <p className="just">
                        The Internet is integrated into every part of our lives—what we allow to happen with our data will shape the future of our society. We&rsquo;re now on the brink of making big decisions about the kinds of power governments and monopolies have to use this data against our own interests. And, they&rsquo;re moving fast—the US, Britain, France, Singapore, Iran, China, and more, are all moving to pass expansive surveillance laws and sweetening deals for cooperating tech companies (like with full corporate immunity from our laws). We have to draw the line in the sand now.
                    </p>
                </article>

                <hr />
                {/* ScoringSystem Component */}
                <div id="scoring-system">
                    <ScoringSystem />
                </div>
            </section>

            {/* Footer */}
            <footer id="fftf-footer">
                <a href="https://www.fightforthefuture.org" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/fftf-logo.png"
                        alt="Fight for the Future"
                        className="footer-logo small"
                        width={300}
                        height={38.6}
                    />
                </a>
                <a href="http://www.restorethe4th.com/" target="_blank" rel="noopener noreferrer">                    
                    <Image
                        src="/images/restore4th-logo.png"
                        alt="Restore the Fourth"
                        className="footer-logo"
                        width={176}
                        height={100}
                    />
                </a>
                <hr />
                <div className="share">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstark-inlet-79454.herokuapp.com"
                        rel="noopener noreferrer"
                        className="fb-xfbml-parse-ignore"
                    >
                        <button className="social facebook">Share this</button>
                    </a>
                    <a
                        className="tweet"
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                            "We can protect the Internet, but to do that, we need to know who is helping us and who is working against us. www.decidethefuture.org"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="social twitter">Tweet this</button>
                    </a>
                </div>
                <div className="copy">
                    <p>For press inquiries, please contact us at:</p>
                    <p>
                        <a href="tel://1-978-852-6457" className="text">
                            978-852-6457
                        </a>{" "}
                        <em>or</em>{" "}
                        <a href="mailto:press@fightforthefuture.org" className="text">
                            press@fightforthefuture.org
                        </a>
                    </p>
                    <p>
                        <a href="tel://1-617-208-9002" className="text">
                        617-208-9002
                        </a>{" "}
                        <em>or</em>{" "}
                        <a href="mailto:stephen@restorethe4th.com" className="text">
                        stephen@restorethe4th.com
                        </a>
                    </p>
                    <p>
                        <small>
                            All other inquiries, contact{" "}
                            <a href="mailto:team@fightforthefuture.org" className="text">
                                team@fightforthefuture.org
                            </a>
                            .
                        </small>
                    </p>
                </div>
            </footer>
        </>
    );
}
