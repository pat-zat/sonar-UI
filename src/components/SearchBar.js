import React from 'react';
import { connect } from 'react-redux';
import { dataChange } from '../actions';

class SearchBar extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchFilters();
    }
    
    pageChange = (e) => {
        this.props.itemsPageChange(e.page);
    }
    dataStateChange = (e) => {
        this.props.dataChange(e.data);
    }

    renderList() {
      
            return (
                <div className="item" >
  
                </div>
            );
       
    }

    render () {
        return <div className="relaxed ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {

    let items = state.products.slice(skip, skip + take);
    console.log();

    return { 
        searchType: items,
    };
}

export default connect(mapStateToProps, { fetchBrands, fetchCats, fetchSubCats, sierraSearched, engineSearched, interSearched })(SearchBar);