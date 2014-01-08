from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.Composite import Composite
from pyjamas.Canvas.GWTCanvas import GWTCanvas
from game import Game

class Widget(Composite):
    def __init__(self, SW, SH):
        self.canvas = Canvas(SW, SH)

    def draw(self, game):
        self.canvas.draw(game)

class Canvas(HorizontalPanel):
    def __init__(self, SW, SH):
        HorizontalPanel.__init__(self)
        self.SW = SW
        self.SH = SH
        self.context = GWTCanvas(SW, SH, SW, SH)
        self.context.addStyleName("gwt-canvas")
        self.add(self.context)

    def draw(self, game):
        self.context.fillStyle = "#00AA00"
        self.context.fillRect(0, 0, SW, SH)
