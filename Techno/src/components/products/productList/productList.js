import { useEffect, useState } from "react";
import ProductItem from "../productItem/productItem";
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from "../../../store/actions/ProductActions";
import LoadingBox from "../../LoadingBox";
import MessageBox from "../../MessageBox";
import data from "../../../data";


export default function ProductList() {

    const category = data.category;

    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList)

    console.log(productList.products);

    useEffect(() => {
        dispatch(listProducts({}));
    }, [dispatch]);


    let padgeNumpers = [];
    let pageSize = 9;
    const [currentPage, setCurrentPage] = useState(0);

    const calculateNumberOfPages = (leng) => {
        padgeNumpers = []
        for (let index = 0; index < leng / 9; index++) {
            padgeNumpers.push(index + 1)

        }
    }

    const getSliceArrayOfProduct = () => {
        calculateNumberOfPages(productList.products?.length)
        const start = pageSize * currentPage;
        const list = productList.products?.slice?.(start, start + pageSize);
        return list
    }
    console.log(getSliceArrayOfProduct());

    return (
        <>
            <hr />

            <div className="container pt-5 pb-5">
                <div className="row">

                    <div className="col-md-3 pt-1">
                        <div className="pb-4">
                            <input type="search" className="se p-3" placeholder="search product" />
                            <i className="gh fas fa-search top-righ text-muted"></i>
                        </div>
                        <hr />
                        <div className="pt-3 pb-3">
                            <h6 className="pb-3">Product categories</h6>
                            {
                                category.map((cat, index) => {
                                    return (
                                        <h6><a href key={index}>{cat.name}</a></h6>
                                    )
                                })
                            }


                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-12 col-lg-5 pb-5">
                                    <select className="form-control" name="" id="">

                                        <option value="1">Featured</option>
                                        <option value="2" >Price low to high</option>
                                        <option value="3">Price high to low</option>
                                        <option value="4">Name</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {productList.loading ? (<LoadingBox />)
                                    : productList.error ? (<MessageBox variant="danger">{productList.error}</MessageBox>)
                                        : (
                                            getSliceArrayOfProduct()?.map((product, index) => {
                                                console.log(product);
                                                return (
                                                    <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product} />
                                                )
                                            })
                                        )}


                            </div>

                            <div className="row">
                                <ul class="pagination justify-content-end mb-0 pt-5">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" tabindex="-1">
                                            <i class="fas fa-angle-left"></i>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    {padgeNumpers.map((padgeNumper, index) => {
                                        return (
                                            <li key={index} className={index === currentPage ? 'page-item active' : 'page-item'} onClick={() => { setCurrentPage(index) }}>
                                                <a className="page-link" >{padgeNumper}</a>
                                            </li>
                                        )
                                    })}

                                    <li class="page-item">
                                        <a class="page-link" href="#">
                                            <i class="fas fa-angle-right"></i>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </>
    )
}

