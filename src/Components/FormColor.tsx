import { useState } from 'react';
import '../styles/FormColor.css';
import ColorFormComponent from './ColorFormComponent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function FormColor(props: { onSubmit: (hexColor: string, deltaE: number) => void }) {
    const { onSubmit } = props;

    const [deltaE, setDeltaE] = useState<number>(1);
    const [hexColor, setHexColor] = useState<string>("#ffffff");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const color = hexColor;
        const deltaRange = deltaE;
        onSubmit?.(color, deltaRange)
    };

    const handleDeltaEChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setDeltaE(Number(ev.target.value));
    };

    const getDeltaDescription = (value: number): string => {
        if (value < 1) {
            return "Less than 1: Not perceptible";
        } else if (value < 2) {
            return "1-2: Only perceptible under close scrutiny";
        } else if (value < 10) {
            return "2-10: Slightly perceptible";
        } else if (value <= 49) {
            return "11-49: Perceptibly different, but still appear similar";
        } else {
            return "100: Opposite/complementary colors on the color wheel";
        }
    };

    return (
        <Card>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    {/* Color input fields */}
                    <ColorFormComponent hexColor={hexColor} onChange={(hexColor: string) => setHexColor(hexColor)} />
                    <div>
                        <label className="form-label" htmlFor="range">Delta E Range</label>
                        <input
                            id="range"
                            type="range"
                            min={1}
                            max={100}
                            list="markers"
                            value={deltaE}
                            onChange={handleDeltaEChange}
                        />
                        <label>{deltaE}</label>
                    </div>

                    <div>
                        <i>{getDeltaDescription(deltaE)}</i>
                    </div>

                    <datalist id="markers">
                        {/* Delta E range options */}
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="10"></option>
                        <option value="49"></option>
                        <option value="100"></option>
                    </datalist>

                    <div>
                        <input type="submit" value="Search" />
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
