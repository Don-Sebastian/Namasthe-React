const heading1 = React.createElement(
    'h1',
    {
        id: 'title',
    },
    'Heading1'
);

const container = React.createElement(
    'div',
    {
        id: 'container',
    },
    [heading1],
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);