import React from 'react'
import {Link} from 'react-router-dom'

import Search from '../../components/Search'
import './topfold.css'

const Topfold = () => {
    return (
        <div className='topfold'>
            {
                window.location.pathname === '/'? (
                    <div className='search-add'>
                        <Search />
                        <button className='btn btn-add'>
                            <Link className='link' to='/expense'>
                                <i className="fi fi-rr-add"></i>
                                Add 
                            </Link>
                        </button>
                    </div>
                ): (
                    <div className='back-cancel'>
                        <button className='btn btn-back'>
                        <Link className='link' to='/'>
                            <i className="fi fi-rr-angle-left"></i>
                                Back
                            </Link>
                        </button>
                        <button className='btn btn-cancel'>
                            <Link className='link' to='/'>
                                <i className="fi fi-rr-cross-circle"></i>
                                Cancel 
                            </Link>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Topfold;