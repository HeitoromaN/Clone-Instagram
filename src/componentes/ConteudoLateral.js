import logo from '../images/proa_logo.png';
import './ConteudoLateral.css';
import ListItem from './Listitem.js';

import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoCompass } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";



export default function ConteudoLateral() {
  return (
    <div className='ConteudoLateral'>

      <img src={logo} className='Logo' alt='Logo' />

      <div className='Navegaveis'>
        <ul className='NavagationButtons'>
          <ListItem icon={<IoHome />} text=' Home'/>
          <ListItem icon={<IoSearch />} text=' Pesquisar'/>
          <ListItem icon={<IoCompass />} text=' Explorar'/>
          <ListItem icon={<IoChatbubbleSharp />} text=' Mensagem'/>

        </ul>
      </div>

    </div>
  );
}