export const useCurrentProduduct = () => {

    const product = useState('currentProduct', () => {
        const route = useRoute()
        return route.params.slug
    })

    function backTo(path) {
        history.pushState({}, '', path)
        product.value = null
    }

    function setProduct(slug) {
        history.pushState({}, '', '/products/' + slug)
        product.value = slug
    }

    return {product, backTo, setProduct}

}