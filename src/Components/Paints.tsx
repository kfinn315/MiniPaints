import PaintResponse from "../API/Models/PaintResponse";
import PaintComponent from "./PaintComponent";
import "../styles/Paints.css";

export default function Paints(props: { items?: PaintResponse[] }) {
    const { items } = props;

    return <div className="paints">
        {
            items && items.sort((a, b) => a.delta - b.delta).map(item => <PaintComponent key={item.paint.Id} item={item} />)
        }
    </div>
}