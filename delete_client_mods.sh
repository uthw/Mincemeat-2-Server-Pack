#!/bin/bash

pushd "$(dirname "$0")/mods" >/dev/null || { echo "ERROR: mods/ folder not found."; exit 1; }

patterns="BadOptimizations better_smithing_ui colorwheel continuity EuphoriaPatcher LegendaryTooltips make_bubbles_pop NekosEnchantedBooks oculus screenshot_viewer YungsMenuTweaks"

for p in $patterns; do
  shopt -s nullglob
  for f in *"$p"*.jar; do
    echo "Deleting \"$f\""
    rm -f "$f"
  done
done

popd >/dev/null

echo
echo "Done."