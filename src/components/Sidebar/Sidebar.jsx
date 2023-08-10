import './Sidebar.css'

export default function Sidebar () {
    return(
    <aside className='sidebar'>
        <h4 className='sidebar__title'><span>Dev</span>challenges.io</h4>
        <ul className='sidebar__list'>
            <li>Typography</li>
            <li>Grid</li>
            <li>Buttons</li>
            <li className='sidebar__list__item'>Inputs</li>
        </ul>
    </aside>
    )
}