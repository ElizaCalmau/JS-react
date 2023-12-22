export const PRODUCTS_LOADING = 'PRODUCTS_LOADING'
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS'
export const PRODUCTS_FAIL = 'PRODUCTS_FAIL'

export const productLoading = () => {
    return {
        type: PRODUCTS_LOADING,

    }
}

export const productSuccess = (products) => {
    return {
        type: PRODUCTS_SUCCESS,
        payload: products
    }
}

export const productFail = (error) => {
    return {
        type: PRODUCTS_FAIL,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(productLoading())
        fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then((data)=>{
            dispatch(productSuccess(data.products))
        })
        .catch((error) => {
            dispatch(productFail(error))
        })
    }
}