# How to set up and run a Mincemeat 2 server

Last updated for v0.4.15 (May 2025)

You need Java 17 (21 might work but untested) to run the server.

1. Open the Forge installer and click Install server. Select the Server-0.x.x folder, the same directory this file is in. Make sure you're connected to the Internet, then begin the installation.
2. Copy your `mods` folder from your Mincemeat 2 v0.x.x installation into this server folder. They are not provided with the server pack since some mods' licenses don't allow redistribution.
   Before doing this, turn OFF the "Show hidden files/folders" setting in the File Explorer/Finder so results from the `.index` folder don't confound your search results later on.
   Also copy the `.connector` folder if you've already launched the client version, this saves time on the first server launch since it won't need to transform Fabric mod files.
3. Delete the following files from the `mods` folder on the server (the new one in this folder). These are client-side mods that do not disable themselves on the server and therefore crash the server if left untouched:
   Mods in **bold** are newly-added mods in the most recent version of the pack.

-   continuity
-   EuphoriaPatcher
-   LegendaryTooltips
-   make_bubbles_pop
-   NekosEnchantedBooks
-   nolijium
-   oculus
-   YungsMenuTweaks

   Alternatively, if you're on Windows, you can run `delete_client_mods.bat` to do this step for you.

4. Set the JVM arguments as desired, you will probably need more RAM than the amount I set. `-Xmx`_(NUMBER GOES HERE)_`G` to set maximum allocated memory.
5. Open `server.properties` and change the query port so it's different from the main port (it doesn't matter what you set it to). This allows Simple Voice Chat to work on your server. This step can be ignored if you don't plan on using this mod.
6. Double click `run.bat` if you're on Windows, or `run.sh` if you're on Mac or Linux. You may be prompted to type "true" to accept the Mojang EULA if you didn't do that before.
   The performance statistics window that opens while the server is starting can be disabled safely by adding `nogui` to the end of `run.bat`.
