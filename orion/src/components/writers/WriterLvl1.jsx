import React from 'react';
import './WriterLvl1.css';
<<<<<<< Updated upstream
import {Link} from 'react-router-dom';
=======
import { Link } from 'react-router-dom';

>>>>>>> Stashed changes

const WriterLvl1 = () => {
    return (
        <div className="background-image">
            <div className="glass-overlay">
                <h1>Level 1</h1>
                <p>
                    Embark on your journey as a budding Promptian. Learn the basics of prompt crafting and master the foundation of the Kingdom of Writers. 
                    Progress simple challenges and gain the knowledge needed to forge a career as a Promptian. As you grow, you'll earn the respect of the 
                    Argoals of Gozo, mastering the fine art of commanding words.
                </p>
<<<<<<< Updated upstream
                <div className="task-list">
                    <Link to='/wriTask' className="task-btn">
                    <button className="task-btn">Task 1<br /><span>Simple Email Writing and reply.</span></button>
                    </Link>
                    <button className="task-btn">Task 2<br /><span>Speech Writing.</span></button>
                    <button className="task-btn">Task 3<br /><span>Social Media Post</span></button>
                    <button className="task-btn">Task 4<br /><span>Blog Post Summary</span></button>
                    <button className="task-btn">Task 5<br /><span>Text Summary</span></button>
                    <button className="challenge-btn">Challenge 1</button>
=======


                <div className="task-list1">
                    <button className="task-btn1"onClick={() => window.location.href='/Task1'}>Task 1<br /><span>Simple Email Writing and reply.</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task2'}>Task 2<br /><span>Speech Writing.</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task3'}>Task 3<br /><span>Social Media Post</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task4'}>Task 4<br /><span>Blog Post Summary</span></button>
                    <button className="task-btn1"onClick={() => window.location.href='/Task5'}>Task 5<br /><span>Text Summary</span></button>
                    <button className="challenge-btn1">Challenge 1</button>

>>>>>>> Stashed changes
                </div>
            </div>
        </div>
       
    );
    }


export default WriterLvl1;
