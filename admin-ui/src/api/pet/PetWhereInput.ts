import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PetWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
