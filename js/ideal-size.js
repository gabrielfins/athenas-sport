const sizes = [[50, 49, 72, 20],
               [53, 52, 72, 22],
               [55, 53, 73, 23],
               [60, 57, 77, 24]];

const measures = [51, 51, 73, 22];

let total = [];
let mostAppearences = [0, 0, 0, 0];

for (let i = 0; i < measures.length; i++) {
    for (let j = 0; j < sizes.length; j++) {
        if (measures[i] >= sizes[j][i] - 2 && measures[j] <= sizes[j][i] + 2) {
            console.log(j, sizes[j][i]);
            total.push(j);
        }
    }
}

total.forEach(value => {
    switch (value) {
        case 0:
            mostAppearences[0] += 1;
            break;
        case 1:
            mostAppearences[1] += 1;
            break;
        case 2:
            mostAppearences[2] += 1;
            break;
        case 3:
            mostAppearences[3] += 1;
            break;
    }
});

console.log(total, mostAppearences);
