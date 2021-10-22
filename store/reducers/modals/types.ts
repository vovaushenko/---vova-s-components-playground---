import { ReactNode } from 'react';

export interface IModal {
  id: string;
  content: ReactNode;
}

export interface ModalsState {
  openModals: IModal[];
}

export enum ModalsActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface OpenModalAction {
  type: ModalsActionTypes.OPEN_MODAL;
  payload: IModal;
}

export interface CloseModalAction {
  type: ModalsActionTypes.CLOSE_MODAL;
  payload: string;
}

export type ModalAction = OpenModalAction | CloseModalAction;
