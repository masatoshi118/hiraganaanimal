class HomeController < ApplicationController

  def index
    @animal = Animal.offset( rand(Animal.count) ).first

    @disp_hiragana = Hiragana.view(@animal)

    @sounds = Sound.order("RANDOM()").limit(8)
  end

end