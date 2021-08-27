import { Button } from '@zendeskgarden/react-buttons';
import React, { useEffect } from 'react';
export default function Listing() {

    useEffect(() => {
        fetch("../data/test.json")
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);
    return (
        <div>
            Listing
            <Button>Button</Button>
        </div>
    );
}
