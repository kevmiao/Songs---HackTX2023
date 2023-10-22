import { useState } from 'react';

const YearBox = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <button onClick={handleOpen}>Year</button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <button>2021</button>
                    </li>
                    <li className="menu-item">
                        <button>2020</button>
                    </li>
                </ul>
            ) : null}
        </div>
    );
};

export default YearBox;