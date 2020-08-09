import React, { useState } from 'react';
import PageHeader from '../../components/pageHeader';

// components
import Input from '../../components/input';
import TextArea from '../../components/textarea';
import Select from '../../components/select';

// styles
import './style.css';

// icons
import warningIcon from '../../assets/icons/warning.svg';


function TeacherForm() {

    const [ scheduleItems, setScheduleItems ] = useState([
        { week_day: 10, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 1, from: '', to: '' }
        ]);    
    }

    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader
                title="Que incrível que você quer dar aula"
                description="Para dar início a sua jornada é preencher o formulário"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatssApp" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
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
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}> + Novo Horário</button>
                    </legend>
                    {scheduleItems.map(scheduleitem => {
                        return (
                            <div key={scheduleitem.week_day} className="schedule-item">
                                <Select
                                    name="week-day"
                                    label="Dia da Semana"
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
                                <Input type="time" name="from" label="Das" />
                                <Input type="time" name="to" label="Até" />
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
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;