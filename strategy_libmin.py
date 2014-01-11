from strategy import Strategy
from game import Game

class LibminStrategy(Strategy):
    def apply(player, state, liberties, mult=1, heuristic=None):
        if heuristic == None:
            heuristic = [(pos, 1) for pos in liberties[:]]
        for i in range(len(heuristic)):
            pos, heur = heuristic[i]
            x, y = pos
            newstate = Game.simulate_move(x, y, player, state)
            lib = len(Game.liberties(Game.other(player), newstate))
            heuristic[i] = (pos, heur * (1 / lib) ** mult)
        return heuristic
