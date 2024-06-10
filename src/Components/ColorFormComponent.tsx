import { useState } from 'react';
import ColorSketch from '@uiw/react-color-sketch';
import { Modal } from '@mui/material';
import '../styles/ColorFormConponent.css';

export default function ColorFormComponent(props: { hexColor: string; onChange: (hexColor: string) => void; }) {
    const [display, setDisplay] = useState<boolean>(false);
    const { hexColor, onChange } = props;

    function modalOpenHandler() {
        setDisplay(true);
    }

    function modalCloseHandler() {
        setDisplay(false)

    }

    return <div className='color-form-component'>
        <label className='form-label' htmlFor='color-hex'>Color</label>
        <div className="swatch swatch-clickable" id="color-swatch " style={{ background: hexColor }} onClick={() => modalOpenHandler()} />
        <Modal className="color-modal" open={display} onClose={modalCloseHandler} >
            <ColorSketch color={hexColor} style={{}} className="color-block" onChange={color => {
                onChange?.(color?.hex);
            }} />
        </Modal>
        <input id='color-hex' type="hidden" name="color-hex" value={hexColor} />
    </div>;
}
