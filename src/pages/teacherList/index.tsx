import React from 'react';

// components
import TeacherItem from '../../components/teacherItem';
import PageHeader from '../../components/pageHeader';
import Input from '../../components/input';

// style
import './style.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os proffys disponíveis" >
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week-day" label="Dia da Semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;