class HomeController < ApplicationController

  def index
    @animal = Animal.offset( rand(Animal.count) ).first

    @disp_hiragana = Hiragana.view(@animal)
  end

end