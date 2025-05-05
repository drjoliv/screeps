const Roles = {
    Harvester: 'harvester',
    Upgrader: 'upgrader',
    Builder: 'builder',
    Repair: 'repair',
    Guard: 'guard',
    Attacker: 'attacker',
    Claimer: 'claimer',
    Pioneer: 'pioneer',
    Transport: 'transport',
    Miner: 'miner',
};

const Skills = {
    Work: 'work',
    Move: 'move',
    Carry: 'carry',
    Attack: 'attack',
    RangedAttack: 'ranged_attack',
    Heal: 'heal',
    Claim: 'claim',
    Tough: 'tough',
};

const Loads = {
    [Roles.Harvester]: [Skills.Work, Skills.Carry, Skills.Move],
    [Roles.Upgrader]: [Skills.Work, Skills.Carry, Skills.Move],
    [Roles.Builder]: [Skills.Work, Skills.Carry, Skills.Move]
}

module.exports = {

    Roles,

    Skills,

    Loads,

    /** @param {string} Creep **/
    create: function (type) {
        const memory = {
            memory: {
                role: type
            }
        };

        Game.spawns['Main'].spawnCreep(this.Loads[type], Game.time, memory);
    },

    run: function () {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == Roles.Harvester);

        if (harvesters.length < 5)
            this.create(Roles.Harvester);

        var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == Roles.Upgrader);

        if (upgrader.length < 2)
            this.create(Roles.Upgrader);

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == Roles.Builder);

        if (builders.length < 5)
            this.create(Roles.Builder);
    }
};