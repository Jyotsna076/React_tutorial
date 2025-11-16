import { useState } from 'react';
import User from './User';

const Counter = () => {
    const [display, setDisplay] = useState(true);
   
    return (
        <div>
            <h1>Toggle in React js</h1>
             <button onClick={() => setDisplay(!display)}>Toggle</button>
            {
               display ? <h1>Jyotsna Kushwaha</h1> : null
            }
           {
                display && <User />
           }

        </div>
    );
}

export default Counter;