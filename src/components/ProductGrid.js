import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@progress/kendo-react-grid';
import { GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';

import { fetchProducts } from '../actions';
import { fetchFilters } from '../actions';
import { itemsPageChange } from '../actions';
import { dataChange } from '../actions';


 const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
       return (
        promiseInProgress && 
        <h1>Hey some async call in progress ! </h1>
      );  
     }

     const ChangeIndicator = props => {
         //need to set pending to true if new datastate != old datastate and 
        const { pending } = usePromiseTracker();
           return (
            pending && <h1>Hey some async call in progress ! </h1>
          );  
         }

class ProductGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            dataState: { take: 10, skip: 0 },
            allItems: this.props.products           
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchFilters();
    }
    dataStateChange = (e) => {
        let data = this.props.products;
        this.setState({
            dataState: e.data
        });
        console.log(this.state.dataState);
    }
    
    pageChange = (e) => {
        this.props.itemsPageChange(e.page);
    }
    // groupChange = (e) => {
    //     this.props.itemsPageChange(e.page);
    // }
    // sortChange = (e) => {
    //     this.props.itemsPageChange(e.page);
    // }
    // filterChange = (e) => {
    //     this.props.itemsPageChange(e.page);
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
        return <div className="relaxed ui divided list">{this.renderList()}<LoadingIndicator /></div>
    }
}



const mapStateToProps = state => {


    // sort: state.sort,
    // group: state.group,
    // filter: state.filter,
    //page: state.page,
    //pageSize: state.pageSize
   
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