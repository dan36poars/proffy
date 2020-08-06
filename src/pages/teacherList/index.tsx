import React from 'react';

// components
import TeacherItem from '../../components/teacherItem';
import PageHeader from '../../components/pageHeader';

// style
import './style.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os proffys disponíveis" >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="subject"/>
                    </div>
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