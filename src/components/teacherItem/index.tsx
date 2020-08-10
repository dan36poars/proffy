import React from 'react';

// Services
import api from '../../services/api';

// images
import WhatsAppIcon from '../../assets/icons/whatsapp.svg';

// style
import './style.css';

export interface Teacher {
    "id": number;
    "subject": string;
    "cost": number;
    "name": string;
    "avatar": string;
    "whatsapp": string;
    "bio": string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', { 
            user_id: teacher.id,
         });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a onClick={createNewConnection} target="_blanck" href={`https://wa.me/55${teacher.whatsapp}?text=Eu%20tenho%20interrese%20na%20sua%20aula%20de%20${teacher.subject}`} >
                    <img src={WhatsAppIcon} alt="whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;