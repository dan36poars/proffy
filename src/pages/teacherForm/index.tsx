import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/pageHeader';

import { useHistory } from 'react-router-dom';


// Services
import api from '../../services/api';

// components
import Input from '../../components/input';
import TextArea from '../../components/textarea';
import Select from '../../components/select';

// styles
import './style.css';

// icons
import warningIcon from '../../assets/icons/warning.svg';


function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 1, from: '', to: '' }
        ]);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        })
        .then(()=> {
            alert('Cadastro realizado com succeso!');
            history.push('/');
        })
        .catch(()=>{
            alert('Erro no Cadastro');
        });
        
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map( (scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field] : value }
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader
                title="Que incrível que você quer dar aula"
                description="Para dar início a sua jornada é preencher o formulário"
            />
            <main>
                <form action="" onSubmit={handleCreateClass} >
                    <fieldset>
                        <legend>Seus Dados</legend>
                        <Input value={name} onChange={(e) => { setName(e.target.value) }} name="name" label="Nome Completo" />
                        <Input value={avatar} onChange={(e) => { setAvatar(e.target.value) }} name="avatar" label="Avatar" />
                        <Input value={whatsapp} onChange={(e) => { setWhatsapp(e.target.value) }} name="whatsapp" label="WhatssApp" />
                        <TextArea value={bio} onChange={(e) => { setBio(e.target.value) }} name="bio" label="Biografia" />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologio', label: 'Biologio' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' }
                            ]}
                        />
                        <Input value={cost} onChange={(e) => { setCost(e.target.value) }} name="cost" label="Custo da sua hora por aula" />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}> + Novo Horário</button>
                        </legend>
                        {scheduleItems.map((scheduleitem, index) => {
                            return (
                                <div key={scheduleitem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={ scheduleitem.week_day }
                                        onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value) }
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input value={ scheduleitem.from } onChange={ e => setScheduleItemValue(index, 'from', e.target.value) } type="time" name="from" label="Das" />
                                    <Input value={ scheduleitem.to } onChange={ e => setScheduleItemValue(index, 'to', e.target.value) } type="time" name="to" label="Até" />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="alert" />
                        importante! <br />
                        Preencha todos os dados.
                    </p>
                        <button type="submit">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;