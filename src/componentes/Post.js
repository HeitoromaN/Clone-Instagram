import './Postagens.css';
import { IoMdHeart } from "react-icons/io";
import ListItem from './Listitem.js';
export default function Post() {
    return (
        <div className='Post'>
            <p>Gabriel está se sentindo inspirado.</p>
            <img src='https://encurtador.com.br/7cBcC' alt='post' />
            <ListItem icon={<IoMdHeart />} text='Coração'/>
            <p>Postagem</p>
        </div>
    );
    }