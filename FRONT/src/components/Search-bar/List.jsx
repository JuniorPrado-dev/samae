import React from 'react';
import { Result } from './Result';

export const List = ({ results }) => {
    return (
        <div>
            {results.map((result, id) => {
                return <Result result={result} key={id} />;
            })}
        </div>
    );
};
