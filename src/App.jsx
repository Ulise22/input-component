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
            <Input nameOfClass='normal-input' />
          </div>
        </article>
        <article>
          <div className='input__container'>
            <code>&lt;Input error /&gt;</code>
            <Input nameOfClass='error-input' />
          </div>
        </article>
        <article>
          <div className='input__container'>
            <code>&lt;Input disabled /&gt;</code>
            <Input nameOfClass='disabled-input' disabled={true} />
          </div>
        </article>
        <article className='article__container'>
          <div className='input__container'>
            <code>&lt;Input helperText="Some intersting text" /&gt;</code>
            <Input nameOfClass='normal-input' helperText="Some interesting text" />
          </div>
          <div className='input__container'>
            <code>&lt;Input helperText="Some intersting text" error /&gt;</code>
            <Input nameOfClass='error-input' helperText="Some interesting text" />
          </div>
        </article>
        <article>
          <div className='input__container'>
            <code>&lt;Input error /&gt;</code>
            <Input nameOfClass='error-input' />
          </div>
        </article>
        <article>
          <div className='input__container'>
            <code>&lt;Input error /&gt;</code>
            <Input nameOfClass='error-input' />
          </div>
        </article>
        <article>
          <div className='input__container'>
            <code>&lt;Input error /&gt;</code>
            <Input nameOfClass='error-input' />
          </div>
        </article>

        <footer>
          <p className='foot'>created by <a href='https://github.com/Ulise22' rel='noreferrer' target='_Blank'>Ulises</a> - devChallenges.io</p>
        </footer>
      </section>  
    </main>
  )
}