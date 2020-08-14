import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@progress/kendo-react-grid';
import { GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';

import { fetchProducts } from '../actions';
import { fetchFilters } from '../actions';
import { itemsPageChange } from '../actions';
import { dataChange } from '../actions';

class ProductGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            dataState: { take: 10, skip: 0 },           

        };
    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchFilters();
    }
    dataStateChange = (e) => {
        this.setState({
            dataState: e.data
        });
        console.log(this.state.dataState);
    }
    
    pageChange = (e) => {
        this.props.itemsPageChange(e.page);
    }
    // dataStateChange = (e) => {
    //     this.props.dataChange(e.data);
    // }

    renderList() {
      
            return (
                <div className="item" >
                   <Grid
                    {...this.state.dataState}
                    
                    data={process(this.props.products, this.state.dataState)}
                    sortable={true}  
                    total={this.props.total}
                    pageable={true}
                    onPageChange={this.pageChange}
                    onDataStateChange={this.dataStateChange}                   
                    style={{ height: '540px' }}
                              
                    skip={this.props.skip}                   
                    pageSize={this.props.pageSize}                 
                    filterable={true}
         
                >
                    <GridColumn field="item" title="Sierra Part #" />
                    <GridColumn field="categoryParent" title="Category" />
                    <GridColumn field="categoryChild" title="Subcategory" />
                    <GridColumn field="descriptionLong" title="description" />
                 
                </Grid>
                </div>
            );
       
    }

    render () {
        return <div className="relaxed ui divided list">{this.renderList()}</div>
    }
}



const mapStateToProps = state => {
   
    //state.dataChanging
    let { skip, take } = state.itemPaging;
    let newDataState = state.dataChanging;
    let total = state.products.length;
    let items = state.products.slice(skip, skip + take);
    //console.log(newDataState.dataState);
    //filtering of products would happen here

    return { 
        products: items,
        skip,
        take,
        total,
        pageSize: take,  
        dataState: newDataState,
        filters: state.filters
    };
}

export default connect(mapStateToProps, { fetchProducts, itemsPageChange, dataChange, fetchFilters })(ProductGrid);