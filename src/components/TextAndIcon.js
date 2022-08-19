import './TextAndIcon.css';

export default function TextAndIcon({ icon, children }) {
    return (

        <div className='container'>
            <p>{icon} <span className='title'>{children}</span></p>
        </div>
    )
}