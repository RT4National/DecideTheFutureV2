type Scoring = {
    value: string;
    score: number;
    organization?: string;
    addText?: string;
    info?: string;
    url?: string;
};

type Rule = {
    key: string;
    googleSheetIndex: number;
    display?: string;
    info: string;
    url: string;
    scoring: Scoring[];
};

type CongressData = {
    date: string;
    rules: Rule[];
};

export const Congress: { [key: string]: CongressData} = {
    "113th": {
        date: "2013-14",
        rules: [
            {
                key: "s_1551_iosra",
                googleSheetIndex: 26,
                display: "Sponsored or cosponsored S. 1551, IOSRA (Yes=+4)", // 'display string' is displayed in Scoring System. It is for special case when 'info string' is different with 'displayed string'.
                info: "Supported the Intelligence Oversight and Surveillance Reform Act", // if 'display string' doesn't exist, 'info string' is displayed in Scoring System
                url: "https://cdt.org/blog/bills-offer-clear-choice-end-bulk-collection-of-americans%E2%80%99-data-or-endorse-it/",
                scoring: [
                    {
                        value: "X",
                        score: 4
                    }
                ]
            },
            {
                key: "fisa_improvements_act",
                googleSheetIndex: 27,
                display: "Sponsored or cosponsored FISA Improvements Act (Yes=-4)",
                info: "Supported the FISA Improvements Act",
                url: "http://www.theguardian.com/world/2013/nov/15/feinstein-bill-nsa-warrantless-searches-surveillance",
                scoring: [
                    {
                        value: "X",
                        score: -4
                    }
                ]
            },
            {
                key: "fisa_transparency_and_modernization_act",
                googleSheetIndex: 28,
                display: "Sponsored or cosponsored FISA Transparency & Modernization Act (Yes=-4)",
                info: "Supported the FISA Transparency and Modernization Act",
                url: "https://www.eff.org/deeplinks/2014/04/nsa-reform-bill-intelligence-community-written-intelligence-community-and",
                scoring: [
                    {
                        value: "X",
                        score: -4
                    }
                ]
            },
            {
                key: "surveillance_state_repeal_act",
                googleSheetIndex: 29,
                display: "Sponsored or cosponsored Surveillance State Repeal Act (2014 or 2015) (Yes=+4)",
                info: "Supported the Surveillance State Repeal Act",
                url: "http://www.restorethe4th.com/blog/go-big-or-go-home-pass-the-new-surveillance-state-repeal-act/",
                scoring: [
                    {
                        value: "X",
                        score: 4
                    }
                ]
            },
            {
                key: "usa_freedom_prior_to_20140518", // need to compare organization
                googleSheetIndex: 30,
                display: "Sponsored or cosponsored USA FREEDOM 2014 prior to 2014-05-18 (Yes=+3)*Before this date, USA FREEDOM was a substantially stronger piece of legislation, meriting +2 rather than +1.",
                info: "Supported the original USA Freedom Act (prior to May 18th, 2014)",
                url: "https://www.eff.org/deeplinks/2014/07/new-senate-usa-freedom-act-first-step-towards-reforming-mass-surveillance",
                scoring: [
                    {   
                        value: "X",
                        organization: "Senate",
                        score: 3
                    },
                    {
                        value: "X",
                        organization: "House",
                        score: 1
                    }
                ]
            },
            {
                key: "voted_for_conyers_amash_amendment",
                googleSheetIndex: 31,
                info: "Voted for Conyers Amash Amendment",
                url: "http://americablog.com/2013/07/amash-conyers-anti-nsa-amendment-lost-by-12-votes-205-217.html",
                scoring: [
                    {
                        value: "X",
                        score: 4
                    }
                ]
            },
            {
                key: "voted_for_house_version_of_usa_freedom_act_2014",
                googleSheetIndex: 32,
                info: "Voted for gutted House version of USA Freedom Act of 2014",
                url: "https://www.eff.org/deeplinks/2014/05/eff-dismayed-houses-gutted-usa-freedom-act",
                scoring: [
                    {
                        value: "X",
                        score: -2
                    }
                ]
            },
            {
                key: "voted_for_massie_lofgren_amendment_2014",
                googleSheetIndex: 33,
                info: "Voted for Massie-Lofgren Amendment (2014)",
                url: "http://www.huffingtonpost.com/2014/12/10/nsa-surveillance-spending-bill_n_6304834.html",
                scoring: [
                    {
                        value: "X",
                        score: 3
                    }
                ]
            }                                             
        ]
    },

    "114th": {
        date: "2015-16",
        rules: [
            {
                key: "whistleblower_protection_for_ic_employees_contractors",
                googleSheetIndex: 34,
                info: "Supported whistleblower protection measures for Intelligence employees and contractors",
                url: "http://whistleblower.org/blog/121230-49-orgs-call-congress-restore-whistleblower-rights-intelligence-contractors",
                scoring: [
                    {
                        value: "X",
                        score: 4
                    }
                ]
            },    
            {
                key: "first_usaf_cloture_vote",
                googleSheetIndex: 35,
                display: '1st USA FREEDOM 2015 cloture vote (Yes=+1, No=+4 or =-4= conditional on "straight reauth" vote)',
                info: "X", // if every score has different 'info string', parent 'info string' is 'X' 
                url: "X", // if every score has different 'url string', parent 'url string' is 'X' 
                scoring: [
                    {
                        value: "GOOD",
                        score: 4,
                        info: "Voted NO on reauthorizing the PATRIOT Act *and* NO on cloture for the first Senate USA Freedom Act",
                        url: 'http://www.thewhir.com/web-hosting-news/senate-votes-to-invoke-cloture-on-usa-freedom-act-advancing-it-to-an-amendment-process'
                    },
                    {
                        value: "OK",
                        score: -1,
                        info: 'Voted NO on reauthorizing the PATRIOT Act *and* YES on cloture for the first Senate USA Freedom Act',
                        url: 'http://www.thewhir.com/web-hosting-news/senate-votes-to-invoke-cloture-on-usa-freedom-act-advancing-it-to-an-amendment-process'
                    },
                    {
                        value: "BAD",
                        score: -4,
                        info: 'Voted YES on reauthorizing the PATRIOT Act and NO on the first USA Freedom Act cloture vote',
                        url: 'http://thehill.com/policy/national-security/242173-mcconnell-introduces-short-term-nsa-bill'
                    }
                ]
            },    
            {
                key: "straight_reauth",
                googleSheetIndex: 36,
                info: "on reauthorizing the PATRIOT Act",
                url: "X",
                scoring: [
                    {
                        value: "BAD",
                        score: -3,
                        addText: "Voted YES ",
                        url: 'https://cdt.org/insight/oppose-senator-feinsteins-fisa-reform-act-of-2015/'
                    },                              
                    {
                        value: "GOOD",
                        score: 3,
                        addText: "Voted NO ",
                        url: 'http://thehill.com/policy/national-security/242173-mcconnell-introduces-short-term-nsa-bill'
                    }          
                ]
            },    
            {
                key: "fisa_reform_act",
                googleSheetIndex: 37,
                info: "Supported the FISA Reform Act",
                url: "https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act",
                scoring: [
                    {
                        value: "X",
                        score: -3
                    }
                ]
            },    
            {
                key: "amendment_1449_data_retention",
                googleSheetIndex: 38,
                info: "on USA Freedom data retention amendment (1449)",
                url: "https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act",
                scoring: [
                    {
                        value: "BAD",
                        score: -3,
                        addText: "Voted YES "
                    },               
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted NO "
                    }                    
                ]
            },    
            {
                key: "amendment_1450_extend_implementation_to_1yr",
                googleSheetIndex: 39,
                info: "on amendment 1450 extending implementation of USA Freedom Act by 1 year",
                url: "https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act",
                scoring: [
                    {
                        value: "BAD",
                        score: -2,
                        addText: "Voted YES "
                    },               
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted NO "
                    }
                ]
            },    
            {
                key: "amendment_1451_gut_amicus",
                googleSheetIndex: 40,
                info: "on amendment 1451 to gut amicus proceedings",
                url: "https://www.eff.org/deeplinks/2015/06/eff-opposes-amendments-weakening-usa-freedom-act",
                scoring: [
                    {
                        value: "BAD",
                        score: -3,
                        addText: "Voted YES"
                    },               
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted NO"
                    }
                ]
            },    
            {
                key: "final_passage_usaf",
                googleSheetIndex: 41,
                display: 'Final passage USA FREEDOM 2015 (Yes=+1, No=+4 or =-4 conditional on "straight reauth" vote)',
                info: "X",
                url: "X",
                scoring: [
                    {
                        value: "GOOD",
                        score: 4,
                        info: 'Voted NO on USA Freedom Act (final passage)',
                        url: "http://www.restorethe4th.com/blog/most-reps-voting-for-usa-freedom-were-opponents-of-surveillance-reform/"                        
                    },
                    {
                        value: "OK",
                        score: -1,
                        info: 'Voted YES on reforming bulk collection via USAF',
                        url: 'https://www.eff.org/deeplinks/2015/05/usa-freedom-act-passes-what-we-celebrate-what-we-mourn-and-where-we-go-here'                        
                    },
                    {
                        value: "BAD",
                        score: -4,
                        info: 'Voted NO on USA Freedom Act (final passage) and YES on extending the PATRIOT Act',
                        url: "http://www.restorethe4th.com/blog/most-reps-voting-for-usa-freedom-were-opponents-of-surveillance-reform/"                        
                    }
                ]
            },    
            {
                key: "massie_lofgren_amendment_to_hr2685_defund_702",
                googleSheetIndex: 43,
                info: "on Massie-Lofgren Amendment to HR2685: Defund Section 702 surveillance",
                url: "https://demandprogress.org/letter-of-support-for-massie-lofgren-amendment-to-the-department-of-defense-appropriations-act-of-2016-h-r-2685/",
                scoring: [
                    {
                        value: "GOOD",
                        score: 3,
                        addText: "Voted YES "
                    },
                    {
                        value: "BAD",
                        score: -3,
                        addText: "Voted NO "
                    }                    
                ]
            },    
            {
                key: "massie_lofgren_amendment_to_hr4870_no_backdoors",
                googleSheetIndex: 44,
                info: "on Massie-Lofgren Amendment to HR4870: Ban encryption backdoors",
                url: "https://shutthebackdoor.net/",
                scoring: [
                    {
                        value: "GOOD",
                        score: 3,
                        addText: "Voted YES "
                    },
                    {
                        value: "BAD",
                        score: -3,
                        addText: "Voted NO "
                    }
                ]
            },    
            {
                key: "ECPA_reform_cosponsor",
                googleSheetIndex: 45,
                info: "Co-Sponsor of Electronic Communication Privacy Act Reform",
                url: "https://www.eff.org/deeplinks/2015/09/senate-judiciary-committee-finally-focuses-ecpa-reform",
                scoring: [
                    {
                        value: "GOOD",
                        score: 1
                    }
                ]
            },    
            {
                key: "house_PCNA",
                googleSheetIndex: 46,
                info: "the Protecting Cyber Networks Act",
                url: "https://www.eff.org/deeplinks/2015/04/eff-congress-stop-cybersurveillance-bills",
                scoring: [
                    {
                        value: "BAD",
                        score: -2,
                        addText: "Voted for "
                    },
                    {
                        value: "GOOD",
                        score: 2,
                        addText: "Voted against "
                    }                    
                ]
            },   
            {
                key: "house_NCPA",
                googleSheetIndex: 47,
                info: "National Cybersecurity Protection Advancement Act",
                url: "http://techcrunch.com/2015/04/23/house-passes-complementary-cyber-information-sharing-bill/",
                scoring: [
                    {
                        value: "BAD",
                        score: -1,
                        addText: "Voted for "
                    },
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted against "
                    }
                ]
            },   
             
            {
                key: "CISA_cloture_vote",
                googleSheetIndex: 48,
                info: "CISA Cloture Vote",
                url: "X",
                scoring: [
                    {
                        value: "BAD",
                        score: -2,
                        addText: "Voted for ",
                        url: 'http://www.slate.com/articles/technology/future_tense/2015/10/stopcisa_the_cybersecurity_information_sharing_act_is_a_disaster.html'
                    },
                    {
                        value: "GOOD",
                        score: 2,
                        addText: "Voted against ",
                        url: 'http://www.slate.com/articles/technology/future_tense/2015/10/stopcisa_the_cybersecurity_information_sharing_act_is_a_disasteecpareformcosponsorr.html'
                    }
                ]
            },     
            {
                key: "franken_cisa_amendment",
                googleSheetIndex: 49,
                display: "Senate vote on Franken amendment to CISA (narrowing definition of cybersecurity threat) (Yes=+2/No=-1)",
                info: "the Franken CISA amendment",
                url: "http://www.newsweek.com/senate-passes-controversial-cisa-bill-companies-share-cyber-security-387785",
                scoring: [
                    {
                        value: "GOOD",
                        score: 2,
                        addText: "Voted for "
                    },                                   
                    {
                        value: "BAD",
                        score: -1,
                        addText: "Voted against "
                    }
                ]
            },    
            {
                key: "wyden_cisa_amendment",
                googleSheetIndex: 50,
                display: "Senate vote on Wyden amendment to CISA (companies must scrub personal data) (Yes=+2/No=-1)",
                info: "the Wyden CISA amendment",
                url: "http://www.freedomworks.org/content/key-vote-yes-wyden-amendment-strengthen-privacy-protections-cisa",
                scoring: [
                    {
                        value: "GOOD",
                        score: 2,
                        addText: "Voted for "
                    },                
                    {
                        value: "BAD",
                        score: -1,
                        addText: "Voted against "
                    }                   
                ]
            },    
            {
                key: "heller_cisa_amendment",
                googleSheetIndex: 51,
                display: "Senate vote on Heller amendment to CISA (DHS must scrub personal data) (Yes=+1/No=-1)",
                info: "the Heller CISA amendment",
                url: "https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/",
                scoring: [
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted for "
                    },                
                    {
                        value: "BAD",
                        score: -1,
                        addText: "Voted against "
                    }                   
                ]
            },    
            {
                key: "coons_cisa_amendment",
                googleSheetIndex: 52,
                display: "Senate vote on Coons amendment to CISA (limit information sharing to that necessary to describe or identify a cybersecurity threat) (Yes=+1/No=-1)",
                info: "the Coons CISA amendment",
                url: "https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/",
                scoring: [
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted for "
                    },               
                    {
                        value: "BAD",
                        score: -1,
                        addText: "Voted against "
                    }
                ]
            },    
            {
                key: "cotton_cisa_amendment",
                googleSheetIndex: 53,
                display: "Senate vote on Cotton amendment (removes liability for bypassing DHS to share data with FBI and Secret Service) (Yes=-2/No=+1)",
                info: "the Cotton CISA amendment",
                url: "https://cdt.org/blog/guide-to-cybersecurity-information-sharing-act-amendments/",
                scoring: [
                    {
                        value: "BAD",
                        score: -2,
                        addText: "Voted for "
                    },
                    {
                        value: "GOOD",
                        score: 1,
                        addText: "Voted against "
                    }
                ]
            }
        ]
    },

    "115th": {
        date: "2017-18",
        rules: [
            {
                key: "fbi_search",
                googleSheetIndex: 60,
                display: "House vote in Judiciary Committee to amend the USA Liberty Act to close the FBI backdoor search loophole (Yes=+2/No=-2)",
                info: "the USA Liberty Act amendment to close the FBI backdoor search loophole",
                url: "https://docs.house.gov/meetings/JU/JU00/20171108/106622/CRPT-115-JU00-Vote001-20171108.pdf",
                scoring: [
                    {
                        value: "Yes",
                        score: 2,
                        addText: "Voted in Judiciary Committee for "
                    },
                    {
                        value: "No",
                        score: -2,
                        addText: "Voted in Judiciary Committee against "
                    }
                ]
            },
            {
                key: "query_warrant",
                googleSheetIndex: 61,
                display: "Senate vote in Intelligence Committee to amend FARA to require warrant before querying Section 702 data (Yes=+2/No=-2)",
                info: "the FARA amendment to require warrant before querying Section 702 data",
                url: "https://congress.gov/congressional-report/115th-congress/senate-report/182/1?q=%7B%22search%22%3A%5B%22billOriginalCosponsor%3AW000437%22%2C%22billOriginalCosponsor%3AW000437%22%5D%7D",
                scoring: [
                    {
                        value: "Yes",
                        score: 2,
                        addText: "Voted in Intelligence Committee for "
                    },
                    {
                        value: "No",
                        score: -2,
                        addText: "Voted in Intelligence Committee against "
                    }
                ]
            },
            {
                key: "s_139",            // needs to compare organization. for Senate
                googleSheetIndex: 59,
                display: "Senate vote for/against cloture on bill extending Section 702 mass surveillance powers (Yes=+4/No=-4)",
                info: "cloture on bill extending Section 702 mass surveillance powers",
                url: "https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=115&session=2&vote=00012",
                scoring: [
                    {
                        value: "YES",
                        score: -4,
                        organization: "Senate",
                        addText: "Voted for ",
                    },
                    {
                        value: "NO",
                        score: 4,
                        organization: "Senate",
                        addText: "Voted against"
                    }                    
                ]
            },
            {
                key: "s_139",            // for House
                googleSheetIndex: 59,
                display: "House vote for/against the USA RIGHTS Act to rein in mass surveillance under Section 702 of the FISA Amendments Act (Yes=+4/No=-4)",
                info: "the USA RIGHTS Act to rein in mass surveillance under Section 702 of the FISA Amendments Act",
                url: "http://clerk.house.gov/evs/2018/roll014.xml",
                scoring: [
                    {
                        value: "YES",
                        score: 4,
                        organization: "House",
                        addText: "Voted for ",
                    },
                    {
                        value: "NO",
                        score: -4,
                        organization: "House",
                        addText: "Voted against"
                    }                    
                ]
            },
            {
                key: "fara",
                googleSheetIndex: 62,
                display: "Voted in Intelligence Committee to report FARA to floor (Yes=-2/No=+2)",
                info: "X",
                url: "https://congress.gov/congressional-report/115th-congress/senate-report/182/1?q=%7B%22search%22%3A%5B%22billOriginalCosponsor%3AW000437%22%2C%22billOriginalCosponsor%3AW000437%22%5D%7D",
                scoring: [
                    {
                        value: "Yes",
                        score: -2,
                        info: 'Voted in Intelligence Committee to report FARA to floor'
                    },
                    {
                        value: "No",
                        score: 2,
                        info: 'Voted in Intelligence Committee to not report FARA to floor'
                    }
                ]
            },
        ]
    },

    "116th": {
        date: "2019-20",
        rules: [
            {
                key: "h_r_2740",
                googleSheetIndex: 63,
                info: "to add prohibitions on NSA reverse targeting to 2018 appropriations",
                url: "https://clerk.house.gov/evs/2019/roll345.xml",
                scoring: [
                    {
                        value: "Aye",
                        score: 4,
                        addText: "Voted "
                    },
                    {
                        value: "No",
                        score: -4,
                        addText: "Voted not "
                    }
                ]
            },
            {
                key: "biometric",
                googleSheetIndex: 65,
                info: "Sponsored legislation to prohibit biometric recognition in most public and assisted housing",
                url: "http://dearcolleague.us/2019/07/cosponsor-the-no-biometric-barriers-to-housing-act-of-2019-2/",
                scoring: [
                    {
                        value: "Yes",
                        score: 4
                    }
                ]
            },
            {
                key: "s2939",
                googleSheetIndex: 66,
                info: "Filed or cosponsored S. 2939, ending NSA call detail records program",
                url: "https://www.congress.gov/bill/116th-congress/senate-bill/2939/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "sapra",
                googleSheetIndex: 67,
                info: "Sponsored or cosponsored the Safeguarding Americans' Private Records Act to neuter PATRIOT Act mass surveillance",
                url: "https://www.congress.gov/bill/116th-congress/senate-bill/3242/cosponsors?q={%22search%22:[%22safeguarding%22]}&r=15&s=2&searchResultViewType=expanded&KWICView=false",
                scoring: [
                    {
                        value: "Yes",
                        score: 4
                    }
                ]
            },
            {
                key: "sapra2",
                googleSheetIndex: 68,
                info: "Sponsored or cosponsored the Safeguarding Americans' Private Records Act to neuter PATRIOT Act mass surveillance",
                url: "https://www.congress.gov/bill/116th-congress/house-bill/5675/cosponsors?q={%22search%22:[%22safeguarding+private%22]}&r=1&s=4&searchResultViewType=expanded&KWICView=false",
                scoring: [
                    {
                        value: "Yes",
                        score: 4
                    }
                ]
            },
            {
                key: "s3420",
                googleSheetIndex: 69,
                info: "Sponsored or cosponsored improvements to FISC amicus processes",
                url: "https://www.congress.gov/bill/116th-congress/senate-bill/3420/cosponsors?q={%22search%22:[%22lee%22]}&r=2&s=7&searchResultViewType=expanded&KWICView=false",
                scoring: [
                    {
                        value: "Yes",
                        score: 2
                    }
                ]
            },
            {
                key: "h_r_6172",            // needs to compare organization
                googleSheetIndex: 70,
                display: "Supported/opposed renewal of PATRIOT Act surveillance powers with cosmetic reforms (Yes=-2/No=+2)",
                info: "renewal of PATRIOT Act surveillance powers with cosmetic reforms",
                url: "X",
                scoring: [
                    {
                        value: "YES",
                        score: -2,
                        organization: "Senate",
                        url: "https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00092",
                        addText: "Supported ",
                    },
                    {
                        value: "YES",
                        score: -2,
                        organization: "House",
                        url: "http://clerk.house.gov/evs/2020/roll098.xml",
                        addText: "Supported ",
                    },                    
                    {
                        value: "NO",
                        score: 2,
                        organization: "Senate",
                        url: "https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00092",
                        addText: "Opposed ",
                    },
                    {
                        value: "NO",
                        score: 2,
                        organization: "House",
                        url: "http://clerk.house.gov/evs/2020/roll098.xml",
                        addText: "Opposed ",
                    },                   
                ]
            },
            {
                key: "earn",
                googleSheetIndex: 71,
                info: "Sponsored or cosponsored the EARN IT Act, which would enable the federal government to muscle private firms into not providing end-to-end encryption",
                url: "https://www.congress.gov/bill/116th-congress/senate-bill/3398/cosponsors?q={%22search%22:[%22earn+it+act%22]}&r=1&s=9&searchResultViewType=expanded&KWICView=false",
                scoring: [
                    {
                        value: "Yes",
                        score: -3
                    }
                ]
            },         
            {
                key: "sa1583",
                googleSheetIndex: 72,
                info: "amendment to prohibit FBI collection of web browsing history without a warrant",
                url: "https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00089",
                scoring: [
                    {
                        value: "Yes",
                        score: 3,
                        addText: 'Voted for '
                    },
                    {
                        value: "No",
                        score: -3,
                        addText: 'Voted against '
                    }
                ]
            }, 
            {
                key: "sa1584",
                googleSheetIndex: 73,
                info: "improving FISA Court transparency by requiring civil liberties amicus in most situations",
                url: "https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00090",
                scoring: [
                    {
                        value: "Yes",
                        score: 2,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -2,
                        addText: "Voted against "
                    }
                ]
            }, 
            {
                key: "sa1586",
                googleSheetIndex: 74,
                info: "prohibiting use of Executive Order 12,333-derived information in prosecutions of US persons",
                url: "https://www.senate.gov/legislative/LIS/roll_call_lists/roll_call_vote_cfm.cfm?congress=116&session=2&vote=00091",
                scoring: [
                    {
                        value: "Yes",
                        score: 4,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -2,
                        addText: "Voted against "
                    }
                ]
            }, 
            {
                key: "h_r_7984",
                googleSheetIndex: 75,
                info: "Supports requiring internal civil liberties review of DHS intelligence products before circulation",
                url: "https://www.congress.gov/bill/116th-congress/house-bill/7984/cosponsors?r=5&s=1&searchResultViewType=expanded",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            }, 
            {
                key: "s3398",
                googleSheetIndex: 112,
                info: "Cosponsored the EARN-IT Act, which would force internet services to give police access to decrypted user data.",
                url: "https://www.congress.gov/bill/116th-congress/senate-bill/3398/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -4
                    }
                ]
            },    
        ]
    },

    "117th": {
        date: "2021-22",
        rules: [
            {
                key: "s1265",
                googleSheetIndex: 76,
                info: "Original cosponsor of the Wyden-Daines 'Fourth Amendment Is Not For Sale Act'",
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/1265/cosponsors?searchResultViewType=expanded",
                scoring: [
                    {
                        value: "Yes",
                        score: +4
                    }
                ]
            },
            {
                key: "uspisspa",
                googleSheetIndex: 77,
                info: "Original cosponsor of bill to end covert internet surveillance by US Postal Intelligence Service",
                url: "https://gaetz.house.gov/media/press-releases/congressman-matt-gaetz-leads-9-lawmakers-push-abolish-uspis-s-internet-covert",
                scoring: [
                    {
                        value: "Yes",
                        score: +3
                    }
                ]
            },
            {
                key: "s1423",
                googleSheetIndex: 78,
                info: "Supports requiring tech companies to give children an easy way to erase the data held on them.",
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/1423/cosponsors?r=73&s=1",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "hr3707",
                googleSheetIndex: 104,
                info: "Cosponsored a toothless bill, the \"No Trace Act\", that exempts intelligence services from any limits on warrantless acquisition of datasets.",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/3707/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -3
                    }
                ]
            },
            {
                key: "hr4350",
                googleSheetIndex: 105,
                info: `to restrict "1033" military equipment going to police departments`,
                url: "https://clerk.house.gov/Votes/2021281",
                scoring: [
                    {
                        value: "Yes",
                        score: +3,
                        addText: "Voted YES "
                    },
                    {
                        value: "No",
                        score: -3,
                        addText: "Voted No "
                    }
                ]
            },
            {
                key: "hr5524",
                googleSheetIndex: 106,
                info: 'Cosponsored bill protecting US persons\' devices from warrantless searches at the "border".',
                url: "https://www.congress.gov/bill/117th-congress/house-bill/5524/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: +2
                    }
                ]
            },
            {
                key: "s2957",
                googleSheetIndex: 107,
                info: 'Cosponsored bill protecting US persons\' devices from warrantless searches at the "border".',
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/2957/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: +2
                    }
                ]
            },
            {
                key: "hr6006",
                googleSheetIndex: 108,
                info: "Opposes intrusive financial surveillance of cryptocurrency users.",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/6006/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: +3
                    }
                ]
            },
            {
                key: "s3343",
                googleSheetIndex: 109,
                info: "Supports US citizens being allowed to sue federal government agents for deprivation of rights.",
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/3343/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 4
                    }
                ]
            },
            {
                key: "hr8454",
                googleSheetIndex: 111,
                info: "Cosponsored the EARN-IT Act, which would force internet services to give police access to decrypted user data.",
                url: "https://www.congress.gov/bill/116th-congress/house-bill/8454/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -4
                    }
                ]
            },
            {
                key: "hr6877",
                googleSheetIndex: 115,
                info: "Original cosponsor of legislation to restrict no-knock and night-time police raids",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/6877/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "s3668",
                googleSheetIndex: 116,
                info: "Original cosponsor of legislation to ban IRS use of facial recognition",
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/3668/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 2
                    }
                ]
            },
            {
                key: "hr350",
                googleSheetIndex: 117,
                info: "bill expanding domestic surveillance capabilities of DHS and FBI.",
                url: "https://clerk.house.gov/Votes/2022221",
                scoring: [
                    {
                        value: "Yes",
                        score: -3,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: 2,
                        addText: "Voted against "
                    }
                ]
            },
            {
                key: "hr7072",
                googleSheetIndex: 118,
                info: "Cosponsored the NDO Fairness Act, a bill to improve government surveillance order transparency",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/7072/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 1,
                    }
                ]
            },
            {
                key: "hr7214",
                googleSheetIndex: 119,
                info: "Cosponsored the Government Surveillance Transparency Act, a bill to significantly improve government surveillance order transparency",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/7214/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "s4647",
                googleSheetIndex: 120,
                info: "Supported bill to protect drivers against technology mandate that would unconstitutionally impose breath searches as a condition of driving",
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/4647/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 2
                    }
                ]
            },
            {
                key: "hr8173",
                googleSheetIndex: 121,
                info: "Supported 'Fourth Amendment Restoration Act', requiring warrants for surveillance of US citizens and prohibiting parallel construction",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/8173/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 5
                    }
                ]
            },
            {
                key: "hr9061",
                googleSheetIndex: 122,
                info: "Cosponsored warrants for law enforcement use of facial recognition",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/9061/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "hr3907",
                googleSheetIndex: 123,
                info: "Cosponsored a bill that would impose a moratorium on law enforcement use of facial recognition technology",
                url: "https://www.congress.gov/bill/117th-congress/house-bill/3907/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 4
                    }
                ]
            },
            {
                key: "s2052",
                googleSheetIndex: 124,
                info: "Cosponsored a bill that would impose a moratorium on law enforcement use of facial recognition technology",
                url: "https://www.congress.gov/bill/117th-congress/senate-bill/2052/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 4
                    }
                ]
            },
            {
                key: "s686",
                googleSheetIndex: 125,
                info: "Cosponsored or voted for the RESTRICT Act, which would give expansive authority to the US government to ban apps on national security grounds, seize phones used to access them, and impose criminal penalties for using VPNs to access them.",
                url: "https://www.congress.gov/bill/118th-congress/senate-bill/686/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -2
                    }
                ]
            },
            {
                key: "s1199",
                googleSheetIndex: 126,
                info: "Cosponsored bill that would pressure tech companies to scan for CSAM, even by breaking user encryption, and by doing so, would trigger 4A warrant requirement for currently voluntary searches.",
                url: "https://www.congress.gov/bill/118th-congress/senate-bill/1199/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -2
                    }
                ]
            },
            {
                key: "s1409",
                googleSheetIndex: 127,
                info: "Cosponsored bill that would remove liability shield for tech companies that host content any state attorney-general disapproves of.",
                url: "https://www.congress.gov/bill/118th-congress/senate-bill/1409/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -3
                    }
                ]
            },
            {
                key: "s1080",
                googleSheetIndex: 128,
                info: "Cosponsored bill that would pressure tech companies to censor drug-related content online.",
                url: "https://www.congress.gov/bill/118th-congress/senate-bill/1080/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -2
                    }
                ]
            },
        ]
    },

    "118th": {
        date: "2023-24",
        rules: [
            {
                key: "hr5309",
                googleSheetIndex: 129,
                info: "Cosponsored a bill that would limit government's access to electronic communications, including those over 180 days old.",
                url: "https://www.congress.gov/bill/118th-congress/house-bill/5309/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 1
                    }
                ]
            },
            {
                key: "hr5311",
                googleSheetIndex: 130,
                info: "Cosponsored a bill that would protect sale and use of encryption products and bar states from requiring reconfiguration of encrypted services to enable law enforcement access.",
                url: "https://www.congress.gov/bill/118th-congress/house-bill/5311/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 2
                    }
                ]
            },
            {
                key: "hr5331",
                googleSheetIndex: 131,
                info: "Cosponsored a bill that would require disclosure of surveillance to individuals surveilled.",
                url: "https://www.congress.gov/bill/118th-congress/house-bill/5331/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 1
                    }
                ]
            },
            {
                key: "hr5442",
                googleSheetIndex: 132,
                info: "Consolidates within DOD the operation of armed government drones.",
                url: "https://www.congress.gov/bill/118th-congress/house-bill/5442/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 2
                    }
                ]
            },
            {
                key: "hr895",
                googleSheetIndex: 133,
                info: "Cosponsored bill creating DHS office to counter shoplifting and expanding forfeitures.",
                url: "https://www.congress.gov/bill/118th-congress/house-bill/895/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: -2
                    }
                ]
            },
            {
                key: "hr6262",
                googleSheetIndex: 134,
                info: "Cosponsored the Government Surveillance Reform Act, which would prohibit warrantless queries of U. S. persons, and incorporate every major surveillance reform proposed from 2013-2023",
                url: "https://www.congress.gov/bill/118th-congress/house-bill/6262/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 10
                    }
                ]
            },
            {
                key: "s3234",
                googleSheetIndex: 135,
                display: "X",
                info: "Cosponsored the Government Surveillance Reform Act, which would prohibit warrantless queries of U. S. persons, and incorporate every major surveillance reform proposed from 2013-2023",
                url: "https://www.congress.gov/bill/118th-congress/senate-bill/3234/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 10
                    }
                ]
            },
            {
                key: "hr4820",
                googleSheetIndex: 136,
                info: "amendment to remove requirement for all new cars to have remote killswitches by 2025",
                url: "https://clerk.house.gov/evs/2023/roll616.xml",
                scoring: [
                    {
                        value: "Yes",
                        score: 3,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -3,
                        addText: "Voted against "
                    }                    
                ]
            },
            {
                key: "hr2670",
                googleSheetIndex: 137,
                info: "Voted to prevent straight reauthorization of FISA Section 702 to the 2023 NDAA",
                url: "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1181/vote_118_1_00342.htm",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "s3961",
                googleSheetIndex: 138,
                info: "Cosponsored the Security and Freedom Enhancement Act of 2024",
                url: "https://www.congress.gov/bill/118th-congress/senate-bill/3961/cosponsors",
                scoring: [
                    {
                        value: "Yes",
                        score: 3
                    }
                ]
            },
            {
                key: "hr6570",
                googleSheetIndex: 139,
                info: "the Protect Liberty and End Warrantless Surveillance Act in the Judiciary Committee",
                url: "https://www.congress.gov/congressional-report/118th-congress/house-report/307",
                scoring: [
                    {
                        value: "Yes",
                        score: 7,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -7,
                        addText: "Voted against "
                    }                    
                ]
            },
            {
                key: "hr7888_114",
                googleSheetIndex: 140,
                info: "a warrant by default for FISA Section 702 queries for US persons",
                url: "https://clerk.house.gov/Votes/2024114",
                scoring: [
                    {
                        value: "Yes",
                        score: 7,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -10,
                        addText: "Voted against "
                    }                    
                ]
            },
            {
                key: "hr7888_116",
                googleSheetIndex: 141,
                info: 'permitting FISA Section 702 queries for international conversations involving "precursors" of illegal drugs that lead to overdoses, including Sudafed and Adderall',
                url: "https://clerk.house.gov/Votes/2024116",
                scoring: [
                    {
                        value: "Yes",
                        score: -3,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: 3,
                        addText: "Voted against "
                    }                    
                ]
            },
            {
                key: "hr7888_117",
                googleSheetIndex: 142,
                info: "permitting FISA Section 702 queries of visitors and immigrants",
                url: "https://clerk.house.gov/Votes/2024117",
                scoring: [
                    {
                        value: "Yes",
                        score: -4,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: 4,
                        addText: "Voted against "
                    }                    
                ]
            },
            {
                key: "hr7888_118",
                googleSheetIndex: 143,
                info: 'expanding secret surveillance of data centers and commercial tenants ("PATRIOT Act 2.0")',
                url: "https://clerk.house.gov/Votes/2024118",
                scoring: [
                    {
                        value: "Yes",
                        score: -5,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: 5,
                        addText: "Voted against "                        
                    }                    
                ]
            },
            {
                key: "hr7888_119",
                googleSheetIndex: 144,
                info: "final passage of the Reforming Intelligence and Securing America Act",
                url: "",
                scoring: [
                    {
                        value: "Yes",
                        score: -5,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: 5,
                        addText: "Voted against "
                    }                    
                ]
            },
            {
                key: "sa1829",
                googleSheetIndex: 145,
                info: "the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly",
                url: "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00144.htm",
                scoring: [
                    {
                        value: "Yes",
                        score: 4,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -4,
                        addText: "Voted against "
                    }
                ]
            },
            {
                key: "sa1820",
                googleSheetIndex: 146,
                info: "the removal of the ECSP \"Make Everyone A Spy\" amendment, which substantially expands the NSA's power to secretly compel private companies to produce information on US persons using their networks",
                url: "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00146.htm",
                scoring: [
                    {
                        value: "Yes",
                        score: 3,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -10,
                        addText: "Voted against "
                    }
                ]
            },
            {
                key: "sa1841",
                googleSheetIndex: 147,
                info: "final requiring a warrant in order for the FBI to access the full contents of a communication resulting from a FISA Section 702 query involving a US person",
                url: "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00148.htm",
                scoring: [
                    {
                        value: "Yes",
                        score: 7,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -10,
                        addText: "Voted against "
                    }
                ]
            },
            {
                key: "sa1840",
                googleSheetIndex: 148,
                info: "improvements to FISC amicus processes",
                url: "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00149.htm",
                scoring: [
                    {
                        value: "Yes",
                        score: 2,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -2,
                        addText: "Voted against "
                    }
                ]
            },
            {
                key: "hr7888_s",
                googleSheetIndex: 149,
                info: "final passage of RISAA, a bill reauthorizing and expanding government surveillance under FISA till 2026",
                url: "https://www.senate.gov/legislative/LIS/roll_call_votes/vote1182/vote_118_2_00150.htm",
                scoring: [
                    {
                        value: "Yes",
                        score: -13,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: 10,
                        addText: "Voted against "
                    }
                ]
            },
            {
                key: "hr4639",
                googleSheetIndex: 150,
                info: "the Fourth Amendment Is Not For Sale Act, which would bar US agencies from warrantlessly purchasing from private data brokers, data that would require a warrant to obtain directly",
                url: "https://clerk.house.gov/Votes/2024136",
                scoring: [
                    {
                        value: "Yes",
                        score: 4,
                        addText: "Voted for "
                    },
                    {
                        value: "No",
                        score: -4,
                        addText: "Voted against "
                    }
                ]
            }
        ]
    },
}