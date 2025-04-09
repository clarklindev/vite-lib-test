import { useState } from 'react';

import { ToggleSwitch } from '@fightclub/libtest';

const ToggleSwitchExample = () => {
    const [savedData, setSavedData] = useState(false);

    // ----------------------------------------------------------------

    return (
        <>
            <ToggleSwitch
                savedData={savedData}
                onChange={(event) => {
                    console.log('event.target.checked: ', event.target.checked);
                    setSavedData(event.target.checked);
                }}
            />
        </>
    );
};

export default ToggleSwitchExample;
