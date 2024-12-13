import { PoliticianData } from '@/types';
import React from 'react';

interface PoliticianModalProps {
    politician: PoliticianData;
    toggleModal: () => void;
}

export const PoliticianModal: React.FC<PoliticianModalProps> = ({ politician, toggleModal }) => {
    return (
        <div className="modal politician_modal">
            <div className="politician-modal-content">
                <button className="close" onClick={toggleModal}>X</button>
                <h2>{`How ${politician.first_name} ${politician.last_name} Voted...`}</h2>
                <ul>
                    {politician.score_criteria.map((data, i) => (
                        <li key={i} className={data.score < 0 ? 'bad' : 'good'}>
                            {data.url ? (
                                <a href={data.url} target="_blank" rel="noopener noreferrer">
                                    {data.info}
                                </a>
                            ) : (
                                data.info
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

