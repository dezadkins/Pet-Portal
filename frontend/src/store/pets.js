import { fetch } from "./csrf.js";

//keys
const ADD_PET = "pet/ADD_PET";

//action to set  ADD PET

const addNewPet = (pet) => ({
  type: ADD_PET,
  payload: pet,
});

export const addPet = ({
  userId,
  name,
  species,
  birthDate,
  photoURL,
}) => async (dispatch) => {
  const res = await fetch("/api/pets/");
};
