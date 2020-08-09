import React from 'react';

// images
import WhatsAppIcon from '../../assets/icons/whatsapp.svg';

// style
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/26006458?s=460&v=4" alt="daniel c" />
                <div>
                    <strong>Daniel C. Guimarães Rosa</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex adipisci omnis libero
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur hic vel?
                <br /><br />
                nesciunt, sed velit maiores necessitatibus asperiores cum expedita?
            </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={WhatsAppIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;