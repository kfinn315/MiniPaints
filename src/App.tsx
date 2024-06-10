import { useCallback, useState } from 'react'
import './styles/App.css'
import FormColor from './Components/FormColor';
import Paints from './Components/Paints';
import PaintResponse from './API/Models/PaintResponse';
import { IPaintAPI } from './API/PaintAPI';
import StatusMessage from './Components/StatusMessage';

function App(props: { api: IPaintAPI }) {
    const { api } = props;
    const [items, setItems] = useState<PaintResponse[] | undefined>(undefined);
    const [status, setStatus] = useState<string | undefined>(undefined);
    const startLoading = () => { setStatus("Loading...") }
    const stopLoading = (message: string | undefined) => { setStatus(message) }

    const onSubmitHandler = useCallback(
        async function (hexColor: string, deltaRange: number) {
            startLoading()
            api.search(hexColor, deltaRange)
                .then((paintResponses: PaintResponse[]) => {
                    setItems(paintResponses);
                    let message: string;
                    if (paintResponses.length === 0) {
                        message = "No matching paints were found.";
                    } else {
                        message = `Found ${paintResponses.length} paints.`;
                    }
                    stopLoading(message);
                })
                .catch((reason) => {
                    console.error(reason);
                    stopLoading("Error: " + reason)
                });
        }, [api]);

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
