import { typeCart } from "../types/typeCart";
import { typeProduct } from "../types/typeProduct"

export const GetCart = (): typeCart[] | [] => {
    const items: any = localStorage.getItem('cartItems');
    if (items && items.length > 0) {
        return JSON.parse(items);
    } else {
        localStorage.setItem("cartItems", JSON.stringify([]));
    }
    return [];
}

export const SetCart = (product: typeProduct, amount?: number) => {

    if (product.id && Number(product.id) > 0) {
        if (amount == 0) DeleteCart(product.id);
        else {
            const items: typeCart[] = GetCart();
            let isItem: boolean = false;

            const newItems = items.map((i: typeCart) =>
                (i.id == product.id) ? (
                    i.amount = amount ? amount : (i.amount || 0) < 9 ? ((i.amount || 0) + 1) : 9,
                    isItem = true,
                    i
                ) : i);
            if (!isItem) newItems.push({ id: product.id, amount: 1 } as typeCart);

            localStorage.setItem('cartItems', JSON.stringify(newItems));
        }
    }

}

export const DeleteCart = (id: number) => {
    if (id && id > 0) {
        const items: typeCart[] = GetCart();

        if (items && items.length > 0) {
            const newItems = items.filter(i => i.id != id);
            localStorage.setItem('cartItems', JSON.stringify(newItems));
        }
    }
}