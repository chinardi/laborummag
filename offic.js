import React from 'react';

const googleColors = {
    blue: "#4285F4",
    red: "#EA4335",
    yellow: "#FBBC05",
    green: "#34A853"
};

const ExampleComponent = () => (
    <div style={{ backgroundColor: googleColors.blue, color: googleColors.red }}>
        Hello, World!
    </div>
);

export default ExampleComponent;
