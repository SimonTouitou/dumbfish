export interface IPiece {
    Color: PieceColor;
    Points: PiecePoints;
    Move(source: CellLocation, destination: CellLocation): boolean;
}

export interface CellLocation {
    point1: number;
    point2: number;
}


export enum PieceColor {
    White = 1,
    Black = 2,
}

export enum PiecePoints {
    Pawn = 1,
    Knight = 3,
    Bishop = 3.2,
    Rook = 5,
    Queen = 8,
    King = 9999,
}


export enum PieceState {
    In,
    Out
}

export enum GameState {
    PreOpening,
    Opening,
    MiddleGame,
    EndGame,
    GameOver
}

export enum Turn {
    Black,
    White
}

// ** Optional - too advanced to calculate & program alone.
export enum MoveState {
 Blunder,
 Mistake,
 Excellent,
 Good,
 Forced,
 BestMove
}