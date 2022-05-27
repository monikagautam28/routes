import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor()
    {
        super()

    }

    render()
    {
        return(
         <>
             <h1>Header</h1>
             <Link to='/aboutus'> Aboutus</Link>
         </>

        )
    }

}
export default Header;
