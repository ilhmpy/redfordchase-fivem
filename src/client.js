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
   } else {
       console.log("GANG");
   }

   console.log({ ped, player, x, y, z });
});