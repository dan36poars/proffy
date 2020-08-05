import React from 'react';

import { Link } from 'react-router-dom';

// icons
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/icons/back.svg';

// style
import './style.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="back" />
                </Link>
                <img src={logoImg} alt="proffy" />
            </div>

            <div className="header-content">
                <strong>
                    {props.title}
                </strong>
            </div>
        </header>
    );
}

export default PageHeader;