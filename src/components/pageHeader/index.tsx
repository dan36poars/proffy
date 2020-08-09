import React from 'react';

import { Link } from 'react-router-dom';

// icons
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/icons/back.svg';

// style
import './style.css';


// types
interface PageHeaderProps {
    title: string;
    description?: string;
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
                {props.description &&
                    <p>{props.description}</p>
                }
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;