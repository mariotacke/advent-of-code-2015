const race = (input, duration) => {
  const reindeers = input
    .split('\n')
    .map((x) => {
      const stats = x.match(/(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);

      return {
        name: stats[1],
        speed: parseInt(stats[2]),
        endurance: parseInt(stats[3]),
        cooldown: parseInt(stats[4]),
      };
    })
    .map((reindeer) => {
      const { speed, endurance, cooldown } = reindeer;

      var intervals = Math.floor(duration / (endurance + cooldown));
      var remainder = Math.min(endurance, duration % (endurance + cooldown));

      return (intervals * endurance + remainder) * speed;
    });

  return Math.max(...reindeers);
};

module.exports = race;
