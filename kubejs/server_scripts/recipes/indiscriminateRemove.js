// Items in toRemove are not craftable in any way.

ServerEvents.recipes((event) => {
    const toRemove = [
        "eidolon:pewter_blend",
        // "rusticated:fertile_soil",
        "farmersdelight:cooking_pot",
        "irons_spellbooks:inscription_table",
        "irons_spellbooks:scroll_forge",
        "irons_spellbooks:magic_cloth",
        "railcraft:brass_ingot",
        "irons_spellbooks:diamond_spell_book",
        "botania:apothecary_default",
        "aquamirae:terrible_sword",
        "forbidden_arcanus:spectral_eye_amulet",
        "forbidden_arcanus:eternal_stella",
        "forbidden_arcanus:tyr_helmet",
        "forbidden_arcanus:tyr_chestplate",
        "forbidden_arcanus:tyr_leggings",
        "forbidden_arcanus:tyr_boots",
        "naturesaura:wood_stand",
        "ars_nouveau:ring_of_lesser_discount",
        "ars_nouveau:ritual_flight",
        // "ars_nouveau:magebloom_fiber",
        "bloodmagic:soulforge",
        "bloodmagic:altar",
        "ars_nouveau:ritual_flight",
        "cataclysm:bulwark_of_the_flame",
        "modularrouters:blank_module",
        "mekanism:basic_universal_cable",
        "mekanism:basic_mechanical_pipe",
        "mekanism:basic_pressurized_tube",
        "mekanism:basic_logisitical_trasporter",
        "quarryplus:workbenchplus",
        "integrateddynamics:mechanical_squeezer",
        "integrateddynamics:mechanical_drying_basin",
        "mekanism:logistical_sorter",
        "create:millstone",
        "create:deployer",
        "create:depot",
        "create:andesite_alloy",
        "darkutils:charm_portal",
        "darkutils:blank_plate",
        "iceandfire:dragon_flute",
        "iceandfire:tide_trident",
        "iceandfire:ghost_ingot",
        "iceandfire:dragon_horn",
        "industrialforegoing:machine_frame_pity",
        "integrateddynamics:drying_basin",
        "mekanism:metallurgic_infuser",
        "mekanism:energy_tablet",
        "botania:apothecary_default",
        "botania:mana_ring",
        "naturesaura:ancient_sapling",
        "reliquary:fertile_lily_pad",
        "integrateddynamics:menril_sapling",
        "paraglider:paraglider",
        "sophisticatedbackpacks:upgrade_base",
        "sophisticatedbackpacks:battery_upgrade",
        "sophisticatedbackpacks:pump_upgrade",
        "sophisticatedbackpacks:xp_pump_upgrade",
        "sophisticatedbackpacks:filter_upgrade",
        "sophisticatedbackpacks:pickup_upgrade",
        "storagenetwork:inventory_remote",
        "storagenetwork:crafting_remote",
        "storagenetwork:inventory",
        "sophisticatedbackpacks:inception_upgrade",
        "storagenetwork:master",
        "thermal:xp_crystal",
        "undergarden:catalyst",
        "enigmaticlegacy:heaven_scroll",
        "enigmaticlegacy:monster_charm",
        "enigmaticlegacy:ender_rod",
        "enigmaticlegacy:super_magnet_ring",
        "enigmaticlegacy:magnet_ring",
        "enigmaticlegacy:cursed_stone",
        "enigmaticlegacy:infinimeal",
        "enigmaticlegacy:astral_dust",
        "enigmaticlegacy:mining_charm",
        "enigmaticlegacy:mega_sponge",
        "enigmaticlegacy:recall_potion",
        "cataclysm:abyssal_sacrifice",
        "railcraft:steel_ingot",
        "ars_nouveau:enchanters_sword",
        "ars_nouevau:spell_bow",
        "ars_nouveau:enchanters_shield",
        "shieldexp:griefer_shield",
        "torchmaster:megatorch",
        "torchmaster:dreadlamp",
        "mekanismtools:wood_paxel",
        "mekanismtools:stone_paxel",
        "mekanismtools:iron_paxel",
        "mekanismtools:diamond_paxel",
        "mekanismtools:gold_paxel",
        "mekanismtools:netherite_paxel",
        "mekanismtools:bronze_paxel",
        "mekanismtools:lapis_lazuli_paxel",
        "mekanismtools:osmium_paxel",
        "mekanismtools:refined_glowstone_paxel",
        "mekanismtools:refined_obsidian_paxel",
        "mekanismtools:steel_paxel",
        "prettypipes:pipe",
        "mekanism:osmium_ingot",
        "sophisticatedstorage:upgrade_base",
        "sophisticatedstorage:xp_pump_upgrade",
        "sophisticatedstorage:battery_upgrade",
        "sophisticatedstorage:pump_upgrade",
        "sophisticatedstorage:pickup_upgrade",
        "sophisticatedbackpacks:filter_upgrade",
        "sophisticatedstorage:storage_tool",
        "sophisticatedstorage:filter_upgrade",
        "relics:researching_table",
        "buildersaddition:iron_rod",
        "#valhelsia_furniture:chairs",
        "spartanweaponry:handle",
        "spartanweaponry:pole",
        "eidolon:candle",
        "eidolon:silver_sword",
        "eidolon:silver_pickaxe",
        "eidolon:silver_axe",
        "eidolon:silver_hoe",
        "eidolon:silver_shovel",
        "iceandfire:armor_silver_metal_helmet",
        "iceandfire:armor_silver_metal_chestplate",
        "iceandfire:armor_silver_metal_leggings",
        "iceandfire:armor_silver_metal_boots",
        "#waystones:waystones",
        "waystones:warp_stone",
        "forbidden_arcanus:quantum_catcher",
        "forbidden_arcanus:mundabitur_dust",
        "enderstorage:ender_chest",
        "enderstorage:ender_tank",
        "enderstorage:ender_pouch",
        "iceandfire:armor_copper_metal_helmet",
        "iceandfire:armor_copper_metal_chestplate",
        "iceandfire:armor_copper_metal_leggings",
        "iceandfire:armor_copper_metal_boots",
        "iceandfire:copper_sword",
        "iceandfire:copper_shovel",
        "iceandfire:copper_pickaxe",
        "iceandfire:copper_hoe",
        "iceandfire:copper_axe",
        "pneumaticcraft:memory_stick",
        "pneumaticcraft:turbine_blade",
        "immersiveengineering:workbench",
        "occultism:butcher_knife",
        "immersiveengineering:sorter",
        "immersiveengineering:capacitor_lv",
        "immersiveengineering:hemp_fabric",
        "immersiveengineering:capacitor_mv",
        "immersiveengineering:turntable",
        "immersiveengineering:capcitor_hv",
        "immersiveengineering:sample_drill",
        // "immersiveengineering:alu_fence",
        // "immersiveengineering:alu_scaffolding_standard",
        // "immersiveengineering:alu_wallmount",
        "theurgy:pyromantic_brazier",
        "theurgy:calcination_oven",
        "theurgy:sal_ammoniac_tank",
        // "immersiveengineering:plate_aluminum",
        "actuallyadditions:rice_slimeball",
        "actuallyadditions:laser_upgrade_range",
        "actuallyadditions:laser_upgrade_invisibility",
        "actuallyadditions:atomic_reconstructor",
        "actuallyadditions:filter",
        "actuallyadditions:crate_keeper",
        "actuallyadditions:wooden_aiot",
        "actuallyadditions:stone_aiot",
        "actuallyadditions:iron_aiot",
        "actuallyadditions:diamond_aiot",
        "actuallyadditions:netherite_aiot",
        "grapplemod:limitsupgradeitem",
        "aquaculture:double_hook",
        "everythingcopper:copper_button",
        "everythingcopper:waxed_copper_button",
        "everythingcopper:waxed_exposed_copper_button",
        "everythingcopper:waxed_weathered_copper_button",
        "everythingcopper:waxed_oxidized_copper_button",
        // "sullysmod:copper_button",
        // "sullysmod:waxed_copper_button",
        // "sullysmod:waxed_exposed_copper_button",
        // "sullysmod:waxed_weathered_copper_button",
        // "sullysmod:waxed_oxidized_copper_button",
        "meetyourfight:ace_of_iron",
        "meetyourfight:dusk_key",
        "create_jetpack:jetpack"
    ];

    toRemove.forEach((item) => {
        event.remove({ output: item });
    });
});
