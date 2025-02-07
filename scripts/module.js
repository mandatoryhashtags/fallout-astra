Hooks.once('init', async function () {
    console.log('Fallout Astra | Initializing module');

    // Register the new Astrogation skill
    CONFIG.FALLOUT.skills['astrogation'] = {
        label: "FALLOUT.SkillAstrogation",
        attribute: "int"  // Based on Intellect
    };
});

Hooks.once('ready', async function () {
    console.log('Your Module | Module is ready');
}); 