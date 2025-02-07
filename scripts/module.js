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
    if (CONFIG.FALLOUT.skills) {
        CONFIG.FALLOUT.skills['astrogation'] = {
            label: "FALLOUT.SkillAstrogation",
            attribute: "int"  // Based on Intellect
        };
        console.log('Fallout Astra | Added Astrogation skill');
    }
});

Hooks.once('ready', async function () {
    console.log('Fallout Astra | Module is ready');
}); 