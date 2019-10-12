// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
	constructor(attributes) {
		(this.len = attributes.len),
		(this.width = attributes.width),
		(this.height = attributes.height);
	}
	volume(len, width, height) {
		return len * width * height;
	}

	surfaceArea(len, width, height) {
		return 2 * (len * width + len * height + width * height);
	}
}

const cuboid = new CuboidMaker({
	len: 4,
	width: 5,
	height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(cuboid.len, cuboid.width, cuboid.height)); // 100
console.log(cuboid.surfaceArea(cuboid.len, cuboid.height, cuboid.width)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
