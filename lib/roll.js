// dice_sides: number of sides on dice
// num_of_dice: number of dice being rolled
// rolls_count: number of rolls

export function roll(dice_sides, num_of_dice, rolls_count) {
    
    var rolls = [];
    
        // keeps track of the number of rolls
        for(var i = 0; i < rolls_count; i++) {
            var result = 0;

            // keeps track of the number of dice
            for(var j = 0; j < num_of_dice; j++) {
                result = result + one_roll(dice_sides);
            }
            // adds to rolls
            rolls.push(result);
        }
        
        // printing out the resils
        var output = {
            sides: dice_sides,
            dice: num_of_dice,
            rolls: rolls_count,
            results: rolls
        }
        // converts output to string
        return JSON.stringify(output);
    }

function one_roll(dice_sides) {
        return Math.floor(Math.random() * dice_sides) + 1;
}
