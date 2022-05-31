   
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDER_REQUEST,
    MY_ORDER_SUCCESS,
    MY_ORDER_FAIL,
    ADMIN_ORDERS_REQUEST,
    ADMIN_ORDERS_SUCCESS,
    ADMIN_ORDERS_FAIL,
    SELLER_ORDERS_REQUEST,
    SELLER_ORDERS_SUCCESS,
    SELLER_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_RESET,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/orderConstants";
  
  export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_ORDER_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        };
  
      case CREATE_ORDER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  //
  export const myOrdersReducer = (state = { orders:[] }, action) => {
    switch (action.type) {
      case MY_ORDER_REQUEST:
        return {
          loading: true,
        };
  
      case MY_ORDER_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        };
  
      case MY_ORDER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const allOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case ADMIN_ORDERS_REQUEST:
        case SELLER_ORDERS_REQUEST:
        return {
          loading: true,
        };
  
      case ADMIN_ORDERS_SUCCESS:
        case SELLER_ORDERS_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        };
  
      case ADMIN_ORDERS_FAIL:
        case SELLER_ORDERS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  // Update and Delete Orders
  export const orderReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_ORDER_REQUEST:
      case DELETE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case UPDATE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
  
      case DELETE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_ORDER_FAIL:
      case DELETE_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case UPDATE_ORDER_RESET:
        return {
          ...state,
          isUpdated: false,
        };
  
      case DELETE_ORDER_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  

  export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
      case ORDER_DETAILS_REQUEST:
        return {
          loading: true,
        };
  
      case ORDER_DETAILS_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        };
  
      case ORDER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };