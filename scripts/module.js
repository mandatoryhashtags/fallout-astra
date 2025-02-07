Hooks.once('init', async function () {
    console.log('Fallout Astra | Initializing module');
});

// Use 'setup' hook instead of 'init' for system modifications
Hooks.once('setup', async function () {
    if (!CONFIG.FALLOUT) {
        console.error('Fallout Astra | Fallout system not found');
        return;
    }

    // Register the new Astrogation skill
    const astrogationSkill = {
        label: "FALLOUT.SkillAstrogation",
        attribute: "int",
        defaultValue: 2,
        group: "advanced"  // This makes it an advanced skill
    };

    // Add to both CONFIG and the system's skill definitions
    if (CONFIG.FALLOUT.skills) {
        CONFIG.FALLOUT.skills['astrogation'] = astrogationSkill;
        game.fallout.config.skills['astrogation'] = astrogationSkill;
        console.log('Fallout Astra | Added Astrogation skill');
    }
});

Hooks.once('ready', async function () {
    console.log('Fallout Astra | Module is ready');
}); 