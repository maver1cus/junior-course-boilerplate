export const ActionType = {
  RESET_FILTER: 'RESET_FILTER',
  CHANGE_MIN_PRICE: 'CHANGE_MIN_PRICE',
  CHANGE_MAX_PRICE: 'CHANGE_MAX_PRICE',
  CHANGE_DISCOUNT: 'CHANGE_DISCOUNT',
  CHANGE_CATEGORY: 'SELECT_CATEGORY'
}
export const resetFilter = () => {
  return {
    type: ActionType.RESET_FILTER
  }
};

export const changeMinPrice = (value) => {
  return {
    type: ActionType.CHANGE_MIN_PRICE,
    payload: value
  }
};

export const changeMaxPrice = (value) => {
  return {
    type: ActionType.CHANGE_MAX_PRICE,
    payload: value
  }
};


export const changeDiscount = (value) => {
  return {
    type: ActionType.CHANGE_DISCOUNT,
    payload: value
  }
};

export const changeCategory = (value) => {
  return {
    type: ActionType.CHANGE_CATEGORY,
    payload: value
  }
};
