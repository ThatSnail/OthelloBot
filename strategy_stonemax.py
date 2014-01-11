from strategy import Strategy
from game import Game

class StonemaxStrategy(Strategy):
    def apply(player, state, liberties, mult=1, heuristic=None):
        if heuristic == None:
            heuristic = [(pos, 1) for pos in liberties[:]]
        for i in range(len(heuristic)):
            pos, heur = heuristic[i]
            x, y = pos
            newstate = Game.simulate_move(x, y, player, state)
            stones, opponent_stones = len(Game.stones(player, newstate)), len(Game.stones(Game.other(player), newstate))
            v = stones / (stones + opponent_stones)
            heuristic[i] = (pos, heur * v ** mult)
        return heuristic
