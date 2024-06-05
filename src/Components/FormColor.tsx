import { useState } from 'react';
import '../styles/FormColor.css';

export default function FormColor(props: { onSubmit: React.FormEventHandler }) {
    const [deltaE, setDeltaE] = useState<number>(1)
    return <form class="form-color" onSubmit={(event) => { event.preventDefault(); props.onSubmit(event); return false; }}>
        <div>
            <label className='form-label' htmlFor="hex">Color</label>
            <input id="hex" type="color" />
        </div>
        <div>
            <label className='form-label' htmlFor="range">DeltaE Range</label>
            <input id="range" type="range" min={1} max={100} list="markers" value={deltaE} onChange={(ev) => setDeltaE(ev.target.value)} />
            <label>{deltaE}</label>
        </div>
        <div>
            <i>
                {getDeltaDescription(deltaE)}
            </i>
        </div>
        <datalist id="markers">
            <option value="1"></option>
            <option value="2"></option>
            <option value="10"></option>
            <option value="49"></option>
            <option value="100"></option>
        </datalist>

        {/* <DeltaEDetails /> */}
        <div>
            <input type="submit" value="Search" />
        </div>

    </form>
}

function getDeltaDescription(value: number): string {
    if (value < 1) {
        return "Less than 1: Not perceptible"
    } else if (value < 2) {
        return "1-2: Only perceptible under close scrutiny";
    } else if (value < 10) { return "2-10: Slightly perceptible" }
    else if (value <= 49) { return "11-49: Perceptibly different, but still appear similar" }
    else return "100: Opposite/complementary colors on the color wheel"
}

// function DeltaEDetails() {
//     return <div class="details">
//         <h2>Delta E scale</h2>
//         <ul>
//             <li>Less than 1: Not perceptible</li>
//             <li>1-2: Only perceptible under close scrutiny</li>
//             <li>2-10: Slightly perceptible</li>
//             <li>11-49: Perceptibly different, but still appear similar</li>
//             <li>100: Opposite/complementary colors on the color wheel</li>
//         </ul>
//         Source: <a href="https://www.sensientindustrial.com/na/color-college/how-to-choose-color/how-do-we-calculate-a-perceptible-difference">https://www.sensientindustrial.com/na/color-college/how-to-choose-color/how-do-we-calculate-a-perceptible-difference</a>
//     </div>
// }