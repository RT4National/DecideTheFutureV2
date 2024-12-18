export const Congress = {
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
                key: "hr4350",
                googleSheetIndex: 105,
                info: `To restrict "1033" military equipment going to police departments`,
                url: "https://clerk.house.gov/Votes/2021281",
                scoring: [
                    {
                        value: "Yes",
                        score: +3
                    },
                    {
                        value: "No",
                        score: -3
                    }
                ]
            }
        ]
    }
}