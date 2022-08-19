import './Skill.css';

export default function Skill({ skillName, skillLevel }) {

    return (
        <div className='skill-container'>
            <p>{skillName}</p>
            <div className="star-group">
                <div className={`dot ${skillLevel > 4 ? "on" : ""}`}></div>
                <div className={`dot ${skillLevel > 3 ? "on" : ""}`}></div>
                <div className={`dot ${skillLevel > 2 ? "on" : ""}`}></div>
                <div className={`dot ${skillLevel > 1 ? "on" : ""}`}></div>
                <div className={`dot ${skillLevel > 0 ? "on" : ""}`}></div>
            </div>
        </div>
    )
}