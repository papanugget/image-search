import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends React.Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: "https://pixabay.com/api",
        apiKey: '13196765-4298ecde5709bfcd49e695be0',
        images: []
    }
    onTextChange = (e) => {
        const val = e.target.value;
        this.setState({[e.target.name]: val}, () => {
            if(val === '') {
                this.setState({images: []});
            }else{
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=false`)
                .then(res => this.setState({images: res.data.hits}))
                .catch(err => console.log(err))
            }
        });
        // console.log(this.state.searchText);
    };
    onAmountChange = (e, index, value) => this.setState({ amount: e.target.value });

    render() {
        // console.log(this.state.images);
        return (
            <div>
                <FormControl fullWidth={true}>
                    <TextField
                        id="standard-dense"
                        label="Search For Images"
                        name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange}
                        // floatingLabelText="Search For Images"
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