import React from 'react'
import AddBtn from '../../SharedComponents/AddBtn/AddBtn'
import Member from '../../SharedComponents/Member/Member'
import SearchBar from '../../SharedComponents/SearchBar/SearchBar'
import './Members.scss'

const Members = () => {
    return (
        <div className="members">
            {/* FIXME: below header has to be made as seperate component. currently it is following books section header classes */}
            <div className="books--header">
                <div className="books--header-search">
                    <SearchBar placeholder="search members by name" />
                    <AddBtn />
                </div>
            </div>
            <div className="members--body">
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
            </div>
        </div>
    )
}

export default Members
