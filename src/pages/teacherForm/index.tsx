import React from 'react';
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
    return(
        <div id="page-teacher-form" className="container" >
            <PageHeader 
                title="Que incrível que você quer dar aula" 
                description="Para dar início a sua jornada é preencher o formulário"
            />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatssApp"/>                   
                    <TextArea name="bio" label="Biografia"/>
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
                    <Input name="cost" label="Custo da sua hora por aula"/>                  
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="alert"/>
                        importante! <br/>
                        Preencha todos os dados.
                    </p>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div> 
    );
}

export default TeacherForm;