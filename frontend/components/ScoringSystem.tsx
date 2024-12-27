import React, { useState } from 'react';
import { Congress } from '@/utils/score/congress';

export const ScoringSystem: React.FC = () => {
    const [expanded, setExpanded] = useState<string>('');

    const expandArticle = () => {
        setExpanded('expanded');
    };

    return (
        <article id="our-scoring-system" className={expanded}>
            <h1>
                <a href="#our-scoring-system" className="expand-me">
                    Our Scoring System
                </a>
            </h1>
            <time dateTime="Fri, 11 Sep 2015 00:00:00 -0700"></time>
            <h3>Project History and Cosponsors</h3>

            <p className="just">
                This scorecard is a joint project of{' '}
                <a href="https://restorethe4th.com">Restore The Fourth</a> and{' '}
                <a href="https://fightforthefuture.org">Fight for the Future</a>.
            </p>
            <p className="just">
                The scorecard is objective, rather than qualitative. That is, scores are based on actual votes and legislative actions such as co-sponsorships, rather than the quality or trustworthiness of legislators&rsquo; public actions or statements on mass surveillance. This creates two kinds of error. One, that a legislator may strategically work behind the scenes in one direction, and then vote in public on the other; two, that a legislator may show up for votes, but not take interest in moving the cause forward in between rare voting opportunities. Both kinds of legislator exist in our database, but no more objective method exists.
            </p>

            <ul>
                <li>
                    Version 1.0 of this Scorecard was EFF&rsquo;s{' '}
                    <a href="https://standagainstspying.org" target="_blank" rel="noopener noreferrer">
                        Stand Against Spying
                    </a>{' '}
                    launched in 2012.
                </li>
                <li>
                    Version 2.0 launched September 29, 2015, and scored Congressional votes on the USA FREEDOM Act of 2015 and FISA reform bills not included in v. 1.0.
                    Version 2.0 launched September 29, 2015 as a joint project of{' '}
                    <a href="https://restorethe4th.com/" target="_blank" rel="noopener noreferrer">Restore The Fourth</a>{' '}
                    and{' '}
                    <a href="https://fightforthefuture.org/" target="_blank" rel="noopener noreferrer">Fight for the Future</a>{' '}
                    and scored Congressional votes on the USA FREEDOM Act of 2015 and FISA reform bills not included in v. 1.0.
                </li>
                <li>
                    Version 3.0 relaunched January 21, 2019 as a project administered solely by{' '}
                    <a href="https://restorethe4th.com/" target="_blank" rel="noopener noreferrer">Restore The Fourth</a>{' '}
                    but still with the approval of Fight for the Future. It restructured the internal code of the site, added search features by party, committees and caucuses, and added votes on Section 702 renewal.
                </li>
            </ul>

            <h4><strong>Summary of Points Allocations and Grade Boundaries</strong></h4>

            <p className="just">
                As further relevant votes come up, they will be added to the points system.
            </p>

            {Object.entries(Congress).map(([session, details]) => (
               <div key={session}>
                    <h5>{session} Congress ({details.date})</h5>
                    <p className='just'>
                        {details.rules.map((data) => 
                            data.display ? (
                                <span key={data.key}>{data.display}</span>
                            ) : (
                                data.scoring.length > 1 ? (
                                    (data.scoring[0].addText === "Voted NO " || data.scoring[0].addText === "Voted YES ") ? (
                                        <span key={data.key}>
                                            Voted {data.info}(YES={data.scoring[0].score > 0 ? +data.scoring[0].score : data.scoring[0].score}/NO={data.scoring[1].score > 0 ? +data.scoring[1].score : data.scoring[1].score})
                                        </span>
                                    ) : (
                                        <span key={data.key}>Voted for/against {data.info}(YES={data.scoring[0].score > 0 ? +data.scoring[0].score : data.scoring[0].score}/NO={data.scoring[1].score > 0 ? +data.scoring[1].score : data.scoring[1].score})</span>
                                    )
                                ) : (
                                    data.scoring[0].score > 0 ? (
                                        <span key={data.key}>{data.info} (YES=+{data.scoring[0].score})</span>
                                    ):(
                                        <span key={data.key}>{data.info} (YES={data.scoring[0].score})</span>
                                    )
                                )
                            )
                        )}
                    </p>
               </div>
            ))}
            
            <p className="just">
                We set the grade boundaries unevenly, because the legislators are themselves distributed unevenly. The buckets are generally narrower in the middle of the distribution than at either end.
            </p>

            <h3>Methodological Issues in Allocating Points</h3>

            <p className="just">
                Two notable difficulties that arose when formulating the scorecard were how to interpret votes on the USA FREEDOM Act, and how to score amendments.
            </p>

            <p className="just">
                USA FREEDOM 2015 votes were not a clear signal of being for or against surveillance reform. The USA FREEDOM Act changed the process of surveillance by separating surveillance procedures but many organizations and legislators warned that it preserves and modernizes the same surveillance authorities, while enabling Congress to say it tackled surveillance reform. Therefore, Yes votes are graded at -1. However, because of the nature of the bill, a No vote could mean 1. that the legislator thought the USA FREEDOM Act didn&rsquo;t go nearly far enough or 2. that even very weak reforms are unacceptable&mdash;there shouldn&rsquo;t be any restrictions of surveillance authorities. Therefore No votes in the Senate were tied to the legislator&rsquo;s vote on whether to do &quot;straight reauthorization&quot; of Section 215 of the PATRIOT Act. A Yes on straight reauthorization indicated clearly that they wanted no surveillance reform whatsoever, and therefore that if they then voted No on the USA FREEDOM Act, it was because they believed it went too far. Conversely, a Senator voting No on straight reauthorization and then No on the USA FREEDOM Act likely felt that the USA FREEDOM Act was far too weak. For the former group, we coded a No vote on USA FREEDOM as -4 points; for the latter group, we coded the same vote as +4 points. In the House, we went back to EFF&rsquo;s &quot;Stand Against Spying&quot; scorecard and analyzed the grades of the 88 House members voting against the USA FREEDOM Act, and found that in almost all cases their grades on that prior scorecard were very high. Consequently, all House No votes on USA FREEDOM were coded as +4. For prior votes on the 2014 version of USA FREEDOM, we adopted EFF&rsquo;s approach, and scored the version before it was gutted at +2 and the version after it was gutted at -2.
            </p>
            <p className="just">
                Scoring amendments to CISA posed complexities. CISA went beyond cybersecurity policies and is a surveillance bill. Many amendments were offered, and that raised the problem that legislators might vote for CISA on cloture (-4) and on final passage (-4), but might vote in favor of all anti-surveillance amendments, and thereby come out ahead on net. We dealt with this by not scoring the Leahy amendment (relating to FOIA exemptions) and by allocating points such that a legislator like this would come out slightly behind on points.
            </p>

            <h4>Reporting Accurately on Surveillance Reform</h4>
            <p className="just">
                Party affiliation is not a guide to your legislator&rsquo;s stance on mass surveillance. Some Democrats have Fs; some Republicans have A+s. If you&rsquo;re reporting on surveillance as an issue, steer clear of identifying a party-based stance on surveillance. In general, both major parties&rsquo; leadership tends to be more pro-surveillance than the rank and file of both major parties. Current and past members of the Intelligence, Homeland Security and Armed Services Committees tend to be more pro-surveillance than Congress as a whole, partly because of selection effects, and partly because they have experienced years of selective briefings about threats from the intelligence community. In general, in key races around the country, the candidates running from both parties have sharply different positions on surveillance, and we have no reason to suppose that this will change in future cycles.
            </p>

            <a
                href="#our-scoring-system"
                className="expand-me more"
                onClick={expandArticle}
            >
                Learn more...
            </a>
        </article>
    );
};
