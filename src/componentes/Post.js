import './Postagens.css';
import Story from './Story';
import { IoMdHeart } from "react-icons/io";
import ListItem from './Listitem.js';
export default function Post() {
    return (
        <div className='Post'>
            <div className='PostHeader'>
            <Story profilePhoto="https://encurtador.com.br/7cBcC" profileName="Gabs" /> <p>Gabriel está se sentindo inspirado.</p>
            </div>
            <img src='https://encurtador.com.br/7cBcC' alt='post' />
            <div className='PostFooter'>
            <ListItem icon={<IoMdHeart />} text=''/>
            </div>
            <p>Gostaria de agradecer a todos que estão vendo o meu post, essa é a melhor foto que eu já tirei na vida, captura muito bem a minha imagem pessoal, fique style.</p>
        </div>
    );
    }