import React, { useState } from 'react';

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

      <h5>113th Congress (2013-14):</h5>
      <p className="just">
        <span>Sponsored or cosponsored S. 1551, IOSRA (Yes=+4)</span>
        <span>Sponsored or cosponsored FISA Improvements Act (Yes=-4)</span>
        <span>Sponsored or cosponsored FISA Transparency &amp; Modernization Act (Yes=-4)</span>
        <span>Sponsored or cosponsored Surveillance State Repeal Act (2014 or 2015) (Yes=+4)</span>
        <span>
          Sponsored or cosponsored USA FREEDOM 2014 prior to 2014-05-18 (Yes=+3)<br />
          <em>*Before this date, USA FREEDOM was a substantially stronger piece of legislation, meriting +2 rather than +1.</em>
        </span>
        <span>Voted for Conyers/Amash amendment (Yes=+4)</span>
        <span>
          Voted for House version of USA FREEDOM 2014 (Yes=-1).<br />
          <em>*This gutted version of USA FREEDOM was weaker than what eventually passed in the 114th Congress, meriting -2 points.</em>
        </span>
        <span>Voted for Massie-Lofgren amendment 2014 (Yes = +3)</span>
      </p>

      <h5>114th Congress (2015-16):</h5>
      <p className="just">
        <span>Sponsored or cosponsored whistleblower protection for IC employees/contractors (Yes=+4)</span>
        <span>
          1st USA FREEDOM 2015 cloture vote (Yes=+1, No=+4 or =-4= conditional on &quot;straight reauth&quot; vote)
        </span>
        <span>Straight reauth (Yes=-3)</span>
        <span>Sponsored or cosponsored FISA Reform Act (Yes=-3)</span>
        <span>Amendment 1449 to USA FREEDOM 2015: Data retention (No=+1, Yes=-3)</span>
        <span>Amendment 1450 to USA FREEDOM 2015: Extend implementation to 1yr (No=+1, Yes=-2)</span>
        <span>Amendment 1451 to USA FREEDOM 2015: Gut amicus (No=+1, Yes=-3)</span>
        <span>
          Final passage USA FREEDOM 2015 (Yes=+1, No=+4 or =-4 conditional on &quot;straight reauth&quot; vote)
        </span>
        <span>House vote on PCNA (Yes=-2, No=+2)</span>
        <span>House vote on NCPAA (Yes=-1, No=+1)</span>
        <span>Massie-Lofgren amendment to HR2685: Defund 702 (Yes=+3/No=-3)</span>
        <span>Massie-Lofgren amendment on HR4870: No Encryption Backdoors (Yes=+3/No=-3)</span>
        <span>Senate vote for cloture on CISA (Yes=-2, No=+2)</span>
        <span>
          Senate vote on Franken amendment to CISA (narrowing definition of cybersecurity threat) (Yes=+2/No=-1)
        </span>
        <span>
          Senate vote on Wyden amendment to CISA (companies must scrub personal data) (Yes=+2/No=-1)
        </span>
        <span>
          Senate vote on Heller amendment to CISA (DHS must scrub personal data) (Yes=+1/No=-1)
        </span>
        <span>
          Senate vote on Coons amendment to CISA (limit information sharing to that necessary to describe or identify a cybersecurity threat) (Yes=+1/No=-1)
        </span>
        <span>
          Senate vote on Cotton amendment (removes liability for bypassing DHS to share data with FBI and Secret Service) (Yes=-2/No=+1)
        </span>
        <span>Cosponsored ECPA reform bill in 114th Congress (Yes=+1)</span>
      </p>

      <h5>115th Congress (2017-18):</h5>
      <p className="just">
        <span>
          House vote in Judiciary Committee to amend the USA Liberty Act to close the FBI backdoor search loophole (Yes=+2/No=-2)
        </span>
        <span>
          Senate vote in Intelligence Committee to amend FARA to require warrant before querying Section 702 data (Yes=+2/No=-2)
        </span>
        <span>
          House vote for/against the USA RIGHTS Act to rein in mass surveillance under Section 702 of the FISA Amendments Act (Yes=+4/No=-4)
        </span>
        <span>
          Senate vote for/against cloture on bill extending Section 702 mass surveillance powers (Yes=+4/No=-4)
        </span>
        <span>
          Voted in Judiciary Committee for the USA Liberty Act amendment to close the FBI backdoor search loophole (Yes=+2/No=-2)
        </span>
        <span>
          Voted in Intelligence Committee for the FARA amendment to require warrant before querying Section 702 data (Yes=+2/No=-2)
        </span>
        <span>
          Voted in Intelligence Committee to report FARA to floor (Yes=-2/No=+2)
        </span>
      </p>

      <h5>116th Congress (2019-20):</h5>
      <p className="just">
        <span>
          Voted on adding prohibitions on NSA reverse targeting to 2018 appropriations (Yes=+4/No=-4)
        </span>
        <span>
          Sponsored legislation to prohibit biometric recognition in most public and assisted housing (Yes=+4)
        </span>
        <span>
          Filed or cosponsored S. 2939, ending NSA call detail records program (Yes=+3)
        </span>
        <span>
          Sponsored or cosponsored the Safeguarding Americans&rsquo; Private Records Act
          to neuter PATRIOT Act mass surveillance (Yes=+4)
        </span>
        <span>Sponsored or cosponsored improvements to FISC amicus processes (Yes=+2)</span>
        <span>
          Supported/opposed renewal of PATRIOT Act surveillance powers with cosmetic reforms (Yes=-2/No=+2)
        </span>
        <span>
          Sponsored or cosponsored the EARN IT Act, which would enable the federal government to muscle private firms into not providing end-to-end encryption (Yes=-3)
        </span>
        <span>
          Voted for/against amendment to prohibit FBI collection of web browsing history without a warrant (Yes=+3/No=-3)
        </span>
        <span>
          Voted for/against improving FISA Court transparency by requiring civil liberties amicus in most situations (Yes=+2/No=-2)
        </span>
        <span>
          Voted for/against prohibiting use of Executive Order 12,333-derived information in prosecutions of US persons (Yes=+4/No=-2)
        </span>
        <span>
          Supports requiring internal civil liberties review of DHS intelligence products before circulation (Yes=+3)
        </span>
        <span>
          Cosponsored the EARN-IT Act of 2020, which would force internet services to give police access to decrypted user data. (Yes=-4)
        </span>
      </p>

      <h5>117th Congress (2021-22):</h5>
      <p className="just">
        <span>
          Original cosponsor of the Wyden-Daines &lsquo;Fourth Amendment Is Not For Sale Act&rsquo; (Yes=+4)
        </span>
        <span>
          Original cosponsor of bill to end covert internet surveillance by US Postal Intelligence Service (Yes=+3)
        </span>
        <span>
          Supports requiring tech companies to give children an easy way to erase the data held on them. (Yes=+3)
        </span>
        <span>
          Cosponsored a toothless bill, the &quot;No Trace Act&quot;, that exempts intelligence services from any limits on warrantless acquisition of datasets. (Yes=-3)
        </span>
        <span>
          To restrict &quot;1033&quot; military equipment going to police departments (Yes=+3/No=-3)
        </span>
        <span>
          Cosponsored bill protecting US persons&rsquo; devices from warrantless searches at the &quot;border&quot;. (Yes=+2)
        </span>
        <span>Opposes intrusive financial surveillance of cryptocurrency users. (Yes=+3)</span>
        <span>
          Supports US citizens being allowed to sue federal government agents for deprivation of rights. (Yes=+4)
        </span>
        <span>
          Cosponsored the EARN-IT Act of 2022, which would force internet services to give police access to decrypted user data. (Yes=-4)
        </span>
        <span>
          Original cosponsor of legislation to restrict no-knock and night-time police raids. (Yes=+3)
        </span>
        <span>
          Original cosponsor of legislation to ban IRS use of facial recognition. (Yes=+2)
        </span>
        <span>
          Voted for/against bill expanding domestic surveillance capabilities of DHS and FBI.&quot; (Yes=-3/No=+2)
        </span>
        <span>
          Cosponsored the NDO Fairness Act, a bill to improve government surveillance order transparency (Yes=+1)
        </span>
        <span>
          Cosponsored the Government Surveillance Transparency Act, a bill to significantly improve government surveillance order transparency (Yes=+3)
        </span>
        <span>
          Supported bill to protect drivers against technology mandate that would unconstitutionally impose breath searches as a condition of driving (Yes=+2)
        </span>
        <span>
          Supported &lsquo;Fourth Amendment Restoration Act&rsquo;, requiring warrants for surveillance of US citizens and prohibiting parallel construction (Yes=+5)
        </span>
        <span>Cosponsored warrants for law enforcement use of facial recognition (Yes=+3)</span>
        <span>
          Cosponsored a bill that would impose a moratorium on law enforcement use of facial recognition technology (Yes=+4)
        </span>
      </p>

      <h5>117th Congress (2021-22):</h5>
      <p className="just">
        <span>
          Cosponsored or voted for the RESTRICT Act, which would give expansive authority to the US government to ban apps on national security grounds, seize phones used to access them, and impose criminal penalties for using VPNs to access them. (Yes=-2)
        </span>
        <span>
          Cosponsored bill that would pressure tech companies to scan for CSAM, even by breaking user encryption, and by doing so, would trigger 4A warrant requirement for currently voluntary searches. (Yes=-2)
        </span>
        <span>
          Cosponsored bill that would remove liability shield for tech companies that host content any state attorney-general disapproves of. (Yes=-2)
        </span>
        <span>
          Cosponsored bill that would pressure tech companies to censor drug-related content online. (Yes=-2)
        </span>
      </p>

      <h5>118th Congress (2023-24):</h5>
      <p className="just">
        <span>
          Cosponsored a bill that would limit government&rsquo;s access to electronic communications, including those over 180 days old. (Yes=1)
        </span>
        <span>
          Cosponsored a bill that would protect sale and use of encryption products and bar states from requiring reconfiguration of encrypted services to enable law enforcement access. (Yes=2)
        </span>
        <span>
          Cosponsored a bill that would require disclosure of surveillance to individuals surveilled. (Yes=1)
        </span>
        <span>Consolidates within DOD the operation of armed government drones. (Yes=2)</span>
        <span>Cosponsored bill creating DHS office to counter shoplifting and expanding forfeitures. (Yes=-2)</span>
        <span>
          Cosponsored the Government Surveillance Reform Act, which would prohibit warrantless queries of U. S. persons, and incorporate every major surveillance reform proposed from 2013-2023 (Yes=10)
        </span>
        <span>
          Voted for amendment to remove requirement for all new cars to have remote killswitches by 2025 (Yes=3/No=-3)
        </span>
        <span>Voted to prevent straight reauthorization of FISA Section 702 to the 2023 NDAA (Yes=3)</span>
        <span>Cosponsored the Security and Freedom Enhancement Act of 2024 (Yes=3)</span>
        <span>Voted for/against the Protect Liberty and End Warrantless Surveillance Act in the Judiciary Committee (+7/-7)</span>
        <span>Voted for/against a warrant by default for FISA Section 702 queries for US persons (+7/-10)</span>
        <span>
          Voted for/against permitting FISA Section 702 queries for international conversations involving &quot;precursors&quot; of illegal drugs that lead to overdoses, including Sudafed and Adderall (-3/+3)
        </span>
        <span>Voted for/against permitting FISA Section 702 queries of visitors and immigrants (-4/+4)</span>
        <span>
          Voted for/against expanding secret surveillance of data centers and commercial tenants (&quot;PATRIOT Act 2.0&quot;) (-5/+5)
        </span>
        <span>
          Voted for/against final passage of the Reforming Intelligence and Securing America Act (-5/+5)
        </span>
        <span>
          Voted for/against the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly (+4/-4)
        </span>
        <span>
          Voted for/against the removal of the ECSP &quot;Make Everyone A Spy&quot; amendment, which substantially expands the NSA&rsquo;s power to secretly compel private companies to produce information on US persons using their networks (+3/-10)
        </span>
        <span>
          Voted for/against requiring a warrant in order for the FBI to access the full contents of a communication resulting from a FISA Section 702 query involving a US person (+7/-10)
        </span>
        <span>Voted for/against improvements to FISC amicus processes (+2/-2)</span>
        <span>
          Voted for/against final passage of RISAA, a bill reauthorizing and expanding government surveillance under FISA till 2026 (-13/+10)
        </span>
        <span>
          Voted for/against the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly (+4/-4)
        </span>
      </p>

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
