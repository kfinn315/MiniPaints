import "../styles/StatusMessage.css"

export default function StatusMessage(props: { status: string | undefined; }) {
    const { status } = props;
    return status && <div className='status-message'>{status}</div>;
}
