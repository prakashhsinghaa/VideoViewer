import React from "react";

class SearchBar extends React.Component {

    state = {term:''};

    onInputChange = (event) => {
       this.setState({term:event.target.value});
    };

    onFormSubmit = (event) => {
      event.preventDefault();

      this.props.onCall(this.state.term);
    };

   render() {
       return (
        <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" 
          value ={this.state.term} 
          onChange={this.onInputChange}
          />
        </div>
        
      </form>
       );
   }
}

export default SearchBar;


/* <div className=" search-bar" >
           <form className="ui form">
             <div className="field">
                 <label>Video Search</label>
                 <input type="text"></input>
             </div>
           </form>
         </div> */