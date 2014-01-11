import sys
from game import Game, InvalidMoveException
from math import floor
from human_player import HumanPlayer
from computer_player import ComputerPlayer

USING_PYGAME = False
STATMODE = False
STATMODE_BOT1 = None
STATMODE_BOT2 = None
STATMODE_ROUNDS = 0
results = {
    Game.BLACK: 0,
    Game.WHITE: 0,
    Game.DRAW: 0
}

main_widget = None

screen = None
game = None
players = None
SW, SH = 400, 400
SP = SW // 8
color_white = (255, 255, 255)
color_black = (0, 0, 0)
color_green = (0, 128, 0)

def main():
    # Init
    if USING_PYGAME and not STATMODE:
        from time import sleep
        import pygame
        pygame.init()
        global screen
        screen = pygame.display.set_mode((SW, SH))
        screen.fill(color_green)

    global game, players
    game = Game()
    players = []
    #players.append(HumanPlayer(game, Game.BLACK))
    players.append(ComputerPlayer(game, Game.BLACK))
    players.append(ComputerPlayer(game, Game.WHITE))

    if USING_PYGAME or STATMODE:
        while True:
            update()
            delay(0.01)
    else:
        update()

def update():
    event()
    if game.is_running:
        # Tell bots to do stuff
        for player in players:
            if game.current_player == player.player:
                if len(Game.liberties(player.player, game.state)) == 0:
                    game.pass_move()
                else:
                    player.make_move()
                draw()
                check_win()
                break
    draw()

def delay(s):
    if STATMODE:
        return # NO TIME FOR SLEEP IN STATMODE
    if USING_PYGAME:
        from time import sleep
        sleep(s)
    else:
        from pyjamas.Timer import Timer
        timer = Timer(notify=update)
        timer.schedule(s * 1000)

def event():
    if USING_PYGAME and not STATMODE:
        import pygame
        # Make player move
        ev = pygame.event.get()
        for event in ev:
            if event.type == pygame.MOUSEBUTTONUP:
                pos = pygame.mouse.get_pos()
                handle_click(pos[0], pos[1])

def handle_click(x, y):
    x, y = x // SP, y // SP
    for player in players:
        if game.current_player == player.player:
            try:
                player.make_move(x, y)
                draw()
                check_win()
                delay(0.5)
            except InvalidMoveException:
                return
            break

def check_win():
    if not game.is_running:
        results[game.result] += 1
        if sum(results.values()) >= STATMODE_ROUNDS:
            print("BLACK: {0}\nWHITE: {1}\nDRAW: {2}".format(results[Game.BLACK], results[Game.WHITE], results[Game.DRAW]))
            sys.exit()
        game.restart()

def draw():
    if STATMODE:
        return # ART IS FOR SILLY HUMANITIES MAJORS, NOT STATMODE!
    if USING_PYGAME:
        import pygame
        global screen

        # Draw screen
        screen.fill(color_green)
        for x in range(0, SW, floor(SW / 8)):
            pygame.draw.line(screen, color_black, (x, 0), (x, SH))
        for y in range(0, SH, floor(SH / 8)):
            pygame.draw.line(screen, color_black, (0, y), (SW, y))

        # Draw pieces
        for (x, y) in [(x, y) for x in range(8) for y in range(8)]:
            {
                Game.NONE: lambda: None,
                Game.BLACK: lambda: pygame.draw.circle(screen, color_black, (x * SP + SP // 2, y * SP + SP // 2), SP // 2),
                Game.WHITE: lambda: pygame.draw.circle(screen, color_white, (x * SP + SP // 2, y * SP + SP // 2), SP // 2)
            }[game.state[x][y]]()
    
        # Draw liberties
        for (x, y) in Game.liberties(game.current_player, game.state):
            pygame.draw.circle(screen, color_white, (x * SP + SP // 2, y * SP + SP // 2), 4)

        # Update
        pygame.display.update()
    else:
        main_widget.draw(game)

if __name__ == "__main__":
    # Check if run manually
    if 'pygame' in sys.argv[1:]:
        USING_PYGAME = True
    if 'statmode' in sys.argv[1:]:
        STATMODE = True
        import getopt
        optlist, args = getopt.getopt(sys.argv[1:], 'n:')
        for o, a in optlist:
            if o == "-n":
                STATMODE_ROUNDS = int(a)

    if not USING_PYGAME and not STATMODE:
        import pyjd
        from main_widget import MainWidget
        from pyjamas.ui.FocusPanel import FocusPanel
        from pyjamas.ui.RootPanel import RootPanel
        pyjd.setup("output/main.html")
        main_widget = MainWidget(SW, SH)
        panel = FocusPanel(Widget=main_widget.context)
        panel.addMouseListener(main_widget.context)
        setattr(main_widget.context, "onMouseUp", lambda sender, x, y: handle_click(x, y))
        RootPanel().add(panel)
        RootPanel().add(main_widget)
        pyjd.run()
    main()
