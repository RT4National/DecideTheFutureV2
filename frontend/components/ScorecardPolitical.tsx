import React, { FC, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Politician } from './scorecard_political/Politician';
import InfiniteScroll from './InfiniteScroll';
import { CAUCUSES, COMMITTEES, STATES } from '@/constants';
import { processPolitician } from '@/utils';
import { PoliticianData } from '@/types';

interface Props {
    google_sheets_api_key: string;
    filtered?: string;
    name?: string;
    membership?: string;
    party?: string;
    candidacy?: string;
}

interface PoliticiansByCategory {
    good: PoliticianData[];
    neutral: PoliticianData[];
    bad: PoliticianData[];
}

export const ScorecardPolitical: FC<Props> = ({
    google_sheets_api_key,
    filtered: initialFiltered = 'All',
    name: initialName = '',
    membership: initialMembership = 'All',
    party: initialParty = 'All',
    candidacy: initialCandidacy = 'All',
}) => {
    const [good, setGood] = useState<number>(0);
    const [goodFiltered, setGoodFiltered] = useState<PoliticianData[]>([]);
    const [neutral, setNeutral] = useState<number>(0);
    const [neutralFiltered, setNeutralFiltered] = useState<PoliticianData[]>([]);
    const [bad, setBad] = useState<number>(0);
    const [badFiltered, setBadFiltered] = useState<PoliticianData[]>([]);
    const [politicians, setPoliticians] = useState<PoliticiansByCategory>({
        good: [],
        neutral: [],
        bad: [],
    });

    const [filtered, setFiltered] = useState<string>(initialFiltered);
    const [name, setName] = useState<string>(initialName);
    const [membership, setMembership] = useState<string>(initialMembership);
    const [party, setParty] = useState<string>(initialParty);
    const [candidacy, setCandidacy] = useState<string>(initialCandidacy);
    const matchPolitician = useCallback((politician: PoliticianData) => {
        const filteredValue = filtered;
        const nameValue = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const membershipValue = membership;
        const partyValue = party;
        const candidacyValue = candidacy;

        const politicianName = (politician.first_name + ' ' + politician.last_name)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        return (
            (
                filteredValue === 'All' ||
                politician.organization === filteredValue ||
                politician.state === filteredValue
            ) &&
            politicianName.includes(nameValue) &&
            (
                membershipValue === 'All' ||
                politician[membershipValue] === 'Yes'
            ) &&
            (
                partyValue === 'All' ||
                politician.party === partyValue
            ) &&
            (
                candidacyValue === 'All' ||
                politician.candidacy === candidacyValue
            )
        );
    }, [filtered, name, membership, party, candidacy]);

    const processPoliticiansData = useCallback((entries: never[]) => {
        const politicians: PoliticiansByCategory = { good: [], neutral: [], bad: [] };
        const filtered: PoliticiansByCategory = { good: [], neutral: [], bad: [] };

        for (const entry of entries.slice(1)) {
            const politician = processPolitician(entry);
            if (politician.active !== 'No' && politician.voting !== 'Yes') {
                if (politician.score > 5) {
                    politicians.good.push(politician);
                } else if (politician.score >= 0) {
                    politicians.neutral.push(politician);
                } else {
                    politicians.bad.push(politician);
                }
            }
        }

        // Apply initial filters
        filtered.good = politicians.good.filter(matchPolitician);
        filtered.neutral = politicians.neutral.filter(matchPolitician);
        filtered.bad = politicians.bad.filter(matchPolitician);

        return { politicians, filtered };
    }, [matchPolitician]);

    const fetchPoliticians = useCallback(async () => {
        try {
            const res = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/1d8HRGJU8p8tHDoTiSnVbqZuHTW9lSeqG-dWMyeC-v3E/values/newsb?key=${google_sheets_api_key}`
            );
            const data = res.data.values;
            const { politicians, filtered } = processPoliticiansData(data);
            setPoliticians(politicians);

            // Initialize displayed counts based on filtered results
            setGood(Math.min(16, filtered.good.length));
            setBad(Math.min(16, filtered.bad.length));
            setNeutral(Math.min(19, filtered.neutral.length));

            setGoodFiltered(filtered.good);
            setBadFiltered(filtered.bad);
            setNeutralFiltered(filtered.neutral);

            window.scrollTo(0, 0);
        } catch (error) {
            console.log('unable to get spreadsheet', error);
        }
    }, [google_sheets_api_key, processPoliticiansData]);

    useEffect(() => {
        fetchPoliticians();
    }, [fetchPoliticians]);


    const applyFilters = useCallback(() => {
        const goodFiltered = politicians.good.filter(matchPolitician);
        const neutralFiltered = politicians.neutral.filter(matchPolitician);
        const badFiltered = politicians.bad.filter(matchPolitician);

        setGood(Math.min(16, goodFiltered.length));
        setBad(Math.min(16, badFiltered.length));
        setNeutral(Math.min(19, neutralFiltered.length));

        setGoodFiltered(goodFiltered);
        setNeutralFiltered(neutralFiltered);
        setBadFiltered(badFiltered);
    }, [politicians, matchPolitician]);

    // Re-apply filters when filtering parameters change
    useEffect(() => {
        applyFilters();
    }, [applyFilters, filtered, name, membership, party, candidacy]);

    const updateUrl = useCallback(() => {
        const filters: string[] = [];

        if (filtered) filters.push("filtered=" + filtered);
        if (name) filters.push("name=" + name);
        if (membership) filters.push("membership=" + membership);
        if (party) filters.push("party=" + party);
        if (candidacy) filters.push("candidacy=" + candidacy);

        const query = filters.length > 0 ? '?' + filters.join('&') : '';
        window.history.pushState(
            { id: 'home' },
            'Decide The Future',
            window.location.origin + query
        );
    }, [filtered, name, membership, party, candidacy]);

    useEffect(() => {
        updateUrl();
    }, [updateUrl]);

    const loadMoreGood = () => {
        setGood(prev => Math.min(prev + 10, goodFiltered.length));
    };

    const loadMoreBad = () => {
        setBad(prev => Math.min(prev + 10, badFiltered.length));
    };

    const loadMoreNeutral = () => {
        setNeutral(prev => Math.min(prev + 12, neutralFiltered.length));
    };

    const handleFilterChange = (value: string, field: string) => {
        if (field === 'view') {
            setFiltered(value);
        } else if (field === 'membership') {
            setMembership(value);
        } else if (field === 'name') {
            setName(value);
        } else if (field === 'party') {
            setParty(value);
        } else if (field === 'candidacy') {
            setCandidacy(value);
        }
    };

    const loader = <div key={0} style={{ width: '100%' }}>Loading ...</div>;

    return (
        <div className="scoreboard">
            <h2>Political Scoreboard</h2>
            <div id="candidates"></div>
            <p>
                We can protect the Internet, but to do that,
                we need to know who is helping us and who is working against us.&nbsp;
                <a href="#our-scoring-system">Learn about our scoring system.</a>
            </p>
            <div id="scoreboard_data">
                <div>
                    <label>Chamber or State:</label>
                    <select
                        onChange={e => handleFilterChange(e.target.value, 'view')}
                        value={filtered}
                    >
                        <optgroup label="View by Chamber">
                            <option value="All">All Congress</option>
                            <option value="Senate">Senate</option>
                            <option value="House">House</option>
                        </optgroup>
                        <optgroup label="View by state">
                            {STATES.map(value => (
                                <option key={value} value={value}>{value}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <label>Organization Membership:</label>
                    <select
                        className='membership'
                        style={{ maxWidth: '300px' }}
                        onChange={e => handleFilterChange(e.target.value, 'membership')}
                        value={membership}
                    >
                        <option value='All'>All Members</option>
                        <optgroup label="View by Committee">
                            {Object.entries(COMMITTEES).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </optgroup>
                        <optgroup label="View by Caucus">
                            {Object.entries(CAUCUSES).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </optgroup>
                    </select>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <label>Political Party:</label>
                    <select
                        className='membership'
                        style={{ maxWidth: '300px' }}
                        onChange={e => handleFilterChange(e.target.value, 'party')}
                        value={party}
                    >
                        <option value='All'>All Parties</option>
                        <option value='Democrat'>Democratic</option>
                        <option value='Republican'>Republican</option>
                        <option value='Independent'>Independent</option>
                    </select>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <label>Presidential Candidacy:</label>
                    <select
                        className='membership'
                        style={{ maxWidth: '300px' }}
                        onChange={e => handleFilterChange(e.target.value, 'candidacy')}
                        value={candidacy}
                    >
                        <option value='All'>All Members</option>
                        <option value='Yes'>Running</option>
                        <option value=''>Not Running</option>
                    </select>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <label>Politician Name:</label>
                    <input
                        type='text'
                        size={13}
                        onChange={e => handleFilterChange(e.target.value, 'name')}
                        placeholder='First/Last Name'
                        value={name}
                    />
                </div>
                <div className='politicians'>
                    {(good > 0 || bad > 0) && (
                        <div className="team internet">
                            <h3>Team Privacy <span>({goodFiltered.length})</span></h3>
                            <em>These politicians are standing up to oppose mass government surveillance.</em>
                            <div
                                key={`good-${filtered}${name}`}
                                className='filtered politicians-scroll'
                            >
                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={loadMoreGood}
                                    hasMore={good < goodFiltered.length}
                                    loader={loader}
                                    useWindow={false}
                                    initialLoad={false}
                                    className=""
                                >
                                    {goodFiltered.slice(0, good).map((pol, i) => (
                                        <Politician key={i} politician={pol} team='good' />
                                    ))}
                                </InfiniteScroll>
                            </div>
                        </div>
                    )}
                    {(good > 0 || bad > 0) && (
                        <div className="team surveillance">
                            <h3>Team Surveillance <span>({badFiltered.length})</span></h3>
                            <em>These politicians are voting to give intelligence agencies a freer hand in spying on Americans.</em>
                            <div
                                key={`bad-${filtered}${name}`}
                                className='filtered politicians-scroll'
                            >
                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={loadMoreBad}
                                    hasMore={bad < badFiltered.length}
                                    loader={loader}
                                    useWindow={false}
                                    initialLoad={false}
                                    className="filtered"
                                >
                                    {badFiltered.slice(0, bad).map((pol, i) => (
                                        <Politician key={i} politician={pol} team='bad' />
                                    ))}
                                </InfiniteScroll>
                            </div>
                        </div>
                    )}
                </div>
                {neutral > 0 && (
                    <div className="team unknown">
                        <h3>Unclear <span>({neutralFiltered.length})</span></h3>
                        <div
                            key={`neutral-${filtered}${name}`}
                            className='filtered politicians-scroll'
                        >
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={loadMoreNeutral}
                                hasMore={neutral < neutralFiltered.length}
                                loader={loader}
                                useWindow={false}
                                initialLoad={false}
                                className="filtered"
                            >
                                {neutralFiltered.slice(0, neutral).map((pol, i) => (
                                    <Politician key={i} politician={pol} team='neutral' />
                                ))}
                            </InfiniteScroll>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

