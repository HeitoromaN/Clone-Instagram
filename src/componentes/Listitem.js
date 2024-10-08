import '../componentes/ConteudoLateral.css'
export default function ListItem(props) {
    return (
        <li>

            <span>
                {props.icon}
            </span>
            <span>
                {props.text}
            </span>

        </li>
    );
}