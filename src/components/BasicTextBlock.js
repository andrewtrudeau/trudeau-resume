import './BasicTextBlock.css';

export default function BasicTextBlock({ icon, name, children }) {
    return (

        <div className='container'>
            <h1>{icon} <span className='text-block-title'>{name}</span></h1>
            <hr />
            <p className='block-text'>{children}</p>
        </div>
    )
}