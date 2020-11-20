import React, { useState, useCallback } from 'react';
import './SetProject.scss'
import TeamTable from './table'
import { Link } from "react-router-dom"


const SetProject = () => {
    const projectName = '(프로젝트 이름)';
    const [team, setTeam] = useState([
        {
            id : 1,
            name : '1번',
            email : 'number1@gmail.com',
            date : '2020-01-01'
        },
        {
            id : 2,
            name : '2번',
            email : 'number2@gmail.com',
            date : '2020-02-02'
        },
        {
            id : 3,
            name : '3번',
            email : 'number3@gmail.com',
            date : '2020-03-03'
        },
        {
            id : 4,
            name : '4번',
            email : 'number4@gmail.com',
            date : '2020-04-04'
        }
    ])
    const onRemove = useCallback(
        id => {
            setTeam(team.filter(teamate => teamate.id !== id))
        },
        [team],
    );
    return(
        <div className = "background-setProject">
            <div className = "form-setProject">
                <div>
                    <div className = "projectColor-setProject" />
                    <button className = "changeColor-setProject" onClick ={() => alert("제작 중인 시스템입니다")}>색상 변경</button>
                </div>
                <div className = "projectNameBackground-setProject">
                    <div className = "projectName-setProject">{projectName}</div>
                </div>
                <div>    
                    <TeamTable team = {team} onRemove = {onRemove} />
                </div>
                <br/><br/><br/><br/>
                <div className = "deleteProject-setProject">
                    <div className = "deleteProjectTitle-setProject">Delete This Project</div>
                    <div className = "deleteProjectContent-setProject">Once you delete a project, there is no going back. Please be certain</div>
                    <Link to = "/"><button className = "buttonDeleteProject-setProject" onClick ={() => alert("are you sure you want to delete your project?")}>Delete This Project</button></Link>
                </div>
            </div>
        </div>
    );
    
}

export default SetProject; 