import ProductInitialState from './ProductInitialState';
import {
	CATEGORYPRODUCT,
	FEATUREDPRODUCT,
	LISTPRODUCT,
	VIEWPRODUCT,
	CARTPRODUCT,
	ORDERPRODUCT,
} from './ProductType';

const ProductReducer = (state = ProductInitialState, action) => {
	switch (action.type) {
		case CATEGORYPRODUCT:
			const { payload: categories } = action;

			return {
				...state,
				categories,
				categoryLoading: action.loading,
			};

		case FEATUREDPRODUCT:
			const { payload: featured } = action;

			return {
				...state,
				featured,
				featuredLoading: action.loading,
			};

		case LISTPRODUCT:
			const { payload: list } = action;

			return {
				...state,
				list,
				listLoading: action.loading,
			};

		case VIEWPRODUCT:
			const { payload: view } = action;

			return {
				...state,
				view,
				viewLoading: action.loading,
			};

		case CARTPRODUCT:
			const { payload: cart } = action;

			return {
				...state,
				cart,
			};

		case ORDERPRODUCT:
			const { payload: orders } = action;

			return {
				...state,
				orders,
				orderLoading: action.loading,
			};
		default:
			return state;
	}
};

export default ProductReducer;
