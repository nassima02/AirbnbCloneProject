import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './search-bar.scss'

const SearchBar = () => {
    return(
        <div className='search'>
            <div className='search__child'>
                <p>Destination</p>
                <p className='search__child__subtext'>Rechercher une Destination</p>
            </div>
            <div className='search__child'>
                <p>Arrivée</p>
                <p className='search__child__subtext'>Quand ? </p>
            </div>
            <div className='search__child'>
                <p>Départ</p>
                <p className='search__child__subtext'>Quand ? </p>
            </div>
            <div className='search__last-child'>
                <div className='search__last-child__box'>
                    <p>Voyageurs</p>
                    <p className='search__child__subtext'>Ajouter des voyageurs</p>
                </div>
                <SearchIcon className='search__last-child__button'/>
            </div>   
        </div>
    )
}

export default SearchBar;