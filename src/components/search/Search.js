import React from 'react';
import { FormControl, TextField, Select, InputLabel, MenuItem } from '@material-ui/core';
import PixaBay from '../../api/PixaBay'
import ImageResults from '../image-results/ImageResults';

class Search extends React.Component {
    state = {
        searchText: '',
        amount: 15,
        images: []
    }
    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, async () => {
            if(val === '') {
                this.setState({images: []});
            }else{
                const searchTerm = this.state.searchText;
                try {
                    const res = await PixaBay.get(`/api/?key=${PixaBay.defaults.params.apiKey}&q=${searchTerm}&image_type=photo&per_page=${this.state.amount}&safesearch=false` );
                    this.setState({images:res.data.hits});
                }
                catch(e) {
                    console.log('There seems to be a problem' + e);
                }
            }
        });
    };
    onAmountChange = (e) => {
        console.log(e.target.value);
        this.setState({ amount: e.target.value });
    }


    render() {
        return (
            <div>
                <FormControl fullWidth={true}>
                    <TextField
                        id="standard-dense"
                        label="Search For Images"
                        name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange}
                        fullWidth={true}
                    />
                </FormControl>
                <br/>
                    <br/>
                    <br/>
                <FormControl>
                    <InputLabel>Amount</InputLabel>
                    <Select
                        name="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                </FormControl>
                <br/><br/><br/>
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null }
            </div>
        );
    }
}

export default Search;