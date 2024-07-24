import './navbar.css'

function Navbar(props){

    return (
        <div className='navbar-container'>
            
            
            <div className='brand-search'>
                <span className='brand-name'>{props.brand_name}</span>

                <form>
                    <input type='text' name='text' placeholder='search for product here'/>
                    <button>search</button>
                </form>

            </div>

            <div>
                <ul className='links'>
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>About</a></li>
                </ul>

            </div>
        
        
        </div>
    )
}

export default Navbar

