import React from 'react';
import { PrintNotes } from './components/PrintNotes/PrintNotes';

import './styles/App.scss';

const App = () => {
    return (
        <div>
            <p>DVD Rental Project</p>
            <PrintNotes />
        </div>
    )
};

export default App;