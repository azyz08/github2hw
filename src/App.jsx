import './App.scss'

function App() {

  return (
    <>
      <div className="navShow">
        <div className="nav">
          <img src="/logo.png" alt="" />
          <input type="checkbox" id='m' />
          <ul>
            <div className="labelBox">
              <label htmlFor="m"><i class="fa-solid fa-xmark"></i></label>
              <button>Get Started</button>
            </div>
            <li><a href="">Features</a></li>
            <li><a href="">Premium</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">About</a></li>
            <li><i class="fa-solid fa-circle cir"></i></li>
            <li className='sign'><a href="">Sign in</a></li>
            <button className='btn1'>Get Started</button>
          </ul>
          <label htmlFor="m"><i class="fa-solid fa-bars"></i></label>
        </div>

        <div className="show">
          <h1>Propel your business.</h1>
          <p>Propel comes with everything you need to get your business rolling.</p>
          <button>Get Started</button>
        </div>
      </div>

      <h2 className='midText'>
        <span>Promoting your business and services with <br /> Propel:</span>
        A responsive, multi-page business <br /> template with everything you need propel your business.
      </h2>

      <div className="foods">
        <div className="food">
          <img src="/f.png" alt="" />
          <h3>Pro ad constituto</h3>
          <p>Ne usu illud albucius abhor reant, <br /> partiendo scriptorem mel ne.</p>
        </div>
        <div className="food">
          <img src="/f2.png" alt="" />
          <h3>Eam commodo</h3>
          <p>Ne usu illud albucius abhor reant, <br /> partiendo scriptorem mel ne.</p>
        </div>
        <div className="food">
          <img src="/f3.png" alt="" />
          <h3>Reformidans eis</h3>
          <p>Ne usu illud albucius abhor reant, <br /> partiendo scriptorem mel ne.</p>
        </div>
      </div>
    </>
  )
}

export default App
