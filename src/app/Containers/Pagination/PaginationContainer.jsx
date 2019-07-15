import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Pagination from "../../Components/Pagination/Pagination";

import { thunkFetchMoviesAction } from "../../Actions/fetchMovies";
import { goToNextPage, goBackPage, goToChosenPage } from "../../Actions/pagination";

import getPageLayout from "../../../utils/getPageLayout";

const filters = {
  "New Releases": "movie/now_playing",
  "Trending": "trending/movie/week",
  "Coming Soon": "movie/upcoming",
  "Favourites": "",
  "Watch Later": ""
};



class PaginationContainer extends React.Component {

  handleClicks = e => {
    const target = e.target.closest("li");

    if (!target) return;

    if (target.dataset.id === "Left") {
      this.props.goToPrevious();
    } else if (target.dataset.id === "Right") {
      this.props.goToNext();
    } else {
      this.props.goToChosen(+target.dataset.id);
    }

    if (!this.props.isFavoritesOpen) {

      //if we don't go to favorite movies page so we can fetch 
      //data for requested page with certain number and the filter value;
      if(this.props.filter.includes("Search")) {
        console.log(this.props.searchInput);
        this.props.fetchData("search/movie", this.props.searchInput);
      } else {
        this.props.fetchData(filters[this.props.filter]);
      }
    }
  };

  render() {
    //getting pagination layout using current data
    const pages = getPageLayout(this.props.pageData);
    return (
      <Pagination 
        onClick={this.handleClicks} 
        pagesLayout={pages} 
        pageData={this.props.pageData}
      />
    )
  }
}



PaginationContainer.propTypes = {
  pageData: PropTypes.object.isRequired,
  goToNext: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  isFavoritesOpen: PropTypes.bool.isRequired,
  goToPrevious: PropTypes.func.isRequired,
  goToChosen: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    pageData: state.page,
    filter: state.movieFilter,
    isFavoritesOpen: state.favorite.isFavoritesOpen,
    searchInput: state.searchInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToNext: () => dispatch(goToNextPage()),
    goToPrevious: () => dispatch(goBackPage()),
    goToChosen: data => dispatch(goToChosenPage(data)),
    fetchData: (partUrl, input) => dispatch(thunkFetchMoviesAction(partUrl, input))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
