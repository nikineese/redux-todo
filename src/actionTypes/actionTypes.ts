export type TActionModel = {
    type: EActionTypes
    payload?: any
    error?: any
}
export enum EActionTypes {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
}