RegisterCommand("fraction", async (src, args, rawCommand) => {
   const player = PlayerPedId();
   const ped = GetPlayerPed(src);
   const sheriffCoordinates = {
        x: 1849.1907958984375,
        y: 3688.149658203125,
        z: 34.26708221435547,
   };

   const { x, y, z } = sheriffCoordinates;
   const sheriffsWeapons = [
        "pistol",
        "nightstick",
        "flashlight",
        "pumpshotgun",
        "stungun",
        "carbinerifle_mk2"
   ];

   if (args == 0) {
       SetEntityCoords(player, x, y, z, false, false, false, true);
       sheriffsWeapons.forEach((weaponHash, idx) => {
            GiveWeaponToPed(
                ped,
                `weapon_${weaponHash}`, 
                idx == 0 ? 1000 : 200, 
                false, 
                false,
            );
       });

       SetEntityHealth(ped, 200);
       SetPedArmour(ped, 200);
   } else {
       console.log("GANG");
   }
});

RegisterCommand("xyz", async (src) => {
    const ped = GetPlayerPed(src);
    console.log({ ped, xyz: GetEntityCoords(ped) });
})

RegisterCommand("getPoliceVeh", async (src, arg) => {
    const pedID = GetPlayerPed(src);
    const [x, y, z] = GetEntityCoords(pedID, true);

    if (arg[0]) { 
        RequestModel(arg[0]);
        const vehicleID = CreateVehicle(arg[0], x, y, z, GetEntityHeading(pedID), true, true);
        SetEntityCoords(vehicleID, x, y, z, false, false, false, false);
        SetPedIntoVehicle(pedID, vehicleID, -1);
    } else {
        emit("chat:addMessage", { 
            color: [255, 0, 0], 
            multiline: true, 
            args: [
                "Me",
                "policeold2",
                "sheriff - Ford Crown Victoria LSSD", 
                "sheriff2 - Ford Explorer LSSD", 
                "policeb - Police Bike", 
                "polmav - Police Maverick", 
                "schafter5 - Detective Cruiser"
            ] 
        });
    }
    
    /*RequestModel("police3");
    const vehicleID = CreateVehicle("police3", x, y, z, GetEntityHeading(pedID), true, true);
    SetEntityCoords(vehicleID, x, y, z, false, false, false, false);
    SetPedIntoVehicle(100, vehicleId, -1);
    console.log(IsModelInCdimage("pony"));*/
});