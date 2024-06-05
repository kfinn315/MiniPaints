import PaintResponse from "../API/Models/PaintResponse";
import "../styles/Paint.css";

export default function Paint(props: { item: PaintResponse; }) {
    const { item } = props;
    const title = `${item.paint.Company} "${item.paint.Name}"`

    return <div className="paint">
        <ul title={title} >
            <li>
                {title}
            </li>
            <li>
                From Series:&nbsp;"{item.paint.Set1}"
            </li>
            {/* <li>
                Code&nbsp;{item.paint.Code}
            </li> */}
            <li className="color">
                <div title={item.paint.Hex} className="swatch" style={{ background: item.paint.Hex }}></div>
                <label htmlFor={item.paint.Hex}>
                    {item.paint.Hex}
                </label>
            </li>
            <li className="delta">
                Delta E: {item.delta}
            </li>
        </ul>
    </div>
}
