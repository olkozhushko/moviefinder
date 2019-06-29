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
      this.props.fetchData(filters[this.props.filter]);
    }
  };

  render() {
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
  goToPrevious: PropTypes.func.isRequired,
  goToChosen: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    pageData: state.page,
    filter: state.movieFilter,
    isFavoritesOpen: state.favorite.isFavoritesOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToNext: () => dispatch(goToNextPage()),
    goToPrevious: () => dispatch(goBackPage()),
    goToChosen: data => dispatch(goToChosenPage(data)),
    fetchData: partUrl => dispatch(thunkFetchMoviesAction(partUrl))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
