import './Experience.css';

export default function Experience({ occupation, dateRange, children }) {
    return (

        <div className='experience-container'>
            <h3 className='occ-title'>{occupation}</h3>
            <h4 className='date-range'>{dateRange}</h4>
            <p className='description'>{children}</p>
        </div>
    )
}