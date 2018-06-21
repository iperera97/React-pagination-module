# React-pagination-module ( depends on records length )

* First Open Pagination.js file and change <b>PER_PAGE</b> constant as u want
* Import this file and pass following props
  * className ( for main ul element )
  * counter ( all records length )
  * click (event handler),
    * when event fire you can get href attribute ex - event.target.getAttribute("href");
  ### ex - if PER_PAGE is 20 first anchor tag's href will be "?str=0&end=20" and so on </b>
