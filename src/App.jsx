import './App.css'
import Input from './components/Input/Input'
import Sidebar from './components/Sidebar/Sidebar'

export default function App () {
  return(
    <main className='container'>
      <Sidebar />
      <section>
        <h1 className='title'>Inputs</h1>
        <article>
          <div className='input__container'>
            <code>&lt;Input /&gt;</code>
            <Input />
          </div>
        </article>

        <footer>
          <p className='foot'>created by <a href='https://github.com/Ulise22' rel='noreferrer' target='_Blank'>Ulises</a> - devChallenges.io</p>
        </footer>
      </section>  
    </main>
  )
}