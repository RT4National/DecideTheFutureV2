import React, { useState } from 'react';
import { PoliticianModal } from './PoliticianModal';
import { PoliticianData } from '@/types';


interface PoliticianProps {
    politician: PoliticianData;
    team: string;
}

export const Politician: React.FC<PoliticianProps> = ({ politician, team }) => {
    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => {
        setModal((prevModal) => !prevModal);
    };

    return (
        <div className={team}>
            {modal && (
                <PoliticianModal
                    politician={politician}
                    toggleModal={toggleModal}
                />
            )}
            <div className="peekaboo">
                <div className="politician">
                    <div className={team}>
                        <div
                            className="headshot"
                            style={
                                politician.image
                                    ? { backgroundImage: `url("/congress/${politician.image}")` }
                                    : {}
                            }
                        >
                            <div className="congressional-head"></div>
                        </div>
                        <h4>{politician.last_name}</h4>
                        <h3 className="grade">{politician.grade}</h3>
                        <div className="rollover">
                            {politician.twitter && (
                                <a
                                    href={`https://twitter.com/intent/tweet?text=%40${politician.twitter} @Restore_The4th Congress is considering this year whether to reauthorize Section 702 of %23FISA. Please cosponsor the Government Surveillance Reform Act, S. 3234 / H. R. 6262, to restore our privacy rights %23FISAReformNow`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="tweet_link" />
                                </a>
                            )}
                            <button className="info_link" onClick={toggleModal}>
                                i
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
