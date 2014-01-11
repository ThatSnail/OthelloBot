from strategy import Strategy
from game import Game

class LibminStrategy(Strategy):
    def apply(player, state, liberties, mult=1, heuristic=None):
        if heuristic == None:
            heuristic = [(pos, 1) for pos in liberties[:]]
        libs = []
        # TODO Someone make this not inefficient
        for i in range(len(heuristic)):
            pos, heur = heuristic[i]
            x, y = pos
            newstate = Game.simulate_move(x, y, player, state)
            lib = len(Game.liberties(Game.other(player), newstate))
            libs.append((pos, lib))
        minl = min([l for _, l in libs])
        for i in range(len(libs)):
            pos, heur = heuristic[i]
            _, lib = libs[i]
            v = 1 / ((lib - minl) + 1)
            heuristic[i] = (pos, heur * v ** mult)
        return heuristic
