import React from 'react';
import ReactDOM from 'react-dom';

import NotesApp from './components/NotesApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NotesApp />, document.getElementById('root'));
registerServiceWorker();

// if (module.hot) {
//     module.hot.accept('components/NotesApp', () => {
//         const NextApp = require('components/NotesApp').default;
//         ReactDOM.render(
//             <NextApp />,
//             document.getElementById('root')
//         )
//     })
// }