import React from 'react';

// style
import './style.css';
import PageHeader from '../../components/pageHeader';

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container" >
            <PageHeader title="Estes são os proffys disponíveis" />
        </div>       
    );
}

export default TeacherList;