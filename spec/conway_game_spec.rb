require 'spec_helper'
require 'conway_game'

RSpec.describe ConwayGame do
  context 'empty cells' do
    it 'can initialize' do
      # Feel free to change the input type!
      expect { ConwayGame.step([]) }.to_not raise_error
    end
  end

  context 'square of cells' do
    it 'stays alive' do
      # Feel free to change the input type!
      t0 = [
        [1, 1],
        [1, 1],
      ]
      t1 = ConwayGame.step(t0)

      # somehow test that the square of cells is still alive
      expect(t1).to eq(t0)
    end
  end

  context 'blinker bar' do
    it 'blinks' do
      # Feel free to change the input type!
      t0 = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ]

      t1 = ConwayGame.step(t0)
      # Somehow test that the 3 cells "blinked" to be vertical
      expect(t1).to eq([])

      t2 = ConwayGame.step(t1)
      # Expect the cells "blink back" to the starting positions
      expect(t2).to eq(t0)
    end
  end
end
