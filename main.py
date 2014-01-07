import sys
import time
import pygame
from game import Game
from math import floor

screen = None
game = None
SW, SH = 400, 400
SP = SW // 8
color_white = (255, 255, 255)
color_black = (0, 0, 0)
color_green = (0, 128, 0)

def main():
    # Init
    pygame.init()
    global screen, game
    screen = pygame.display.set_mode((SW, SH))
    screen.fill(color_green)

    game = Game()

    while True:
        update()
        time.sleep(0.01)

def update():
    event()
    draw()

def event():
    ev = pygame.event.get()
    for event in ev:
        if event.type == pygame.MOUSEBUTTONUP:
            pos = pygame.mouse.get_pos()
            x, y = pos[0] // SP, pos[1] // SP
            game.move(x, y)

def draw():
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
    for (x, y) in game.liberties:
        pygame.draw.circle(screen, color_white, (x * SP + SP // 2, y * SP + SP // 2), 4)

    # Update
    pygame.display.update()

if __name__ == "__main__":
    main()
