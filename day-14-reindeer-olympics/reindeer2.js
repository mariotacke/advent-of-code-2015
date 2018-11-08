class Reindeer {
  constructor (name, speed, endurance, cooldown) {
    this._name = name;
    this._speed = speed;
    this._endurance = endurance;
    this._cooldown = cooldown;

    this._enduranceRemaining = endurance;
    this._cooldownRemaining = 0;

    this._points = 0;
    this._distance = 0;
  }

  tick () {
    if (this._enduranceRemaining > 0) {
      this._distance += this._speed;
      this._enduranceRemaining--;

      if (this._enduranceRemaining === 0) {
        this._cooldownRemaining = this._cooldown;
      }
    } else if (this._cooldownRemaining > 0) {
      this._cooldownRemaining--;

      if (this._cooldownRemaining === 0) {
        this._enduranceRemaining = this._endurance;
      }
    }
  }

  addPoint () {
    this._points++;
  }

  get points () {
    return this._points;
  }

  get distance () {
    return this._distance;
  }
}

const race = (input, duration) => {
  const reindeers = input
    .split('\n')
    .map((x) => {
      const stats = x.match(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);

      return new Reindeer(
        stats[1],
        parseInt(stats[2]),
        parseInt(stats[3]),
        parseInt(stats[4])
      );
    });

  for (let i = 1; i <= duration; i++) {
    reindeers.forEach((reindeer) => reindeer.tick());

    const maxDistance = Math.max(...reindeers.map((reindeer) => reindeer.distance));

    reindeers
      .filter((reindeer) => reindeer.distance === maxDistance)
      .forEach((reindeer) => reindeer.addPoint());
  }

  return Math.max(...reindeers.map((reindeer) => reindeer.points));
};

module.exports = race;
