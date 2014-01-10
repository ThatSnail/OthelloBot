from strategy import Strategy

class LibminStrategy(Strategy):
    def apply(player, state, liberties, mult=1, heuristic=None):
        if heuristic == None:
            heuristic = [(pos, 1) for pos in liberties[:]]
        for i in range(len(heuristic)):
            pos, heur = heuristic[i]
            
            v = random()
            heuristic[i] = (pos, heur * v ** mult)
        return heuristic
