module.exports = {

    Roles: {
        Harvester : 'harvester',
        Upgrader : 'upgrader',
        Builder : 'builder'
    },

    /** @param {string} Creep **/
    create: function(type) {
        const memory = {
            memory: {
                role: type
            }
        };

        Game.spawns['Main'].spawnCreep([WORK, CARRY, MOVE], Game.time, memory);
	}
};