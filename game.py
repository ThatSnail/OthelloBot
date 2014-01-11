class Game(object):

    # State
    NONE, BLACK, WHITE, DRAW = range(4)

    def __init__(self, state=None):
        if state == None:
            self.state = [[Game.NONE for x in range(8)] for y in range(8)]
            self.state[3][3] = Game.BLACK
            self.state[4][4] = Game.BLACK
            self.state[3][4] = Game.WHITE
            self.state[4][3] = Game.WHITE
            self.current_player = Game.BLACK
            self.result = Game.NONE
        else:
            self.state = state

    def is_tile(x, y):
        return (0 <= x and x < 8 and 0 <= y and y < 8)

    def other(player):
        if player == Game.BLACK:
            return Game.WHITE
        elif player == Game.WHITE:
            return Game.BLACK
        else:
            raise Exception("Invalid other call: {0}".format(player))

    def simulate_move(x, y, player, state):
        cpstate = [row[:] for row in state]
        if cpstate[x][y] == Game.NONE:
            flipped_stone = False
            for d in [(x, y) for x in range(-1, 2) for y in range(-1, 2)]:
                if d == (0, 0):
                    continue
                nx, ny = x, y
                flip = []
                while True:
                    nx += d[0]
                    ny += d[1]
                    if not Game.is_tile(nx, ny) or cpstate[nx][ny] == Game.NONE:
                        break
                    elif cpstate[nx][ny] == Game.other(player): # Other player's tile
                        flip.append((nx, ny))
                    elif cpstate[nx][ny] == player: # Your tile
                        for (fx, fy) in flip:
                            cpstate[fx][fy] = player
                            flipped_stone = True
                        break
            if flipped_stone:
                #self.current_player = Game.other(self.current_player)
                cpstate[x][y] = player
                return cpstate
            else:
                raise InvalidMoveException("Invalid move: ({0}, {1}) doesn't flip any stones".format(x, y))
        else:
            raise InvalidMoveException("Invalid move: ({0}, {1}) already occupied".format(x, y))

    def pass_move(self):
        self.current_player = Game.other(self.current_player)

    def move(self, x, y):
        try:
            self.state = Game.simulate_move(x, y, self.current_player, self.state)
        except InvalidMoveException as e:
            raise e
        self.current_player = Game.other(self.current_player)

        # Check if game is over
        if Game.liberties(Game.BLACK, self.state) == 0 and Game.liberties(Game.WHITE, self.state) == 0:
            black, white = self.stones(Game.BLACK), self.stones(Game.WHITE)
            if black > white:
                self.result = Game.BLACK
            elif white > black:
                self.result = Game.WHITE
            else:
                self.result = Game.DRAW

    def is_valid_move(x, y, player, state):
        # Simulate move
        try:
            Game.simulate_move(x, y, player, state)
        except InvalidMoveException:
            return False
        else:
            return True

    def liberties(player, state):
        liberties = []
        for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
            if Game.is_valid_move(x, y, player, state):
                liberties.append((x, y))
        return liberties

    def stones(self, player, state=None):
        if state == None:
            state = self.state
        stones = 0
        for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
            if state[x][y] == player:
                stones += 1
        return stones

    @property
    def is_running(self):
        return self.result == Game.NONE

class InvalidMoveException(Exception):
    pass
