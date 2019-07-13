export default function({store, redirect}){
    // let cart = store.getters['cart/countCart'];

    if( store.getters['cart/countCart'] == 0){
        redirect('/cart')
    }
}