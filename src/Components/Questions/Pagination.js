import React from "react";


const Pagination = () => {
  return (
    <>
      <nav aria-label="Page navigation example" style={{fontSize:"18px"}}>
  <ul class="pagination justify-content-center my-4">
    <li class="page-item disabled">
      <a class="page-link " href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
     <li class="page-item active" aria-current="page">
      <span class="page-link">
        1
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link text-muted" href="#">2</a></li>
    <li class="page-item"><a class="page-link text-muted" href="#">3</a></li>
    <li class="page-item"><a class="page-link text-muted" href="#">4</a></li>
    <li class="page-item"><a class="page-link text-muted" href="#">5</a></li>
    <li class="page-item"><a class="page-link text-muted" href="#">...</a></li>
    <li class="page-item"><a class="page-link text-muted" href="#">1000000</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
    </>
  );
};

export default Pagination;
