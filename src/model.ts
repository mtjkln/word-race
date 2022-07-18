export interface PropKeyBoards {
  str: string;
}
export interface PropStack {
  stack: string[];
}

export interface InitialState {
  pressedKey: string;
  word: string;
  stack: string[];
  points: number;
  multiplier: number;
  gameOn: Boolean;
  level: number;
  name: string;
}

export interface PropsHome {
  stack: string[];
  s: string;
}
