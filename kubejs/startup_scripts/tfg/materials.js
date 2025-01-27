const registerTFGMaterials = (event) =>
{
    event.create('hardwood')
        .dust()
        .flags(GTMaterialFlags.FLAMMABLE)
        .iconSet(GTMaterialIconSet.FINE)
        .color('0x7a5225')
        .secondaryColor('0x7a5225')

    event.create('thermochemically_treated_hardwood')
        .dust()
        .flags(GTMaterialFlags.FLAMMABLE)
        .iconSet(GTMaterialIconSet.FINE)
        .color('0x52482c')
        .secondaryColor('0x52482c')

    event.create('woods_metal')
        .ingot()
        .liquid(343)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .color('0xc9e93')
        .secondaryColor('0x789491')
        .components('15x bismuth', '8x lead', '4x tin', '3x cadmium')
}