// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps
// at a time. Implement a method to count how many possible ways the child can run up the stairs

const countChildSteps = (stairs: number): number => {
    if (stairs < 0){
	return 0;
    } else if (stairs === 0){
	return 1;
    }

    return countChildSteps(stairs-1) + countChildSteps(stairs-2) + countChildSteps(stairs-3);
};

const stairs = 3;
console.log(`Calculaitng with ${stairs}`);
console.log(countChildSteps(stairs));
