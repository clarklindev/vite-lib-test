import { Button } from '@fightclub/libtest';
import { Icon } from '@fightclub/libtest';
import './App.css';
import { ShoppingCartIcon } from '@fightclub/libtest/icons';
import { AccordionExample } from './examples/Accordion';

function App() {
    return (
        <>
            <Button className="text-blue-500">test</Button>
            <Icon>
                <ShoppingCartIcon />
            </Icon>
            <AccordionExample />
        </>
    );
}

export default App;
