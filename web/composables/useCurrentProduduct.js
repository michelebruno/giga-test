export const useCurrentProduduct = () => {
    const route = useRoute()

    const product = useState('currentProduct', () => {
        return route.params.slug
    })

    const isArchiveOnSSR = /^\/archive/gi.test(route.path)

    function backTo(path) {
        history.pushState({}, '', path)
        product.value = null
    }

    function setProduct(slug) {
        history.pushState({}, '', '/products/' + slug)
        product.value = slug
    }

    return {product, backTo, setProduct,isArchiveOnSSR}

}