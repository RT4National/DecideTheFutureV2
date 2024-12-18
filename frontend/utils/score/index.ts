import { PoliticianData, ScoreCriteria, Scoring } from "@/types";
import { getScoreGrade } from "./get-grade";

export const doScore = (politician: PoliticianData): Scoring => {
    let score = 0;
    const score_criteria: ScoreCriteria[] = [];

    if (politician['fisa_courts_reform_act'] == 'X') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Supported the FISA Courts Reform Act',
            url: 'http://www.ibtimes.com/nsa-fisa-surveillance-obama-likely-back-secret-court-reform-senator-says-1368781'
        });
        score += inc;
    }
    if (politician['s_1551_iosra'] == 'X') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Supported the Intelligence Oversight and Surveillance Reform Act',
            url: 'https://cdt.org/blog/bills-offer-clear-choice-end-bulk-collection-of-americans%E2%80%99-data-or-endorse-it/'
        });
        score += inc;
    }
    if (politician['fisa_improvements_act'] == 'X') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Supported the FISA Improvements Act',
            url: 'http://www.theguardian.com/world/2013/nov/15/feinstein-bill-nsa-warrantless-searches-surveillance'
        });
        score += inc;
    }
    if (politician['fisa_transparency_and_modernization_act'] == 'X') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Supported the FISA Transparency and Modernization Act',
            url: 'https://www.eff.org/deeplinks/2014/04/nsa-reform-bill-intelligence-community-written-intelligence-community-and'
        });
        score += inc;
    }
    if (politician['surveillance_state_repeal_act'] == 'X') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Supported the Surveillance State Repeal Act',
            url: 'http://www.restorethe4th.com/blog/go-big-or-go-home-pass-the-new-surveillance-state-repeal-act/'
        });
        score += inc;
    }
    if (politician['usa_freedom_prior_to_20140518'] == 'X') {
        const inc = politician.organization === 'Senate' ? 3 : 1;
        score_criteria.push({
            score: inc,
            info: 'Supported the original USA Freedom Act (prior to May 18th, 2014)',
            url: ' https://www.eff.org/deeplinks/2014/07/new-senate-usa-freedom-act-first-step-towards-reforming-mass-surveillance'
        });
        score += inc;
    }
    if (politician['voted_for_conyers_amash_amendment'] == 'X') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted for Conyers Amash Amendment',
            url: ' http://americablog.com/2013/07/amash-conyers-anti-nsa-amendment-lost-by-12-votes-205-217.html'
        });
        score += inc;
    }
    if (politician['voted_for_house_version_of_usa_freedom_act_2014'] == 'X') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted for gutted House version of USA Freedom Act of 2014',
            url: 'https://www.eff.org/deeplinks/2014/05/eff-dismayed-houses-gutted-usa-freedom-act'
        });
        score += inc;
    }
    if (politician['voted_for_massie_lofgren_amendment_2014'] == 'X') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted for Massie-Lofgren Amendment (2014)',
            url: ' http://www.huffingtonpost.com/2014/12/10/nsa-surveillance-spending-bill_n_6304834.html'
        });
        score += inc;
    }
    if (politician['whistleblower_protection_for_ic_employees_contractors'] == 'X') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Supported whistleblower protection measures for Intelligence employees and contractors',
            url: 'http://whistleblower.org/blog/121230-49-orgs-call-congress-restore-whistleblower-rights-intelligence-contractors'
        });
        score += inc;
    }
    if (politician['first_usaf_cloture_vote'] == 'GOOD') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on reauthorizing the PATRIOT Act *and* NO on cloture for the first Senate USA Freedom Act',
            url: 'http://www.thewhir.com/web-hosting-news/senate-votes-to-invoke-cloture-on-usa-freedom-act-advancing-it-to-an-amendment-process'

        });
        score += inc;
    }
    else if (politician['first_usaf_cloture_vote'] == 'OK') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on reauthorizing the PATRIOT Act *and* YES on cloture for the first Senate USA Freedom Act',
            url: 'http://www.thewhir.com/web-hosting-news/senate-votes-to-invoke-cloture-on-usa-freedom-act-advancing-it-to-an-amendment-process'
        });
        score += inc;
    }
    else if (politician['first_usaf_cloture_vote'] == 'BAD') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on reauthorizing the PATRIOT Act and NO on the first USA Freedom Act cloture vote',
            url: 'http://thehill.com/policy/national-security/242173-mcconnell-introduces-short-term-nsa-bill'
        });
        score += inc;
    }
    if (politician['straight_reauth'] == 'GOOD') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on reauthorizing the PATRIOT Act',
            url: 'http://thehill.com/policy/national-security/242173-mcconnell-introduces-short-term-nsa-bill'
        });
        score += inc;
    }
    else if (politician['straight_reauth'] == 'BAD') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on reauthorizing the PATRIOT Act',
            url: 'https://cdt.org/insight/oppose-senator-feinsteins-fisa-reform-act-of-2015/'
        });
        score += inc;
    }
    if (politician['fisa_reform_act'] == 'X') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Supported the FISA Reform Act',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    if (politician['amendment_1449_data_retention'] == 'GOOD') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on USA Freedom data retention amendment (1449)',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    else if (politician['amendment_1449_data_retention'] == 'BAD') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on USA Freedom data retention amendment (1449)',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    if (politician['amendment_1450_extend_implementation_to_1yr'] == 'GOOD') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on amendment 1450 extending implementation of USA Freedom Act by 1 year',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    else if (politician['amendment_1450_extend_implementation_to_1yr'] == 'BAD') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on amendment 1450 extending implementation of USA Freedom Act by 1 year',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    if (politician['amendment_1451_gut_amicus'] == 'GOOD') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on amendment 1451 to gut amicus proceedings',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    else if (politician['amendment_1451_gut_amicus'] == 'BAD') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on amendment 1451 to gut amicus proceedings',
            url: 'https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act'
        });
        score += inc;
    }
    if (politician['final_passage_usaf'] == 'GOOD') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on USA Freedom Act (final passage)',
            url: "http://www.restorethe4th.com/blog/most-reps-voting-for-usa-freedom-were-opponents-of-surveillance-reform/"
        });
        score += inc;
    }
    else if (politician['final_passage_usaf'] == 'OK') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on reforming bulk collection via USAF',
            url: 'https://www.eff.org/deeplinks/2015/05/usa-freedom-act-passes-what-we-celebrate-what-we-mourn-and-where-we-go-here'
        });
        score += inc;
    }
    else if (politician['final_passage_usaf'] == 'BAD') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on USA Freedom Act (final passage) and YES on extending the PATRIOT Act',
            url: "http://www.restorethe4th.com/blog/most-reps-voting-for-usa-freedom-were-opponents-of-surveillance-reform/"
        });
        score += inc;
    }
    if (politician['massie_lofgren_amendment_to_hr2685_defund_702'] == 'GOOD') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on Massie-Lofgren Amendment to HR2685: Defund Section 702 surveillance',
            url: 'https://demandprogress.org/letter-of-support-for-massie-lofgren-amendment-to-the-department-of-defense-appropriations-act-of-2016-h-r-2685/'
        });
        score += inc;
    }
    else if (politician['massie_lofgren_amendment_to_hr2685_defund_702'] == 'BAD') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on Massie-Lofgren Amendment to HR2685: Defund Section 702 surveillance',
            url: 'https://demandprogress.org/letter-of-support-for-massie-lofgren-amendment-to-the-department-of-defense-appropriations-act-of-2016-h-r-2685/'
        });
        score += inc;
    }
    if (politician['massie_lofgren_amendment_to_hr4870_no_backdoors'] == 'GOOD') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted YES on Massie-Lofgren Amendment to HR4870: Ban encryption backdoors',
            url: 'https://shutthebackdoor.net/'
        });
        score += inc;
    }
    else if (politician['massie_lofgren_amendment_to_hr4870_no_backdoors'] == 'BAD') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted NO on Massie-Lofgren Amendment to HR4870: Ban encryption backdoors',
            url: 'https://shutthebackdoor.net/'
        });
        score += inc;
    }
    if (politician['ECPA_reform_cosponsor'] == 'GOOD') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Co-Sponsor of Electronic Communication Privacy Act Reform',
            url: 'https://www.eff.org/deeplinks/2015/09/senate-judiciary-committee-finally-focuses-ecpa-reform'
        });
        score += inc;
    }
    if (politician['CISA_cloture_vote'] == 'BAD') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted for CISA Cloture Vote',
            url: 'http://www.slate.com/articles/technology/future_tense/2015/10/stopcisa_the_cybersecurity_information_sharing_act_is_a_disaster.html'
        });
        score += inc;
    }
    else if (politician['CISA_cloture_vote'] == 'GOOD') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted against CISA Cloture Vote',
            url: 'http://www.slate.com/articles/technology/future_tense/2015/10/stopcisa_the_cybersecurity_information_sharing_act_is_a_disasteecpareformcosponsorr.html'
        });
        score += inc;
    }
    if (politician['house_NCPA'] == 'BAD') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted for National Cybersecurity Protection Advancement Act',
            url: 'http://techcrunch.com/2015/04/23/house-passes-complementary-cyber-information-sharing-bill/'
        });
        score += inc;
    }
    else if (politician['house_NCPA'] == 'GOOD') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Voted against National Cybersecurity Protection Advancement Act',
            url: 'http://techcrunch.com/2015/04/23/house-passes-complementary-cyber-information-sharing-bill/'
        });
        score += inc;
    }
    if (politician['house_PCNA'] == 'BAD') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted for The Protecting Cyber Networks Act ',
            url: 'https://www.eff.org/deeplinks/2015/04/eff-congress-stop-cybersurveillance-bills'
        });
        score += inc;
    }
    else if (politician['house_PCNA'] == 'GOOD') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted against The Protecting Cyber Networks Act ',
            url: 'https://www.eff.org/deeplinks/2015/04/eff-congress-stop-cybersurveillance-bills'
        });
        score += inc;
    }
    if (politician['franken_cisa_amendment'] == 'BAD') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted against the Franken CISA amendment',
            url: 'http://www.newsweek.com/senate-passes-controversial-cisa-bill-companies-share-cyber-security-387785'
        });
        score += inc;
    }
    else if (politician['franken_cisa_amendment'] == 'GOOD') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted for the Franken CISA amendment ',
            url: 'http://www.newsweek.com/senate-passes-controversial-cisa-bill-companies-share-cyber-security-387785'
        });
        score += inc;
    }
    if (politician['wyden_cisa_amendment'] == 'BAD') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted against the Wyden CISA amendment',
            url: 'http://www.freedomworks.org/content/key-vote-yes-wyden-amendment-strengthen-privacy-protections-cisa'
        });
        score += inc;
    }
    else if (politician['wyden_cisa_amendment'] == 'GOOD') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted for the Wyden CISA amendment ',
            url: 'http://www.freedomworks.org/content/key-vote-yes-wyden-amendment-strengthen-privacy-protections-cisa'
        });
        score += inc;
    }
    if (politician['heller_cisa_amendment'] == 'BAD') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted against the Heller CISA amendment',
            url: 'https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/'
        });
        score += inc;
    }
    else if (politician['heller_cisa_amendment'] == 'GOOD') {
        const inc = 1;

        score_criteria.push({
            score: inc,
            info: 'Voted for the Heller CISA amendment ',
            url: 'https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/'
        });
        score += inc;
    }
    if (politician['coons_cisa_amendment'] == 'BAD') {
        const inc = -1;
        score_criteria.push({
            score: inc,
            info: 'Voted against the Coons CISA amendment',
            url: 'https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/'
        });
        score += inc;
    }
    else if (politician['coons_cisa_amendment'] == 'GOOD') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Voted for the Coons CISA amendment ',
            url: 'https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/'
        });
        score += inc;
    }
    if (politician['cotton_cisa_amendment'] == 'BAD') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted for the Cotton CISA amendment',
            url: 'https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/'
        });
        score += inc;
    }
    else if (politician['cotton_cisa_amendment'] == 'GOOD') {
        const inc = 1;

        score_criteria.push({
            score: inc,
            info: 'Voted against the Cotton CISA amendment ',
            url: 'https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/'
        });
        score += inc;
    }
    if (politician['cisa_final'] == 'BAD') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted for CISA in the final vote',
            url: 'http://www.vox.com/platform/amp/2015/10/21/9587190/cisa-senate-privacy-nsa'
        });
        score += inc;
    }
    else if (politician['cisa_final'] == 'GOOD') {
        const inc = 4;

        score_criteria.push({
            score: inc,
            info: 'Voted against CISA in the final vote ',
            url: 'http://www.vox.com/platform/amp/2015/10/21/9587190/cisa-senate-privacy-nsa'
        });
        score += inc;
    }
    if (politician['s_139'] == 'Yes') {
        let inc = -4;
        let url = 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=115&session=2&vote=00012';
        let info = 'Voted for cloture on bill extending Section 702 mass surveillance powers'
        if (politician.organization === 'House') {
            inc = 4;
            url = 'http://clerk.house.gov/evs/2018/roll014.xml';
            info = 'Voted for the USA RIGHTS Act to rein in mass surveillance under Section 702 of the FISA Amendments Act';
        }
        score_criteria.push({
            score: inc,
            info: info,
            url: url
        });
        score += inc;
    }
    else if (politician['s_139'] == 'No') {
        let inc = 4;
        let url = 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=115&session=2&vote=00012';
        let info = 'Voted against cloture on bill extending Section 702 mass surveillance powers'
        if (politician.organization === 'House') {
            inc = -4;
            url = 'http://clerk.house.gov/evs/2018/roll014.xml';
            info = 'Voted against the USA RIGHTS Act to rein in mass surveillance under Section 702 of the FISA Amendments Act';
        }
        score_criteria.push({
            score: inc,
            info: info,
            url: url
        });
        score += inc;
    }
    if (politician['fbi_search'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted in Judiciary Committee for the USA Liberty Act amendment to close the FBI backdoor search loophole',
            url: 'https://docs.house.gov/meetings/JU/JU00/20171108/106622/CRPT-115-JU00-Vote001-20171108.pdf'
        });
        score += inc;
    }
    else if (politician['fbi_search'] == 'No') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted in Judiciary Committee against the USA Liberty Act amendment to close the FBI backdoor search loophole',
            url: 'https://docs.house.gov/meetings/JU/JU00/20171108/106622/CRPT-115-JU00-Vote001-20171108.pdf'
        });
        score += inc;
    }
    if (politician['query_warrant'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted in Intelligence Committee for the FARA amendment to require warrant before querying Section 702 data',
            url: 'https://congress.gov/congressional-report/115th-congress/senate-report/182/1?q=%7B%22search%22%3A%5B%22billOriginalCosponsor%3AW000437%22%2C%22billOriginalCosponsor%3AW000437%22%5D%7D'
        });
        score += inc;
    }
    else if (politician['query_warrant'] == 'No') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted in Intelligence Committee against the FARA amendment to require warrant before querying Section 702 data',
            url: 'https://congress.gov/congressional-report/115th-congress/senate-report/182/1?q=%7B%22search%22%3A%5B%22billOriginalCosponsor%3AW000437%22%2C%22billOriginalCosponsor%3AW000437%22%5D%7D'
        });
        score += inc;
    }
    if (politician['fara'] == 'Yes') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted in Intelligence Committee to report FARA to floor',
            url: 'https://congress.gov/congressional-report/115th-congress/senate-report/182/1?q=%7B%22search%22%3A%5B%22billOriginalCosponsor%3AW000437%22%2C%22billOriginalCosponsor%3AW000437%22%5D%7D'
        });
        score += inc;
    }
    else if (politician['fara'] == 'No') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted in Intelligence Committee to not report FARA to floor',
            url: 'https://congress.gov/congressional-report/115th-congress/senate-report/182/1?q=%7B%22search%22%3A%5B%22billOriginalCosponsor%3AW000437%22%2C%22billOriginalCosponsor%3AW000437%22%5D%7D'
        });
        score += inc;
    }
    if (politician['h_r_2740'] == 'Aye') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted to add prohibitions on NSA reverse targeting to 2018 appropriations',
            url: 'https://clerk.house.gov/evs/2019/roll345.xml'
        });
        score += inc;
    }
    else if (politician['h_r_2740'] == 'No') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted not to add prohibitions on NSA reverse targeting to 2018 appropriations',
            url: 'https://clerk.house.gov/evs/2019/roll345.xml'
        });
        score += inc;
    }
    if (politician['biometric'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Sponsored legislation to prohibit biometric recognition in most public and assisted housing',
            url: 'http://dearcolleague.us/2019/07/cosponsor-the-no-biometric-barriers-to-housing-act-of-2019-2/'
        });
        score += inc;
    }
    if (politician['s2939'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Filed or cosponsored S. 2939, ending NSA call detail records program',
            url: 'https://www.congress.gov/bill/116th-congress/senate-bill/2939/cosponsors'
        });
        score += inc;
    }
    if (politician['sapra'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: "Sponsored or cosponsored the Safeguarding Americans' Private Records Act to neuter PATRIOT Act mass surveillance",
            url: 'https://www.congress.gov/bill/116th-congress/senate-bill/3242/cosponsors?q={%22search%22:[%22safeguarding%22]}&r=15&s=2&searchResultViewType=expanded&KWICView=false'
        });
        score += inc;
    }
    if (politician['sapra2'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: "Sponsored or cosponsored the Safeguarding Americans' Private Records Act to neuter PATRIOT Act mass surveillance",
            url: 'https://www.congress.gov/bill/116th-congress/house-bill/5675/cosponsors?q={%22search%22:[%22safeguarding+private%22]}&r=1&s=4&searchResultViewType=expanded&KWICView=false'
        });
        score += inc;
    }
    if (politician['s3420'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Sponsored or cosponsored improvements to FISC amicus processes',
            url: 'https://www.congress.gov/bill/116th-congress/senate-bill/3420/cosponsors?q={%22search%22:[%22lee%22]}&r=2&s=7&searchResultViewType=expanded&KWICView=false'
        });
        score += inc;
    }
    if (politician['h_r_6172'] == 'Yes') {
        const inc = -2;
        let url = 'http://clerk.house.gov/evs/2020/roll098.xml'
        if (politician.organization === 'Senate') {
            url = 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00092'
        }
        score_criteria.push({
            score: inc,
            info: 'Supported renewal of PATRIOT Act surveillance powers with cosmetic reforms',
            url: url
        });
        score += inc;
    } else if (politician['h_r_6172'] == 'No') {
        const inc = +2;
        let url = 'http://clerk.house.gov/evs/2020/roll098.xml'
        if (politician.organization === 'Senate') {
            url = 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00092'
        }
        score_criteria.push({
            score: inc,
            info: 'Opposed renewal of PATRIOT Act surveillance powers with cosmetic reforms',
            url: url
        });
        score += inc;
    }
    if (politician['earn'] == 'Yes') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Sponsored or cosponsored the EARN IT Act, which would enable the federal government to muscle private firms into not providing end-to-end encryption',
            url: 'https://www.congress.gov/bill/116th-congress/senate-bill/3398/cosponsors?q={%22search%22:[%22earn+it+act%22]}&r=1&s=9&searchResultViewType=expanded&KWICView=false'
        });
        score += inc;
    }
    if (politician['sa1583'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted for amendment to prohibit FBI collection of web browsing history without a warrant',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00089'
        });
        score += inc;
    } else if (politician['sa1583'] == 'No') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted against amendment to prohibit FBI collection of web browsing history without a warrant',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00089'
        });
        score += inc;
    }
    if (politician['sa1584'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted for improving FISA Court transparency by requiring civil liberties amicus in most situations',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00090'
        });
        score += inc;
    } else if (politician['sa1584'] == 'No') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted against improving FISA Court transparency by requiring civil liberties amicus in most situations',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00090'
        });
        score += inc;
    }
    if (politician['sa1586'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted for prohibiting use of Executive Order 12,333-derived information in prosecutions of US persons',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00091'
        });
        score += inc;
    } else if (politician['sa1586'] == 'No') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted against prohibiting use of Executive Order 12,333-derived information in prosecutions of US persons',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00091'
        });
        score += inc;
    }
    if (politician['h_r_7984'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Supports requiring internal civil liberties review of DHS intelligence products before circulation",
            url: 'https://www.congress.gov/bill/116th-congress/house-bill/7984/cosponsors?r=5&s=1&searchResultViewType=expanded'
        });
        score += inc;
    }
    if (politician['s1265'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: "Original cosponsor of the Wyden-Daines 'Fourth Amendment Is Not For Sale Act'",
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/1265/cosponsors?searchResultViewType=expanded'
        });
        score += inc;
    }
    if (politician['uspisspa'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Original cosponsor of bill to end covert internet surveillance by US Postal Intelligence Service",
            url: 'https://gaetz.house.gov/media/press-releases/congressman-matt-gaetz-leads-9-lawmakers-push-abolish-uspis-s-internet-covert'
        });
        score += inc;
    }
    if (politician['s1423'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Supports requiring tech companies to give children an easy way to erase the data held on them.",
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/1423/cosponsors?r=73&s=1'
        });
        score += inc;
    }
    if (politician['hr3707'] == 'Yes') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored a toothless bill, the "No Trace Act", that exempts intelligence services from any limits on warrantless acquisition of datasets.',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/3707/cosponsors'
        });
        score += inc;
    }
    if (politician['hr4350'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted YES to restrict "1033" military equipment going to police departments.',
            url: 'https://clerk.house.gov/Votes/2021281'
        });
        score += inc;
    } else if (politician['hr4350'] == 'No') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted NO to restrict "1033" military equipment going to police departments.',
            url: 'https://clerk.house.gov/Votes/2021281'
        });
        score += inc;
    }
    if (politician['hr5524'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored bill protecting US persons\' devices from warrantless searches at the "border".',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/5524/cosponsors'
        });
        score += inc;
    }
    if (politician['s2957'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored bill protecting US persons\' devices from warrantless searches at the "border".',
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/2957/cosponsors'
        });
        score += inc;
    }
    if (politician['hr6006'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Opposes intrusive financial surveillance of cryptocurrency users.',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/6006/cosponsors'
        });
        score += inc;
    }
    if (politician['s3343'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Supports US citizens being allowed to sue federal government agents for deprivation of rights.',
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/3343/cosponsors'
        });
        score += inc;
    }
    if (politician['hr6185'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Supports US citizens being allowed to sue federal government agents for deprivation of rights.',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/6185/cosponsors'
        });
        score += inc;
    }
    if (politician['hr8454'] == 'Yes') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored the EARN-IT Act, which would force internet services to give police access to decrypted user data.',
            url: 'https://www.congress.gov/bill/116th-congress/house-bill/8454/cosponsors'
        });
        score += inc;
    } else if (politician['hr6544'] == 'Yes') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored the EARN-IT Act, which would force internet services to give police access to decrypted user data.',
            url: 'https://www.govtrack.us/congress/bills/117/hr6544/cosponsors'
        });
        score += inc;
    }
    if (politician['s3398'] == 'Yes') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored the EARN-IT Act, which would force internet services to give police access to decrypted user data.',
            url: 'https://www.congress.gov/bill/116th-congress/senate-bill/3398/cosponsors'
        });
        score += inc;
    } else if (politician['s3538'] == 'Yes') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored the EARN-IT Act, which would force internet services to give police access to decrypted user data.',
            url: 'https://www.govtrack.us/congress/bills/117/s3538/cosponsors'
        });
        score += inc;
    }
    if (politician['hr6877'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Original cosponsor of legislation to restrict no-knock and night-time police raids',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/6877/cosponsors'
        });
        score += inc;
    }
    if (politician['s3668'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Original cosponsor of legislation to ban IRS use of facial recognition',
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/3668/cosponsors'
        });
        score += inc;
    }
    if (politician['hr350'] == 'Yes') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted for bill expanding domestic surveillance capabilities of DHS and FBI',
            url: 'https://clerk.house.gov/Votes/2022221'
        });
        score += inc;
    }
    if (politician['hr350'] == 'No') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted against bill expanding domestic surveillance capabilities of DHS and FBI',
            url: 'https://clerk.house.gov/Votes/2022221'
        });
        score += inc;
    }
    if (politician['hr7072'] == 'Yes') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored the NDO Fairness Act, a bill to improve government surveillance order transparency',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/7072/cosponsors'
        });
        score += inc;
    }
    if (politician['hr7214'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Cosponsored the Government Surveillance Transparency Act, a bill to significantly improve government surveillance order transparency',
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/7214/cosponsors'
        });
        score += inc;
    }
    if (politician['s4647'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Supported bill to protect drivers against technology mandate that would unconstitutionally impose breath searches as a condition of driving',
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/4647/cosponsors'
        });
        score += inc;
    }
    if (politician['hr8173'] == 'Yes') {
        const inc = 5;
        score_criteria.push({
            score: inc,
            info: "Supported 'Fourth Amendment Restoration Act', requiring warrants for surveillance of US citizens and prohibiting parallel construction",
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/8173/cosponsors'
        });
        score += inc;
    }
    if (politician['hr9061'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Cosponsored warrants for law enforcement use of facial recognition",
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/9061/cosponsors'
        });
        score += inc;
    }
    if (politician['hr3907'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: "Cosponsored a bill that would impose a moratorium on law enforcement use of facial recognition technology",
            url: 'https://www.congress.gov/bill/117th-congress/house-bill/3907/cosponsors'
        });
        score += inc;
    }
    if (politician['s2052'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: "Cosponsored a bill that would impose a moratorium on law enforcement use of facial recognition technology",
            url: 'https://www.congress.gov/bill/117th-congress/senate-bill/2052/cosponsors'
        });
        score += inc;
    }
    if (politician['s686'] == 'Yes') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: "Cosponsored or voted for the RESTRICT Act, which would give expansive authority to the US government to ban apps on national security grounds, seize phones used to access them, and impose criminal penalties for using VPNs to access them.",
            url: 'https://www.congress.gov/bill/118th-congress/senate-bill/686/cosponsors'
        });
        score += inc;
    }
    if (politician['s1199'] == 'Yes') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: "Cosponsored bill that would pressure tech companies to scan for CSAM, even by breaking user encryption, and by doing so, would trigger 4A warrant requirement for currently voluntary searches.",
            url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1199/cosponsors'
        });
        score += inc;
    }
    if (politician['s1409'] == 'Yes') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: "Cosponsored bill that would remove liability shield for tech companies that host content any state attorney-general disapproves of.",
            url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1409/cosponsors'
        });
        score += inc;
    }
    if (politician['s1080'] == 'Yes') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: "Cosponsored bill that would pressure tech companies to censor drug-related content online.",
            url: 'https://www.congress.gov/bill/118th-congress/senate-bill/1080/cosponsors'
        });
        score += inc;
    }
    if (politician['hr5309'] == 'Yes') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: "Cosponsored a bill that would limit government's access to electronic communications, including those over 180 days old.",
            url: 'https://www.congress.gov/bill/118th-congress/house-bill/5309/cosponsors'
        });
        score += inc;
    }
    if (politician['hr5311'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: "Cosponsored a bill that would protect sale and use of encryption products and bar states from requiring reconfiguration of encrypted services to enable law enforcement access.",
            url: 'https://www.congress.gov/bill/118th-congress/house-bill/5311/cosponsors'
        });
        score += inc;
    }
    if (politician['hr5331'] == 'Yes') {
        const inc = 1;
        score_criteria.push({
            score: inc,
            info: "Cosponsored a bill that would require disclosure of surveillance to individuals surveilled.",
            url: 'https://www.congress.gov/bill/118th-congress/house-bill/5331/cosponsors'
        });
        score += inc;
    }
    if (politician['hr5442'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: "Consolidates within DOD the operation of armed government drones.",
            url: 'https://www.congress.gov/bill/118th-congress/house-bill/5442/cosponsors'
        });
        score += inc;
    }
    if (politician['hr895'] == 'Yes') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: "Cosponsored bill creating DHS office to counter shoplifting and expanding forfeitures.",
            url: 'https://www.congress.gov/bill/118th-congress/house-bill/895/cosponsors'
        });
        score += inc;
    }
    if (politician['hr6262'] == 'Yes') {
        const inc = 10;
        score_criteria.push({
            score: inc,
            info: "Cosponsored the Government Surveillance Reform Act, which would prohibit warrantless queries of U. S. persons, and incorporate every major surveillance reform proposed from 2013-2023",
            url: 'https://www.congress.gov/bill/118th-congress/house-bill/6262/cosponsors'
        });
        score += inc;
    }
    if (politician['s3234'] == 'Yes') {
        const inc = 10;
        score_criteria.push({
            score: inc,
            info: "Cosponsored the Government Surveillance Reform Act, which would prohibit warrantless queries of U. S. persons, and incorporate every major surveillance reform proposed from 2013-2023",
            url: 'https://www.congress.gov/bill/118th-congress/senate-bill/3234/cosponsors'
        });
        score += inc;
    }
    if (politician['hr4820'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Voted for amendment to remove requirement for all new cars to have remote killswitches by 2025",
            url: 'https://clerk.house.gov/evs/2023/roll616.xml'
        });
        score += inc;
    } else if (politician['hr4820'] == 'No') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: "Voted against amendment to remove requirement for all new cars to have remote killswitches by 2025",
            url: 'https://clerk.house.gov/evs/2023/roll616.xml'
        });
        score += inc;
    }
    if (politician['hr2670'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Voted to prevent straight reauthorization of FISA Section 702 to the 2023 NDAA",
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1181/vote_118_1_00342.htm'
        });
        score += inc;
    }
    if (politician['s3961'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Cosponsored the Security and Freedom Enhancement Act of 2024",
            url: 'https://www.congress.gov/bill/118th-congress/senate-bill/3961/cosponsors'
        });
        score += inc;
    }
    if (politician['hr6570'] == 'Yes') {
        const inc = 7;
        score_criteria.push({
            score: inc,
            info: "Voted for the Protect Liberty and End Warrantless Surveillance Act in the Judiciary Committee",
            url: 'https://www.congress.gov/congressional-report/118th-congress/house-report/307'
        });
        score += inc;
    } else if (politician['hr6570'] == 'No') {
        const inc = -7;
        score_criteria.push({
            score: inc,
            info: "Voted against the Protect Liberty and End Warrantless Surveillance Act in the Judiciary Committee",
            url: 'https://www.congress.gov/congressional-report/118th-congress/house-report/307'
        });
        score += inc;
    }
    if (politician['hr7888_114'] == 'Yes') {
        const inc = 7;
        score_criteria.push({
            score: inc,
            info: 'Voted for a warrant by default for FISA Section 702 queries for US persons',
            url: 'https://clerk.house.gov/Votes/2024114'
        });
        score += inc;
    } else if (politician['hr7888_114'] == 'No') {
        const inc = -10;
        score_criteria.push({
            score: inc,
            info: 'Voted against a warrant by default for FISA Section 702 queries for US persons',
            url: 'https://clerk.house.gov/Votes/2024114'
        });
        score += inc;
    }
    if (politician['hr7888_116'] == 'Yes') {
        const inc = -3;
        score_criteria.push({
            score: inc,
            info: 'Voted for permitting FISA Section 702 queries for international conversations involving "precursors" of illegal drugs that lead to overdoses, including Sudafed and Adderall',
            url: 'https://clerk.house.gov/Votes/2024116'
        });
        score += inc;
    } else if (politician['hr7888_116'] == 'No') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: 'Voted against permitting FISA Section 702 queries for international conversations involving "precursors" of illegal drugs that lead to overdoses, including Sudafed and Adderall',
            url: 'https://clerk.house.gov/Votes/2024116'
        });
        score += inc;
    }
    if (politician['hr7888_117'] == 'Yes') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted for permitting FISA Section 702 queries of visitors and immigrants',
            url: 'https://clerk.house.gov/Votes/2024117'
        });
        score += inc;
    } else if (politician['hr7888_117'] == 'No') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted against permitting FISA Section 702 queries of visitors and immigrants',
            url: 'https://clerk.house.gov/Votes/2024117'
        });
        score += inc;
    }
    if (politician['hr7888_118'] == 'Yes') {
        const inc = -5;
        score_criteria.push({
            score: inc,
            info: 'Voted for expanding secret surveillance of data centers and commercial tenants ("PATRIOT Act 2.0")',
            url: 'https://clerk.house.gov/Votes/2024118'
        });
        score += inc;
    } else if (politician['hr7888_118'] == 'No') {
        const inc = 5;
        score_criteria.push({
            score: inc,
            info: 'Voted against expanding secret surveillance of data centers and commercial tenants ("PATRIOT Act 2.0")',
            url: 'https://clerk.house.gov/Votes/2024118'
        });
        score += inc;
    }
    if (politician['hr7888_119'] == 'Yes') {
        const inc = -5;
        score_criteria.push({
            score: inc,
            info: 'Voted for final passage of the Reforming Intelligence and Securing America Act',
            url: 'https://clerk.house.gov/Votes/2024119'
        });
        score += inc;
    } else if (politician['hr7888_119'] == 'No') {
        const inc = 5;
        score_criteria.push({
            score: inc,
            info: 'Voted against final passage of the Reforming Intelligence and Securing America Act',
            url: 'https://clerk.house.gov/Votes/2024119'
        });
        score += inc;
    }
    if (politician['sa1829'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted for the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00144.htm'
        });
        score += inc;
    } else if (politician['sa1829'] == 'No') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted against the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00144.htm'
        });
        score += inc;
    }
    if (politician['sa1820'] == 'Yes') {
        const inc = 3;
        score_criteria.push({
            score: inc,
            info: "Voted for the removal of the ECSP \"Make Everyone A Spy\" amendment, which substantially expands the NSA's power to secretly compel private companies to produce information on US persons using their networks",
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00146.htm'
        });
        score += inc;
    } else if (politician['sa1820'] == 'No') {
        const inc = -10;
        score_criteria.push({
            score: inc,
            info: "Voted against the removal of the ECSP \"Make Everyone A Spy\" amendment, which substantially expands the NSA's power to secretly compel private companies to produce information on US persons using their networks",
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00146.htm'
        });
        score += inc;
    }
    if (politician['sa1841'] == 'Yes') {
        const inc = 7;
        score_criteria.push({
            score: inc,
            info: 'Voted for final requiring a warrant in order for the FBI to access the full contents of a communication resulting from a FISA Section 702 query involving a US person',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00148.htm'
        });
        score += inc;
    } else if (politician['sa1841'] == 'No') {
        const inc = -10;
        score_criteria.push({
            score: inc,
            info: 'Voted against final requiring a warrant in order for the FBI to access the full contents of a communication resulting from a FISA Section 702 query involving a US person',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00148.htm'
        });
        score += inc;
    }
    if (politician['sa1840'] == 'Yes') {
        const inc = 2;
        score_criteria.push({
            score: inc,
            info: 'Voted for improvements to FISC amicus processes',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00149.htm'
        });
        score += inc;
    } else if (politician['sa1840'] == 'No') {
        const inc = -2;
        score_criteria.push({
            score: inc,
            info: 'Voted against improvements to FISC amicus processes',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00149.htm'
        });
        score += inc;
    }
    if (politician['hr7888_s'] == 'Yes') {
        const inc = -13;
        score_criteria.push({
            score: inc,
            info: 'Voted for final passage of RISAA, a bill reauthorizing and expanding government surveillance under FISA till 2026',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00150.htm'
        });
        score += inc;
    } else if (politician['hr7888_s'] == 'No') {
        const inc = 10;
        score_criteria.push({
            score: inc,
            info: 'Voted against final passage of RISAA, a bill reauthorizing and expanding government surveillance under FISA till 2026',
            url: 'https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00150.htm'
        });
        score += inc;
    }
    if (politician['hr4639'] == 'Yes') {
        const inc = 4;
        score_criteria.push({
            score: inc,
            info: 'Voted for the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly',
            url: 'https://clerk.house.gov/Votes/2024136'
        });
        score += inc;
    } else if (politician['hr4639'] == 'No') {
        const inc = -4;
        score_criteria.push({
            score: inc,
            info: 'Voted against the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly',
            url: 'https://clerk.house.gov/Votes/2024136'
        });
        score += inc;
    }

    return {
        score: score,
        grade: getScoreGrade(score, politician, score_criteria),
        score_criteria: score_criteria
    }
}
