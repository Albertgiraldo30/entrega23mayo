import React, { useState } from 'react';
import TextH2 from './TextH2';

export default function TextAl() {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
       
    };

    return (
        <div>
            <button onClick={handleShow}>{show === true ? "Ocultar": "Mostrar"}</button>
            {show === true && <TextH2/>}
        </div>
    );
}
