import React from 'react';

function NavBar({totalCounters})
{
  return (
      <NavBar className='navbar navbar-light bg-light'>
          <div className='navbar-brand'>
            <i className='fas fa-shopping-cart fa-lg m-2'>
                <span className='badge badge-pill badge-info m-2' 
                style={{ width: 50}}>{totalCounters}
                </span>
            </i>
          Items
          </div>
      </NavBar>
  )
}

export default NavBar;
