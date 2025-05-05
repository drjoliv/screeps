const Roles = {
    Harvester: 'harvester',
    Upgrader: 'upgrader',
    Builder: 'builder'
}

module.exports = {

    Roles,

    /** @param {string} Creep **/
    create: function (type) {
        const memory = {
            memory: {
                role: type
            }
        };

        Game.spawns['Main'].spawnCreep([WORK, CARRY, MOVE], Game.time, memory);
    },

    run: function () {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == Roles.Harvester);

        if (harvesters.length < 2)
            this.create(Roles.Harvester);

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == Roles.Builder);

        if (builders.length < 1)
            this.create(Roles.Harvester);
    }
};