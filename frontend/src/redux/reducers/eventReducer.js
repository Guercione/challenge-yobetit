import Type from "redux/types/eventType";
import moment from "moment";

export const initialState = {
  loading: false,
  eventId: undefined,
  name: undefined,
  lastName: undefined,
  email: undefined,
  eventDate: undefined,
  eventCreatedDate: undefined,
  eventHash: undefined,
};

export const event = (state = initialState, action) => {
  switch (action.type) {
    case Type.EVENT_REQUEST:
      return {
        ...state,
        loading: true,
        eventId: undefined,
        name: undefined,
        lastName: undefined,
        email: undefined,
        eventDate: undefined,
        eventCreatedDate: undefined,
        eventHash: undefined,
      };

    case Type.EVENT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        eventId: action?._id,
        name: action?.name,
        lastName: action?.lastName,
        email: action?.email,
        eventDate:
          action?.eventDate && moment(action?.eventDate).format("MMM Do YYYY"),
        eventCreatedDate:
          action?.createdAt && moment(action?.createdAt).format("MMM Do YYYY"),
        eventHash: action?.eventHash,
      };

    case Type.EVENT_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        eventId: undefined,
        name: undefined,
        lastName: undefined,
        email: undefined,
        eventDate: undefined,
        eventCreatedDate: undefined,
        eventHash: undefined,
      };

    case Type.EVENT_CLEAR_DATA:
      return {
        ...state,
        loading: false,
        eventId: undefined,
        name: undefined,
        lastName: undefined,
        email: undefined,
        eventDate: undefined,
        eventCreatedDate: undefined,
        eventHash: undefined,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default event;
