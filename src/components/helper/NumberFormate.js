
import numeral from 'numeral';
export function NumberFormate(price) {
    

    var formattedPrice = numeral(price).format('0,0');
    return formattedPrice;
}