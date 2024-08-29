import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const cliche_expressions = [
    ["Back in", "my day..."],
    ["They don't make", "'em like they used to."],
    ["A penny saved", "is a penny earned."],
    ["If it ain't broke,", "don't fix it."],
    ["Slow and steady", "wins the race."],
    ["You can't teach", "an old dog new tricks."],
    ["The early bird", "catches the worm."],
    ["Waste not,", "want not."],
    ["You kids don't", "know how good you have it."],
    ["When I was", "your age..."],
    ["Money doesn't", "grow on trees."],
    ["I'm not as", "young as I used to be."],
    ["It builds", "character."],
    ["In my day,", "we walked uphill both ways in the snow."],
    ["They sure don't", "make 'em like that anymore."],
    ["You know,", "back in the good old days..."],
    ["I've seen", "it all."],
    ["Time flies", "when you're having fun."],
    ["They don't write", "'em like that anymore."],
    ["You can't judge", "a book by its cover."],
    ["Age is just", "a number."],
    ["You're never too", "old to learn."],
    ["That's the way", "the cookie crumbles."],
    ["Well,", "it could be worse."],
    ["You're only as", "old as you feel."],
    ["Don't count", "your chickens before they hatch."],
    ["The proof is", "in the pudding."],
    ["There's no such thing", "as a free lunch."],
    ["A bird in the hand", "is worth two in the bush."],
    ["Better safe", "than sorry."],
    ["What goes around", "comes around."],
    ["You can't have", "your cake and eat it too."],
    ["An apple a day", "keeps the doctor away."],
    ["Don't put", "all your eggs in one basket."],
    ["A stitch in time", "saves nine."],
    ["Two wrongs", "don't make a right."],
    ["A watched pot", "never boils."],
    ["The grass is", "always greener on the other side."],
    ["Patience is", "a virtue."],
    ["You can't squeeze", "blood from a turnip."],
    ["A rolling stone", "gathers no moss."],
    ["Every cloud", "has a silver lining."],
    ["Beggars can't", "be choosers."],
    ["When it rains,", "it pours."],
    ["You can't have", "it both ways."],
    ["You can't make", "a silk purse out of a sow's ear."],
    ["If wishes were horses,", "beggars would ride."],
    ["There's no use", "crying over spilled milk."],
    ["You made your bed,", "now lie in it."],
    ["A fool and his money", "are soon parted."],
    ["Actions speak", "louder than words."],
    ["All that glitters", "is not gold."],
    ["Too many cooks", "spoil the broth."],
    ["Absence makes", "the heart grow fonder."],
    ["Don't bite off", "more than you can chew."],
    ["You win some,", "you lose some."],
    ["Take it", "with a grain of salt."],
    ["The apple doesn't", "fall far from the tree."],
    ["A leopard can't", "change its spots."],
    ["Variety is", "the spice of life."]
];

const Index = () => {
  const [remixedExpression, setRemixedExpression] = useState('');

  const generateRemixedExpression = () => {
    const randomIndex1 = Math.floor(Math.random() * cliche_expressions.length);
    let randomIndex2 = Math.floor(Math.random() * cliche_expressions.length);
    
    // Ensure we don't pick the same expression twice
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * cliche_expressions.length);
    }

    const firstPart = cliche_expressions[randomIndex1][0];
    const secondPart = cliche_expressions[randomIndex2][1];

    setRemixedExpression(`${firstPart} ${secondPart}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Cliche Expression Remix Tool</h1>
        <p className="text-xl text-gray-600 mb-8">Generate a new expression by combining two classic cliches!</p>
        <Button 
          onClick={generateRemixedExpression}
          className="mb-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Generate Remixed Expression
        </Button>
        {remixedExpression && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Your Remixed Expression:</h2>
            <p className="text-xl text-gray-800 italic">"{remixedExpression}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
