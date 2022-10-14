import { Products } from '../../modules/products';
import { ShoppingCart } from '../modules/shopping_cart';


export class get_product {
    get() {
      return new Promise((resolve) => {
        resolve({response: {account: test_product}});
      });
      }
  
  }

export class get_one_product {
    async getProduct() {
      return new Promise((resolve) => {
        resolve(test_product);
      });
    }
  }

 export class get_service_product {
    get() {
      return new Promise((resolve) => {
        resolve([{account: test_product}]);
      });
      }
  
  }

  export class put_service_product {
    put() {
      return new Promise((resolve) => {
        resolve([{'message': 
        'The product was add to the shopping cart.'}]);
      });
      }
  
  }

  export class get_product_in_shopping_cart {
    get() {
      return new Promise((resolve) => {
        resolve(test_phopping_cart);
      });
    }
  }

  export class get_bad_products_in_shopping_cart {
    get() {
      return new Promise((reject) => {
        reject(new Error("You do not have products in the shopping cart"));
      });
      }
  
  }

export const test_phopping_cart: ShoppingCart[] = 
  [{ _id: 1,
    _id_product: 4,
    _id_shopping_cart: 5,
    _name: "Gamer Chair",
    _price: "44.0",
    _quantity: "4"
  }]


export const test_product: Products = 
    { _id: 1,
        _name: 'Gamer Backpack',
        _short_description: 'Show your awesomeness to your friends with this gamer backpack.',
        _long_description: 'These backpacks are inspired on the best Blizzard games such as Diablo, Starcraft, World of Warcraft and Overwatch.',
        _price: "45.00$",
        _dimensions: "y= 21.65'', x = 13.77''",
        _weight: '6.61 lbs',
        _image_one: "../../assets/images/backpack/diablo_backpack.png",
        _image_two: "../../assets/images/backpack/horde_backpack.png",
        _image_three: "../../assets/images/backpack/nerf_this_backpack.png",
        _image_four: "../../assets/images/backpack/zerg_backpack.png",
        };
