(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(63)},44:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a.n(i),c=a(20),s=a(18),l=(a(44),a(13)),u=a(14),m=a(16),p=a(15),v=a(17),f=a(3),d=a(26),h=a(10),g=a(8),b=function(e){var t=e.value,a=e.onChange,n=e.onSubmit;return r.a.createElement("div",{className:"search-bar-container"},r.a.createElement("form",{className:"search-bar",onSubmit:n,role:"search",autoComplete:"false"},r.a.createElement("label",{htmlFor:"search"}),r.a.createElement(h.a,{icon:g.d,className:"search-bar__icon"}),r.a.createElement("input",{type:"text",className:"search-bar__input",onChange:function(e){return a(e.target.value)},id:"search",value:t,placeholder:"search..."})))},_="FETCH_MOVIES_DATA",E="FETCHED_DATA",O="RECEIVE_ERROR",N="OPEN_MOVIE_MODAL",k="FETCH_MOVIE_DATA",j="CLOSE_MOVIE_MODAL",y="FETCH_CREDITS",F="SHOW_ERROR",w="ADD_MOVIE",C="GO_TO_FAVORITES",S="CLOSE_FAVORITE",M="REMOVE_FROM_FAVORITE",P="GO_TO_NEXT_PAGE",T="GO_BACK_TO_PAGE",D="GO_TO_CHOSEN_PAGE",I="SET_TOTAL_PAGES",R="RESET_PAGE",x="SET_VISIBILITY",A=a(12),B=a(36),L=a(2),V=_,G=E,H=O,W={fetchedData:{},isFetching:!1,isErrored:!1,movieFilter:"New Releases"},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(L.a)({},e,{isFetching:!0,isErrored:!1});case G:return Object(L.a)({},e,{fetchedData:t.data.reduce(function(e,t){return e[t.id]=t,e},{}),isFetching:!1,isErrored:!1});case H:return Object(L.a)({},e,{isErrored:!0,isFetching:!1});default:return e}},J=N,U=k,Y=j,q=y,K=F,X={isOpen:!1,isFetching:!1,isErrored:!1,movieDetails:{}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(L.a)({},e,{isOpen:!0,isFetching:!0,isErrored:!1,movieId:t.movieId});case U:return Object(L.a)({},e,{movieDetails:Object(L.a)({},e.movieDetails,t.data)});case Y:return Object(L.a)({},e,{isOpen:!1,isErrored:!1});case q:return Object(L.a)({},e,{isFetching:!1,movieDetails:Object(L.a)({},e.movieDetails,t.data)});case K:return Object(L.a)({},e,{isErrored:!0});default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New Releases",t=arguments.length>1?arguments[1]:void 0;return"SET_MOVIES_FILTER"===t.type?t.filter:e},Z=a(9),ee=a(25),te=w,ae=C,ne=S,re=M,ie={data:{},isFavoritesOpen:!1,activeBookMarks:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(L.a)({},e,{data:Object(L.a)({},e.data,Object(ee.a)({},t.data.id,t.data)),activeBookMarks:[].concat(Object(Z.a)(e.activeBookMarks),[t.data.id])});case re:return Object(L.a)({},e,{data:Object(L.a)({},Object.keys(e.data).reduce(function(a,n){return+t.movieId===+n?a:(a[n]=e.data[n],a)},{})),activeBookMarks:e.activeBookMarks.filter(function(e){return e!==t.movieId})});case ae:return Object(L.a)({},e,{isFavoritesOpen:!0});case ne:return Object(L.a)({},e,{isFavoritesOpen:!1});default:return e}},ce=P,se=T,le=D,ue=I,me=R,pe={currentPage:1,totalPages:0,pageNeighboursNumber:2},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(L.a)({},e,{currentPage:Math.min(e.currentPage+2*e.pageNeighboursNumber+1,e.totalPages)});case se:return Object(L.a)({},e,{currentPage:Math.max(e.currentPage-2*e.pageNeighboursNumber-1,0)});case le:return Object(L.a)({},e,{currentPage:t.data});case ue:return Object(L.a)({},e,{totalPages:t.data});case me:return Object(L.a)({},e,{currentPage:1});default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SET_SEARCH_INPUT"===t.type?t.data:e},de=x,he=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return t.type===de?t.value:e},ge=Object(A.c)({movies:$,movie:z,movieFilter:Q,favorite:oe,pageState:ve,searchInput:fe}),be=Object(A.c)({isSidePanelShown:he}),_e=Object(A.c)({page:ge,ui:be}),Ee=function(e){var t=e.page.favorite.activeBookMarks,a=e.page.pageState.currentPage;return t.slice(20*(a-1),20*a).reduce(function(t,a){return t[a]=e.page.favorite.data[a],t},{})},Oe=function(e){var t=e.page.favorite.activeBookMarks.length;return Math.ceil(t/20)},Ne=_e,ke=Object(A.d)(Ne,Object(A.a)(B.a)),je=P,ye=T,Fe=D,we=I,Ce=R,Se=function(e){return{type:we,data:e}},Me=function(){return{type:Ce}},Pe=_,Te=E,De=O,Ie=function(){return{type:De}},Re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t=t?"&query=".concat(t.replace(/\s+/g,"+")):"",ke.dispatch({type:Pe}),function(a,n){var r=n().page.pageState.currentPage,i="https://api.themoviedb.org/3/".concat(e,"?api_key=").concat("e439cc3bb62f4282847a5012c7511e5f").concat(t,"&page=").concat(r);return fetch(i).then(function(e){return e.json()},function(e){return a(Ie())}).then(function(e){if(e.results){var t=e.results.map(function(e){return{title:e.title,id:e.id,poster:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),rating:e.vote_average}});a(function(e){return{type:Te,data:e}}(t)),a(Se(e.total_pages))}else a(Ie())})}},xe=N,Ae=k,Be=j,Le=F,Ve=y,Ge=function(){return{type:Be}},He=function(){return{type:Le}},We=function(e){return ke.dispatch({type:xe}),function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("e439cc3bb62f4282847a5012c7511e5f","&append_to_response=videos")).then(function(e){return e.json()},function(e){return t(He())}).then(function(e){var a={background:"https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path),poster:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),video:e.videos.results[0].key,rating:6.7,plot:e.overview,title:e.title,votes:e.vote_count,genre:e.genres.map(function(e){return e.name}).join(", "),extPlot:e.overview,releaseData:e.release_date,revenue:e.revenue,runtime:e.runtime,imdbId:e.imdb_id};t(function(e){return{type:Ae,data:e}}(a))}).catch(function(e){return t(He())})}},$e=function(e){return function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("e439cc3bb62f4282847a5012c7511e5f")).then(function(e){return e.json()},function(e){return t(He())}).then(function(e){console.log(e);var a={stars:e.cast.slice(0,4).map(function(e){return e.name}).join(", "),directors:e.crew[0].name};t(function(e){return{type:Ve,data:e}}(a))})}},Je=w,Ue=C,Ye=S,qe=M,Ke=function(){return{type:Ye}},Xe=function(e){return{type:"SET_MOVIES_FILTER",filter:e}},ze=Object(f.b)(null,function(e){return{fetchMovies:function(t,a){return e(Re(t,a))},closeModal:function(){return e(Ge())},closeFavorite:function(){return e(Ke())},setFilter:function(t){return e(Xe(t))},resetCurrentPage:function(){return e(Me())},setInput:function(t){return e(function(e){return{type:"SET_SEARCH_INPUT",data:e}}(t))}}})(function(e){var t=e.fetchMovies,a=e.closeModal,i=e.closeFavorite,o=e.setFilter,c=e.setInput,s=e.resetCurrentPage,l=Object(n.useState)(""),u=Object(d.a)(l,2),m=u[0],p=u[1];return r.a.createElement(b,{value:m,onChange:function(e){return p(e)},onSubmit:function(e){e.preventDefault(),m&&(a(),i(),o('Search Results related to "'.concat(m,'"')),s(),t("search/movie",m),c(m),p(""))}})}),Qe=function(e){var t=e.onClick;return r.a.createElement("div",{className:"header__title",onClick:t},r.a.createElement(c.c,{to:"/",activeStyle:{width:"100%",display:"block",textDecoration:"none"}},r.a.createElement("h1",{className:"header__text"},"Movie Finder")))},Ze=Object(f.b)(null,function(e){return{fetchData:function(t){return e(Re(t))},setFilter:function(t){return e(Xe(t))},resetCurrentPage:function(){return e(Me())},closeModal:function(){return e(Ge())},closeFavorite:function(){return e(Ke())}}})(function(e){var t=e.fetchData,a=e.setFilter,n=e.closeFavorite,i=e.resetCurrentPage,o=e.closeModal;return r.a.createElement(Qe,{onClick:function(){a("New Releases"),t("movie/now_playing"),n(),i(),o()}})}),et=(a(53),function(){return r.a.createElement("header",{className:"header"},r.a.createElement(Ze,null),r.a.createElement(ze,null))}),tt=a(38),at=a.n(tt),nt=function(e){var t=e.filter,a=e.isSidePanelShown;return r.a.createElement("li",{className:"movie-filters__item ".concat(t.toLowerCase().split(" ").join("-")),style:{opacity:a?"1":""}},r.a.createElement(c.b,{to:"/".concat(t.replace(/\s/g,""))},r.a.createElement("button",{type:"button",className:"movie-filters__btn-link"},t)),r.a.createElement(h.a,{icon:g.a,className:"movie-filters__icon"}))},rt={"New Releases":"movie/now_playing",Trending:"trending/movie/week","Coming Soon":"movie/upcoming",Favourites:""},it=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"dispatchFuncs",value:function(e){this.props.setFilter(e),this.props.fetchMovies(rt[e]),this.props.closeFavorite(),this.props.resetCurrentPage(),this.props.closeModal()}},{key:"handleClick",value:function(e){var t=e.target.closest("li");t&&(t.classList.contains("new-releases")?this.dispatchFuncs("New Releases"):t.classList.contains("trending")?this.dispatchFuncs("Trending"):t.classList.contains("coming-soon")?this.dispatchFuncs("Coming Soon"):t.classList.contains("favourites")&&(this.props.setFilter("Favourites"),this.props.closeModal(),this.props.resetCurrentPage(),this.props.setPagesNumbers(this.props.pagesNumber),this.props.goToFavorite()))}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"movie-filters__list",onClick:function(t){return e.handleClick(t)}},Object.keys(rt).map(function(t){return r.a.createElement(nt,{key:at.a.v4(),filter:t,isSidePanelShown:e.props.isSidePanelShown})}))}}]),t}(r.a.Component),ot=Object(f.b)(function(e){return{pagesNumber:Oe(e),isSidePanelShown:e.ui.isSidePanelShown}},function(e){return{fetchMovies:function(t){return e(Re(t))},setFilter:function(t){return e(Xe(t))},closeModal:function(){return e(Ge())},goToFavorite:function(){return e({type:Ue})},closeFavorite:function(){return e(Ke())},setPagesNumbers:function(t){return e(Se(t))},resetCurrentPage:function(){return e(Me())}}})(it),ct=function(){return r.a.createElement("div",{className:"some-block"})},st=(a(56),Object(f.b)(function(e){return{isShown:e.ui.isSidePanelShown}},null)(function(e){var t={width:"200px"};return t=e.isShown?t:{},r.a.createElement("div",{className:"page__sidebar",style:t},r.a.createElement(ot,null),r.a.createElement(ct,null))})),lt=function(e){var t=e.data,a=e.onClick,n=e.onBookmarkClick,i=e.isBookMarkAdded,o=t.rating<6?"tomato":t.rating>=7?"#2db92d":"#FFB10A";return r.a.createElement("div",{className:"movie-card",onClick:function(e){e.target.closest(".movie-card__add-favorite")||a(t.id)}},r.a.createElement("span",{className:"movie-card__rate-mark",style:{backgroundColor:o}},t.rating),r.a.createElement(h.a,{icon:g.c,className:"movie-card__add-favorite",onClick:function(){return n(i,t)},style:{color:i?"#228b22":"#F83745"}}),r.a.createElement("div",{className:"movie-card__poster"},r.a.createElement("img",{src:t.poster,alt:"film-poster",className:"movie-card__img"})),r.a.createElement("div",{className:"movie-card__title"},r.a.createElement("h3",{className:"movie-card__title-text"},t.title.split(" ").slice(0,3).join(" ")),r.a.createElement("p",{className:"movie-card__text"},t.title)))},ut=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleBookMarkClick=function(e,t){e?a.props.removeFromFavorite(t.id):a.props.addToFavorite(t)},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.fetchedMovies,n=t.fetchMovie,i=t.fetchMovieCredits,o=t.favoriteMovies,c=t.isFavoritesOpen,s=t.activeBookMarks,l=c?o:a;return Object.keys(l).length?r.a.createElement("div",{className:"movies-container"},Object.keys(l).map(function(t){return r.a.createElement(lt,{data:l[t],isBookMarkAdded:s.includes(+t),key:l[t].id,onClick:function(e){n(e),i(e)},onBookmarkClick:e.handleBookMarkClick})})):null}}]),t}(r.a.Component),mt=Object(f.b)(function(e){return{fetchedMovies:e.page.movies.fetchedData,isFavoritesOpen:e.page.favorite.isFavoritesOpen,activeBookMarks:e.page.favorite.activeBookMarks,favoriteMovies:Ee(e)}},function(e){return{fetchMovie:function(t){return e(We(t))},fetchMovieCredits:function(t){return e($e(t))},addToFavorite:function(t){return e(function(e){return{type:Je,data:e}}(t))},removeFromFavorite:function(t){return e(function(e){return{type:qe,movieId:e}}(t))}}})(ut),pt=(a(57),function(e){var t=e.onClick,a=e.pagesLayout,n=e.pageData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{"aria-label":"Page navigation example",className:"pagination-nav"},r.a.createElement("ul",{className:"pagination-nav__list",onClick:t},a.map(function(e,t){if("Left"===e)return r.a.createElement("li",{className:"pagination-nav__item",key:t,"data-id":"Left"},r.a.createElement("button",{className:"pagination-nav__button ","aria-label":"Previous"},"\xab"));if("Right"===e)return r.a.createElement("li",{className:"pagination-nav__item",key:t,"data-id":"Right"},r.a.createElement("button",{className:"pagination-nav__button","aria-label":"Next"},"\xbb"));var a=n.currentPage===+e?"pagination-nav__button pagination-nav__button_active":"pagination-nav__button";return r.a.createElement("li",{className:"pagination-nav__item",key:t,"data-id":+e},r.a.createElement("button",{className:a},e))}))))});var vt=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=[],r=e;r<=t;r+=a)n.push(r);return n};var ft=function(e){var t=e.currentPage,a=void 0===t?1:t,n=e.pageNeighboursNumber,r=void 0===n?1:n,i=e.totalPages,o=void 0===i?0:i,c=2*r+3;if(c+2<o){var s=a-r,l=a+r,u=o-1,m=Math.max(2,s),p=l<u?l:u,v=vt(m,p),f=c-v.length-1,d=m>2,h=p<u;if(d&&!h){var g=vt(m-f,m-1);v=["Left"].concat(Object(Z.a)(g),Object(Z.a)(v))}if(!d&&h){var b=vt(p+1,p+f);v=[].concat(Object(Z.a)(v),Object(Z.a)(b),["Right"])}return d&&h&&(v=["Left"].concat(Object(Z.a)(v),["Right"])),[1].concat(Object(Z.a)(v),[o])}return Object(Z.a)(vt(1,o))},dt={"New Releases":"movie/now_playing",Trending:"trending/movie/week","Coming Soon":"movie/upcoming",Favourites:"","Watch Later":""},ht=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClicks=function(e){var t=e.target.closest("li");t&&("Left"===t.dataset.id?a.props.goToPrevious():"Right"===t.dataset.id?a.props.goToNext():a.props.goToChosen(+t.dataset.id),a.props.isFavoritesOpen||(a.props.filter.includes("Search")?(console.log(a.props.searchInput),a.props.fetchData("search/movie",a.props.searchInput)):a.props.fetchData(dt[a.props.filter])))},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=ft(this.props.pageData);return r.a.createElement(pt,{onClick:this.handleClicks,pagesLayout:e,pageData:this.props.pageData})}}]),t}(r.a.Component),gt=Object(f.b)(function(e){return{pageData:e.page.pageState,filter:e.page.movieFilter,isFavoritesOpen:e.page.favorite.isFavoritesOpen,searchInput:e.page.searchInput}},function(e){return{goToNext:function(){return e({type:je})},goToPrevious:function(){return e({type:ye})},goToChosen:function(t){return e(function(e){return{type:Fe,data:e}}(t))},fetchData:function(t,a){return e(Re(t,a))}}})(ht),bt=(a(58),Object(f.b)(function(e){return{movieFilter:e.page.movieFilter}},null)(function(e){var t=e.movieFilter;return r.a.createElement("div",{className:"movies-showcase"},r.a.createElement("h2",{className:"movie-showcase__movies-type"},t),r.a.createElement(mt,null),r.a.createElement(gt,null))}));var _t=function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"min")},Et=function(e){if(e.length<4)return"$ ".concat(e);for(var t=e.split("").reverse(),a="",n=0;n<e.length;n+=3)a+=t.slice(n,n+3).join("")+",";return"$".concat(a.split("").reverse().join("").replace(/^,(\d)/,"$1"))},Ot=(a(59),function(e){var t=e.data;return t.plot?r.a.createElement("section",{className:"movie-info"},r.a.createElement("div",{className:"movie-info__general",style:{background:"url(".concat(t.background,") center / cover no-repeat")}},r.a.createElement("div",{className:"movie-info__general-overlap"}),r.a.createElement("iframe",{title:"trailer",className:"trailer-frame",src:"https://www.youtube.com/embed/".concat(t.video),frameBorder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("section",{className:"movie-inform__basic-inform"},r.a.createElement("p",{className:"basic-inform__content"},r.a.createElement("span",{className:"basic-inform__title"},"Release:"),r.a.createElement("span",{className:"basic-inform__text"},t.releaseData)),r.a.createElement("p",{className:"basic-inform__content"},r.a.createElement("span",{className:"basic-inform__title"},"Revenue:"),r.a.createElement("span",{className:"basic-inform__text"},Et(t.revenue+""))),r.a.createElement("p",{className:"basic-inform__content"},r.a.createElement("span",{className:"basic-inform__title"},"Runtime:"),r.a.createElement("span",{className:"basic-inform__text"},_t(t.runtime))),r.a.createElement("p",{className:"basic-inform__content"},r.a.createElement("span",{className:"basic-inform__title"},"imdb"),r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(t.imdbId),className:"basic-inform__link",target:"_blank",rel:"noopener noreferrer"},t.imdbId))),r.a.createElement("div",{className:"plot"},r.a.createElement("p",{className:"plot__text"},t.plot.slice(0,100)+"..."))),r.a.createElement("section",{className:"movie-info__detailed"},r.a.createElement("header",{className:"movie-info__header"},r.a.createElement("h1",{className:"movie-info__header-text"},t.title)),r.a.createElement("p",{className:"movie-info__short-desc"},r.a.createElement("span",{className:"movie-info__imdb"},"imdb"),r.a.createElement("span",{className:"movie-info__rating"},t.rating),"/10",r.a.createElement("span",{className:"movie-info__votes"},t.votes," Votes")),r.a.createElement("div",{className:"movie-info__container"},r.a.createElement("section",{className:"movie-info__poster-wrapper"},r.a.createElement("img",{src:t.poster,alt:"poster of movie",className:"movie-info__poster"})),r.a.createElement("section",{className:"movie-info__main"},r.a.createElement("div",{className:"inform-block"},r.a.createElement("h6",{className:"inform-block__heading"},"Directors"),r.a.createElement("p",{className:"inform-block__text"},t.directors)),r.a.createElement("div",{className:"inform-block"},r.a.createElement("h6",{className:"inform-block__heading"},"Genre"),r.a.createElement("p",{className:"inform-block__text"},t.genre)),r.a.createElement("div",{className:"inform-block"},r.a.createElement("h6",{className:"inform-block__heading"},"Stars"),r.a.createElement("p",{className:"inform-block__text"},t.stars)))),r.a.createElement("div",{className:"extended-plot"},r.a.createElement("p",{className:"extended-plot__text"},t.extPlot)))):null});Ot.defaultProps={data:{}};var Nt=Object(f.b)(function(e){return{data:e.page.movie.movieDetails}},null)(Ot),kt=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__content"}))},jt=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("h3",{className:"error__text"},"You know, something actually went wrong...!!"))},yt=(a(60),function(e){var t=e.isShown,a=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"show-bar-button",onClick:a},t?r.a.createElement(h.a,{icon:g.e,className:"show-bar-button__icon"}):r.a.createElement(h.a,{icon:g.b,className:"show-bar-button__icon"})))}),Ft=x,wt=Object(f.b)(null,function(e){return{setVisibility:function(t){return e(function(e){return{type:Ft,value:e}}(t))}}})(function(e){var t=e.setVisibility,a=Object(n.useState)(!1),i=Object(d.a)(a,2),o=i[0],c=i[1];return r.a.createElement(yt,{isShown:o,onClick:function(e){c(!o),t(!o)}})}),Ct=(a(61),Object(f.b)(function(e){var t=e.page.movies.isFetching||e.page.movie.isFetching,a=e.page.movies.isErrored||e.page.movie.isErrored;return{isOpen:e.page.movie.isOpen,movieData:e.page.movie.movieDetails,isFetching:t,isErrored:a}},null)(function(e){var t=e.isFetching,a=e.isErrored,n=e.isOpen,i=e.movieData;return r.a.createElement("main",{className:"page-wrapper"},t?r.a.createElement(kt,null):a?r.a.createElement(jt,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(wt,null),r.a.createElement(st,null),n?r.a.createElement(Nt,{data:i}):r.a.createElement(bt,null)))})),St=(a(62),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchMovies("movie/now_playing")}},{key:"render",value:function(){return r.a.createElement("div",{className:"whole-page-wrapper"},r.a.createElement(et,null),r.a.createElement(Ct,null))}}]),t}(r.a.Component)),Mt=Object(f.b)(null,function(e){return{fetchMovies:function(t,a){return e(Re(t,a))}}})(St);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){return r.a.createElement(f.a,{store:ke},r.a.createElement(c.a,null,r.a.createElement(s.a,{path:"/:filter?",component:Mt})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.2aa78147.chunk.js.map