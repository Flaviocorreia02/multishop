
export const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <>
            <div className="col-12">
                <nav>
                    <ul className="pagination justify-content-center">
                        {pages.map((page, index) => {
                            return (
                                <li className={page == currentPage ? "page-item active" : "page-item"} key={index} onClick={() => setCurrentPage(page)}><a className="page-link">{page}</a></li>
                            );
                        })}

                    </ul>
                </nav>
            </div>
        </>

    );
};