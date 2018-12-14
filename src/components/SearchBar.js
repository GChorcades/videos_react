import React from 'react';

class SearchBar extends React.Component {
    state = {
        term:''
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };

    render () {
        return (
            <div className="ui segment">
            <form onSubmit={ this.onFormSubmit} className="ui form">
                <div className="field">
             
                    <label htmlFor="search">Video Search</label>
                    <input 
                        
                        onChange = {e => this.setState({ term:e.target.value })}
                        id="search" 
                        type="text"  
                        placeholder="Search..."
                        value = {this.state.term} 
                        
                        />
                </div>
            </form>    

            </div>
        );
    }
};

export default SearchBar;