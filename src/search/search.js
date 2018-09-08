import React, { Component } from "react";
import axios from "axios";

import SearchResults from "./searchResults/searchResults";

import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "10048189-b93507d820e85aad353575c25",
    images: []
  };

  onTextChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
            this.state.searchText
          }&image_type=photo&per_page=${this.state.amount}`
        )
        .then(res => {
          if (this.state.searchText === "") {
            this.setState({ images: [] });
          } else {
            this.setState({ images: res.data.hits });
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  };
  onAmountChange = (e, index, value) => {
    this.setState({ amount: value });
  };
  render() {
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for images"
          fullWidth={true}
        />
        <br />
        <SelectField
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <SearchResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
