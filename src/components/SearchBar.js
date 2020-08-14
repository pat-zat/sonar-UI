import React from 'react';
import { connect } from 'react-redux';

class ProductGrid extends React.Component {

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

