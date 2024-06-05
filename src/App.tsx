import { FormEvent, useState } from 'react'
import './App.css'
import FormColor from './Components/FormColor';
import Paints from './Components/Paints';
import PaintResponse from './API/Models/PaintResponse';
import PaintAPI from './API/PaintAPI';
import StatusMessage from './Components/StatusMessage';

function App(props: { url: string }) {
    const { url } = props;
    const api = new PaintAPI(url);
    const [items, setItems] = useState<PaintResponse[] | null>(null);
    const [status, setStatus] = useState<string>(null);
    const startLoading = () => { setStatus("Loading...") }

    async function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        const hexColor = (event.target[0] as HTMLInputElement).value
        const deltaRange = (event.target[1] as HTMLInputElement).value
        startLoading()
        api.search(hexColor, deltaRange)
            .then((paintResponses: PaintResponse[]) => {
                setItems(paintResponses);
                if (paintResponses.length === 0) {
                    setStatus("No matching paints were found.");
                } else {
                    setStatus(`Found ${paintResponses.length} paints.`);
                }
            })
            .catch((reason) => {
                console.error(reason);
                setStatus("Error: " + reason)
            });
    }

    return (
        <>
            <FormColor onSubmit={onSubmitHandler} />
            <div>
                <StatusMessage status={status} />
                <Paints items={items} />
            </div>
        </>
    )
}

export default App
