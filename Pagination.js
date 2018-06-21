import React from "react";

const PER_PAGE = 10;

function Pagination(props){

  var paginationList = [];
  var paginationCounter = 1;

  for( var i = 0; i < props.counter; i += PER_PAGE){

    var str =  i;
    var end = i + PER_PAGE;

    var query = `?str=${str}&end=${end}`;

    paginationList.push(<li key={i}>
                          <a data-str={str} href={query} onClick={props.click}>{paginationCounter++}</a>
                        </li>)
  }

  return(
      <ul className={props.className}>
        {paginationList}
      </ul>
  );
}


export default Pagination;
