import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    // const [value, setValue] = useState('');

    function handleSubmit()
    {
        
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    
                {/* // change a tag to link and add to for the destination route */}
                    <Link className="navbar-brand" to="/"> NewsHub</Link> 
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/trending">Trending</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/tech">Technology</Link>
                            </li>



                        </ul>
                        </div>

                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    
                </div>
            </nav>

        </>
    )
}

export default Navbar;