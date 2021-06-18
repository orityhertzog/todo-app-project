import {Guid} from "guid-typescript";

export interface TodoList{
    id : Guid;
    caption :string;
    description :string;
    iconName :string;
    color :string;
}