import React from 'react';
import Link from '../Link';
import { useRouter } from 'next/router';

const Pagination = () => {
    const router = useRouter();
    const currentPage = router?.pathname;
    return (
        <div className="pagination-items">
            <ul className="pagination justify-content-end mb--0">
                <li><Link className={currentPage?.includes('column3') ? 'active' : ''} pathname={'/shop'}>1</Link></li>
                <li><Link className={currentPage?.includes('column4') ? 'active' : ''} pathname={'/shop/column4'}>2</Link></li>
                <li><Link className={currentPage?.includes('left') ? 'active' : ''} pathname={'/shop/left-sidebar'}>3</Link></li>
                <li><Link className={currentPage?.includes('right') ? 'active' : ''} pathname={'/shop/right-sidebar'}>4</Link></li>
            </ul>
        </div>
    )
}

export default Pagination;